/* Game Database backend — tiny Express + WebSocket server.
   RAM use idle is ~40-60MB (fits 512MB free hosts).
   Serves ./public and syncs chat rooms between all visitors. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const SNAP_FILE = path.join(DATA_DIR, 'chat.json');

/* ---- config (keep in sync with public/app.js) ---- */
const STAFF_CHAT_PASS = 'Staff1234#';
const SLOWMODE_MS = 3000;
// MUST match the contact emails in public/app.js STAFF or shields/mod break:
const STAFF_EMAILS = [
  'jhuf0361@stu.cfisd.net',
  'ksmi0700@stu.cfisd.net',
  'tirv0747@stu.cfisd.net',
  'dev@example.com',
  'helper@example.com',
];
const BAD_WORDS = ['fuck', 'shit', 'bitch', 'asshole', 'bastard', 'dick', 'pussy', 'cunt', 'whore', 'slut', 'faggot', 'fag', 'nigger', 'nigga', 'retard', 'motherfucker', 'jackass', 'dumbass', 'cocksucker', 'twat', 'wanker', 'jizz'];
const LINK_RE = /(https?:\/\/|www\.|discord\.gg|discord\.com\/invite|[a-z0-9-]+\.(com|net|org|io|gg|co|me|tv|xyz|site|online|link|ly|app|dev))\b/i;

/* ---- state ---- */
const rooms = { public: [], staff: [] };
let timeouts = {}; // email(lower) -> expiry ms
const flood = {}; // email -> [timestamps]
const lastSend = {}; // email -> timestamp
const tokens = new Set(); // staff-room unlock tokens

function load() {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const s = JSON.parse(fs.readFileSync(SNAP_FILE, 'utf8'));
    if (Array.isArray(s.public)) rooms.public = s.public.slice(-100);
    if (Array.isArray(s.staff)) rooms.staff = s.staff.slice(-100);
    if (s.timeouts) timeouts = s.timeouts;
  } catch (e) { /* first boot */ }
  if (!rooms.public.length) rooms.public = [{ id: 'c-welcome', user: 'System', sys: true, text: 'Welcome to public chat! Link your email above: your name is read from it so nobody can post as you.', ts: Date.now() }];
  if (!rooms.staff.length) rooms.staff = [{ id: 'sc-welcome', user: 'System', sys: true, text: 'Staff-only channel. Same auto-mod and identity rules apply here.', ts: Date.now() }];
}
function save() {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(SNAP_FILE, JSON.stringify({ public: rooms.public.slice(-100), staff: rooms.staff.slice(-100), timeouts }));
  } catch (e) { /* ephemeral disk hosts may fail; chat keeps working in memory */ }
}
setInterval(save, 60000);

/* ---- helpers ---- */
const isStaff = (email) => STAFF_EMAILS.includes(String(email || '').trim().toLowerCase());
function deriveName(email) {
  const local = String(email || '').split('@')[0] || 'Guest';
  const pretty = local.split(/[._-]+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Guest';
  return pretty.slice(0, 24);
}
function normLeet(s) {
  return s.toLowerCase().replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e').replace(/4/g, 'a').replace(/5/g, 's').replace(/7/g, 't').replace(/\$/g, 's').replace(/@/g, 'a').replace(/[^a-z ]/g, ' ');
}
function hasProfanity(t, strict) {
  const n = normLeet(t), ns = n.replace(/ /g, '');
  for (const w of BAD_WORDS) {
    if (!strict && ns.indexOf(w) !== -1) return true;
    for (const p of n.split(' ')) { if (p === w) return true; }
  }
  return false;
}
function pruneTimeouts() {
  const now = Date.now();
  for (const k of Object.keys(timeouts)) { if (!timeouts[k] || timeouts[k] <= now) delete timeouts[k]; }
}
function moderate(email, text) {
  const t = String(text || '').trim();
  const e = String(email || '').trim().toLowerCase();
  if (!t) return { ok: false, reason: 'Message is empty.' };
  if (t.length > 300) return { ok: false, reason: 'Message too long (max 300 characters).' };
  if (LINK_RE.test(t)) return { ok: false, reason: 'Links and invites are not allowed.' };
  if (/\d{7,}/.test(t.replace(/[\s\-().]/g, ''))) return { ok: false, reason: 'Phone numbers and personal info are not allowed.' };
  if (hasProfanity(t, false)) return { ok: false, reason: 'Swearing is not allowed.' };
  const letters = t.replace(/[^A-Za-z]/g, '');
  if (letters.length >= 12 && (letters.replace(/[^A-Z]/g, '').length / letters.length) > 0.7) return { ok: false, reason: 'Please turn off caps lock.' };
  if (/(.)\1{5,}/.test(t)) return { ok: false, reason: 'No letter-spamming.' };
  const now = Date.now();
  const toExp = timeouts[e] || 0;
  if (toExp > now) return { ok: false, reason: 'timeout', until: toExp };
  if (!isStaff(e) && lastSend[e] && now - lastSend[e] < SLOWMODE_MS) {
    return { ok: false, reason: 'slowmode', wait: Math.ceil((SLOWMODE_MS - (now - lastSend[e])) / 1000) };
  }
  flood[e] = (flood[e] || []).filter((x) => now - x < 10000);
  if (flood[e].length >= 5) return { ok: false, reason: 'Slow down: wait a few seconds.' };
  const name = deriveName(e);
  const mine = (room) => room.filter((m) => !m.sys && m.user === name);
  return { ok: true, name };
}
function pushMsg(room, email, text) {
  const name = deriveName(email);
  const msg = { id: 'c' + Date.now() + Math.floor(Math.random() * 9999), user: name, email, text: String(text).trim(), ts: Date.now(), v: true };
  rooms[room].push(msg);
  if (rooms[room].length > 100) rooms[room] = rooms[room].slice(-100);
  const e = email.toLowerCase();
  flood[e] = flood[e] || [];
  flood[e].push(Date.now());
  lastSend[e] = Date.now();
  save();
  return msg;
}

/* ---- app ---- */
const app = express();
app.use(express.json({ limit: '50kb' }));
app.use(express.static(path.join(__dirname, 'public')));

// tiny rate limit: 120 req/min per IP on /api
const rl = new Map();
app.use('/api', (req, res, next) => {
  const now = Date.now();
  const hit = rl.get(req.ip) || { n: 0, reset: now + 60000 };
  if (now > hit.reset) { hit.n = 0; hit.reset = now + 60000; }
  hit.n++;
  rl.set(req.ip, hit);
  if (hit.n > 120) return res.status(429).json({ error: 'Rate limited, slow down.' });
  next();
});

app.get('/api/health', (req, res) => {
  pruneTimeouts();
  res.json({ ok: true, version: '1.8.0', rooms: { public: rooms.public.length, staff: rooms.staff.length }, timeouts: Object.keys(timeouts).length, uptime: Math.round(process.uptime()) });
});
app.get('/api/history', (req, res) => {
  const room = req.query.room === 'staff' ? 'staff' : 'public';
  if (room === 'staff' && !tokens.has(String(req.query.token || ''))) return res.status(401).json({ error: 'Staff password required.' });
  pruneTimeouts();
  res.json({ msgs: rooms[room], timeouts });
});
app.post('/api/unlock', (req, res) => {
  if (req.body.password !== STAFF_CHAT_PASS) return res.status(403).json({ error: 'Wrong password.' });
  const token = crypto.randomBytes(16).toString('hex');
  tokens.add(token);
  res.json({ token });
});
app.post('/api/send', (req, res) => {
  const room = req.body.room === 'staff' ? 'staff' : 'public';
  const email = String(req.body.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ error: 'Link your email to chat first.' });
  if (room === 'staff' && !tokens.has(String(req.body.token || ''))) return res.status(401).json({ error: 'Staff password required.' });
  pruneTimeouts();
  const r = moderate(email, req.body.text);
  if (!r.ok) {
    if (r.reason === 'timeout') return res.status(403).json({ error: 'You are timed out.', until: r.until });
    if (r.reason === 'slowmode') return res.status(429).json({ error: 'Slowmode: wait ' + r.wait + 's before sending.' });
    return res.status(400).json({ error: r.reason });
  }
  const msg = pushMsg(room, email, req.body.text);
  broadcast({ t: 'msg', room, msg });
  broadcast({ t: 'timeouts', timeouts });
  res.json({ ok: true, msg });
});
app.post('/api/mod', (req, res) => {
  const modEmail = String(req.body.modEmail || '').trim().toLowerCase();
  if (!isStaff(modEmail)) return res.status(403).json({ error: 'Staff only.' });
  const room = req.body.room === 'staff' ? 'staff' : 'public';
  pruneTimeouts();
  if (req.body.action === 'del') {
    rooms[room] = rooms[room].filter((m) => m.id !== req.body.id);
    save();
    broadcast({ t: 'del', room, id: req.body.id });
    return res.json({ ok: true });
  }
  if (req.body.action === 'timeout' || req.body.action === 'untimeout') {
    const target = String(req.body.email || '').trim().toLowerCase();
    if (isStaff(target)) return res.status(400).json({ error: 'You cannot time out a staff member.' });
    if (target === modEmail) return res.status(400).json({ error: 'You cannot time out yourself.' });
    if (req.body.action === 'timeout') timeouts[target] = Date.now() + Math.max(1, parseInt(req.body.min, 10) || 10) * 60000;
    else delete timeouts[target];
    save();
    broadcast({ t: 'timeouts', timeouts });
    return res.json({ ok: true, timeouts });
  }
  return res.status(400).json({ error: 'Unknown action.' });
});

/* ---- websocket: live broadcasts ---- */
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
function broadcast(obj) {
  const s = JSON.stringify(obj);
  for (const c of wss.clients) { if (c.readyState === 1) { try { c.send(s); } catch (e) {} } }
}
wss.on('connection', (ws) => {
  ws.on('message', (buf) => {
    try {
      const m = JSON.parse(String(buf));
      if (m.t === 'hello') { ws.email = String(m.email || '').toLowerCase(); }
    } catch (e) {}
  });
});

load();
server.listen(PORT, () => console.log('Game Database backend on port ' + PORT));
