/* ============ VERSION — bump on EVERY change + add an UPDATES entry at the top ============ */
const SITE_VERSION='1.9';

/* ============ DATABASE ============
   Add your own objects to these arrays —
   same shape as the commented examples. */

const GAMES = [
  {id:'g-doghub',kind:'game',title:'DogHub Static Edition',emoji:'🎮',cover:['#26262e','#101013'],rating:8.8,genre:['Arcade','Browser'],platforms:['Web'],release:'2025-01-01',developer:'Community',publisher:'Community',players:'Online play',size:'Runs in browser',link:'https://s3.amazonaws.com/deltamath-demo/index.html',desc:'Browser game hub with unblocked games.',long:'DogHub Static Edition is a web-based game hub. It opens directly in your browser with no install needed.',tags:['Browser','Unblocked']},
  // add more games below, same shape as above
  // {id:'g1',kind:'game',title:'My Game',emoji:'G',cover:['#312e81','#0e7490'],rating:9.0,genre:['Action'],platforms:['PC'],release:'2024-01-01',developer:'Me',publisher:'Me',players:'1K+',size:'10 GB',desc:'Short desc.',long:'Full description.',tags:['Fun']}
];

const PROXIES = [
  {id:'p-ather',kind:'proxy',name:'Ather',emoji:'🌐',host:'https://storage.googleapis.com/chubbyverity/index.html',proxyType:'HTTP',location:'Web',status:'Online',latency:88,uptime:99.1,anonymity:'Anonymous',speed:'Varies',link:'https://storage.googleapis.com/chubbyverity/index.html',desc:'Web proxy frontend - opens in browser.',provider:'Community mirror'},
  {id:'p-mizu',kind:'proxy',name:'Mizu',emoji:'🌐',host:'https://cdn.jsdelivr.net/gh/dorianhagar506-coder/mizu--lrq2df@main/mizu-4-aqng.svg',proxyType:'HTTP',location:'Web',status:'Online',latency:104,uptime:98.7,anonymity:'Anonymous',speed:'Varies',link:'https://cdn.jsdelivr.net/gh/dorianhagar506-coder/mizu--lrq2df@main/mizu-4-aqng.svg',desc:'Web proxy frontend - opens in browser.',provider:'Community mirror'},
  {id:'p-cherri',kind:'proxy',name:'Cherri',emoji:'🌐',host:'https://s3.amazonaws.com/cherrimath/index.html',proxyType:'HTTP',location:'Web',status:'Online',latency:76,uptime:99.3,anonymity:'Anonymous',speed:'Varies',link:'https://s3.amazonaws.com/cherrimath/index.html',desc:'Web proxy frontend - opens in browser.',provider:'Community mirror'},
  {id:'p-catclass',kind:'proxy',name:'Cat Class',emoji:'🌐',host:'https://s3.amazonaws.com/cat4z/index.html',proxyType:'HTTP',location:'Web',status:'Online',latency:92,uptime:98.9,anonymity:'Anonymous',speed:'Varies',link:'https://s3.amazonaws.com/cat4z/index.html',desc:'Web proxy frontend - opens in browser.',provider:'Community mirror'},
  {id:'p-bullbooks',kind:'proxy',name:'BullBooks',emoji:'🌐',host:'https://s3.amazonaws.com/phtn/index.html',proxyType:'HTTP',location:'Web',status:'Online',latency:81,uptime:99.0,anonymity:'Anonymous',speed:'Varies',link:'https://s3.amazonaws.com/phtn/index.html',desc:'Web proxy frontend - opens in browser.',provider:'Community mirror'},
  {id:'p-opium',kind:'proxy',name:'Opium',emoji:'🌐',host:'https://s3.amazonaws.com/opiumbull/index.html',proxyType:'HTTP',location:'Web',status:'Online',latency:97,uptime:98.5,anonymity:'Anonymous',speed:'Varies',link:'https://s3.amazonaws.com/opiumbull/index.html',desc:'Web proxy frontend - opens in browser.',provider:'Community mirror'},
  // add more proxies below, same shape as above
  // {id:'p1',kind:'proxy',name:'My Proxy',emoji:'P',host:'127.0.0.1:8080',proxyType:'HTTP',location:'USA',status:'Online',latency:50,uptime:99.9,anonymity:'Elite',speed:'1 Gbps',desc:'Short desc.',provider:'Me'}
];

const AIS = [
  {id:'a-verity',kind:'ai',title:'Verity AI',emoji:'💡',img:'verity.png',category:'Chatbot',rating:8.5,pricing:'Free',price:'Free',website:'https://s3.amazonaws.com/mathassets/index.html',desc:'Web-based AI chat companion - opens in browser.',features:['Web-based chat','Opens in browser','No install needed'],useCases:['Chat','Questions','Homework help'],company:'Community'},
  // add more AIs below, same shape as above
  // {id:'a1',kind:'ai',title:'My AI',emoji:'A',category:'Chatbot',rating:9.0,pricing:'Free',price:'Free',website:'https://example.com',desc:'Short desc.',features:['Feature 1'],useCases:['Use 1'],company:'Me'}
];

/* Auto-initialize: verify every collection exists and is
   usable before anything renders. Returns total entries. */
function initDatabase(){
  let total=0;
  if(typeof GAMES!=='undefined'&&Array.isArray(GAMES)) total+=GAMES.length;
  if(typeof PROXIES!=='undefined'&&Array.isArray(PROXIES)) total+=PROXIES.length;
  if(typeof AIS!=='undefined'&&Array.isArray(AIS)) total+=AIS.length;
  if(typeof STAFF!=='undefined'&&Array.isArray(STAFF)) total+=STAFF.length;
  return total;
}

/* ---- STAFF: Owner / Co-Owner / Admin / Developer / Helper ----
   Rename the placeholders or add your own. Role must be
   exactly one of: Owner, Co-Owner, Admin, Developer, Helper. */
const STAFF = [
  {id:'s-owner',kind:'staff',name:'John Huffman',emoji:'👑',role:'Owner',title:'Founder & Owner',status:'Active',desc:'Owns the project and makes final decisions.',responsibilities:['Project direction','Final approvals','Security'],contact:'jhuf0361@stu.cfisd.net',cover:['#713f12','#451a03']},
  {id:'s-coowner',kind:'staff',name:'Kendall Smith',emoji:'👑',role:'Co-Owner',title:'Co-Owner',status:'Active',desc:'Co-owns the project alongside the owner.',responsibilities:['Co-direction','Approvals','Community'],contact:'Ksmi0700@stu.cfisd.net',cover:['#92400e','#451a03']},
  {id:'s-admin',kind:'staff',name:'Titus Irvin',emoji:'🛡️',role:'Admin',title:'Administrator',status:'Active',desc:'Keeps the community and database running smoothly.',responsibilities:['Moderation','Content review','Support'],contact:'Tirv0747@stu.cfisd.net',cover:['#7f1d1d','#1c0505']},
  {id:'s-dev',kind:'staff',name:'Ryan Something',emoji:'💻',role:'Developer',title:'Developer',status:'Active',desc:'Builds and maintains the website and database.',responsibilities:['Features','Bug fixes','Performance'],contact:'dev@example.com',cover:['#0e7490','#082f49']},
  {id:'s-helper',kind:'staff',name:'Camron C',emoji:'🤝',role:'Helper',title:'Helper',status:'Active',desc:'Helps users and answers questions.',responsibilities:['Answer questions','Guides','Feedback'],contact:'helper@example.com',cover:['#14532d','#052e16']},
];

/* ---- CHANGELOG: newest first. Add new entries at the top. ---- */
const UPDATES = [
  {id:'u-deploytrim',version:'v1.9',date:'2026-10-01',title:'Slim folder for GitHub upload',items:['Removed local dependencies: folder is down to 8 files','Host reinstalls dependencies automatically on deploy']},
  {id:'u-backend',version:'v1.8',date:'2026-10-01',title:'Backend server for shared chat',items:['Node backend syncs public and staff chat between all visitors','Timeouts and staff password enforced server-side','Site still works offline with local fallback mode','Fits 512MB RAM free hosting']},
  {id:'u-publishprep',version:'v1.7',date:'2026-09-30',title:'Publish readiness pass',items:['Fixed 26 lines of garbled symbols site-wide','Dropped the Pre Dev label from the version','Removed the old backup file from the folder']},
  {id:'u-verity',version:'v1.6 Pre Dev',date:'2026-09-30',title:'Verity AI + entry pictures',items:['Verity AI added with website link','AI entries can show a custom picture (verity.png)','Emoji fallback shows if the picture file is missing']},
  {id:'u-links',version:'v1.5 Pre Dev',date:'2026-09-30',title:'Game and proxy links',items:['DogHub Static Edition added with a Play now button','6 web proxies: Ather, Mizu, Cherri, Cat Class, BullBooks, Opium','Link entries get an open-in-browser button on their pages']},
  {id:'u-logo',version:'v1.4 Pre Dev',date:'2026-09-30',title:'Official site logo',items:['Custom Game Database logo in the nav bar','Logo used as browser tab favicon','Automatic fallback to G mark if logo file is missing']},
  {id:'u-mono',version:'v1.3 Pre Dev',date:'2026-09-30',title:'Black and grey theme',items:['Removed all purple and blue accents site-wide','Monochrome buttons, badges, tabs and cards','Role badges now use a grey rank hierarchy','Online, degraded and offline status colors kept']},
  {id:'u-slowmode-staffchat',version:'v1.2 Pre Dev',date:'2026-09-30',title:'Slowmode and staff chat',items:['3-second slowmode in public chat (staff exempt)','Password-protected staff channel','Same auto-mod, identity and mod tools in both rooms']},
  {id:'u-versioning',version:'v1.1 Pre Dev',date:'2026-09-30',title:'Automatic versioning',items:['Single SITE_VERSION source in app.js','Version badge, About panel and footer update automatically','Every change bumps the version and adds a changelog entry']},
  {id:'u-mod',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Chat moderator tools',items:['Staff-only timeouts: 1m, 10m, 1h, 24h','Delete any message, Clear chat restricted to staff','Timed-out users blocked with expiry notice','Staff and self timeouts are protected']},
  {id:'u-shield',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Staff shields in chat',items:['Shield badge on messages from staff emails','Hover tooltip shows role: Staff member','Shield also shown in the identity bar']},
  {id:'u-email',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Email-linked chat identity',items:['Link an email to unlock chat','Display name is read from the email automatically','Verified badge on linked messages, no impersonation']},
  {id:'u-chat',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Public chat + auto-moderation',items:['Live community chat with history','Blocks swearing, links, spam, ALL CAPS and personal info','Rate-limiting and repeat-spam protection']},
  {id:'u-staff',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Staff directory',items:['Owner, Co-Owner, Admin, Developer and Helper roles','Role filters, ranking and team previews','Named roster with contact emails']},
  {id:'u-dbfix',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Database loading fix',items:['Fixed loader freeze on tab switching','Auto-initializing database with error messages','Sample data for quick testing']},
  {id:'u-launch',version:'v1.0 Pre Dev',date:'2026-09-30',title:'Site launch',items:['Dashboard with live stats','Games, Proxies and AI catalogs with search and filters','Favorites, recently viewed and detail pages','Dark black/gray gradient theme']},
];

const ALL = [...GAMES, ...PROXIES, ...AIS, ...STAFF];
const byId = id => ALL.find(x=>x.id===id);
const displayName = it => it.title && it.kind!=='staff' ? it.title : (it.name || it.title);

/* ============ STATE ============ */
let favs = JSON.parse(localStorage.getItem('gdb_favs')||'[]');
let recent = JSON.parse(localStorage.getItem('gdb_recent')||'[]');
let lastView = 'home';
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ============ HELPERS ============ */
function saveFavs(){ localStorage.setItem('gdb_favs',JSON.stringify(favs)); $('#favCount').textContent=favs.length; renderHomeFavs(); }
function pushRecent(id){ recent=[id,...recent.filter(r=>r!==id)].slice(0,6); localStorage.setItem('gdb_recent',JSON.stringify(recent)); renderRecent(); }
function isFav(id){ return favs.includes(id); }
function toggleFav(id,ev){ if(ev) ev.stopPropagation(); favs=isFav(id)?favs.filter(f=>f!==id):[...favs,id]; saveFavs(); refreshFavButtons(id); renderFavs(); }
function refreshFavButtons(id){ $$(`[data-fav="${id}"]`).forEach(b=>{ b.classList.toggle('active',isFav(id)); b.textContent=isFav(id)?'★ Saved':'☆ Save'; }); }
function stars(r){ const n=Math.round(r/2); return '★'.repeat(n)+'☆'.repeat(5-n); }
function esc(s){ return String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function showLoadError(msg){
  const l=$('#loader');
  if(l){ l.classList.remove('show'); }
  const active=document.querySelector('.view.active');
  if(!active) return;
  let err=document.querySelector('#loadError');
  if(!err){
    err=document.createElement('div');
    err.id='loadError';
    err.className='empty';
    err.style.borderColor='rgba(239,68,68,.6)';
    active.prepend(err);
  }
  err.textContent='Could not load data: '+msg+' — please reload the page.';
}
function fakeLoad(cb,ms=350){
  const l=$('#loader');
  try{ if(l) l.classList.add('show'); }catch(e){}
  try{
    ['#gamesGrid','#proxiesGrid','#aisGrid','#staffGrid'].forEach(sel=>{
      const el=$(sel);
      const view=el&&el.closest?el.closest('.view'):null;
      if(el && view && view.classList.contains('active'))
        el.innerHTML='<div class="skel"></div><div class="skel"></div><div class="skel"></div>';
    });
  }catch(err){ console.error(err); }
  setTimeout(()=>{
    try{ if(l) l.classList.remove('show'); }catch(e){}
    try{ if(cb) cb(); }
    catch(err){ console.error(err); showLoadError(err&&err.message||err); }
  },ms);
}

/* ============ NAV ============ */
function nav(view){
  if(view!=='detail') lastView=view;
  $$('#mainTabs .tab, #mobileTabs .tab').forEach(t=>t.classList.toggle('active',t.dataset.nav===view));
  $$('.view').forEach(v=>v.classList.remove('active'));
  const target = view==='detail' ? $('#view-detail') : ($('#view-'+view)||$('#view-home'));
  target.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  $('#searchResults').classList.remove('open');
  if(view==='favorites') renderFavs();
}
document.addEventListener('click',e=>{
  const n=e.target.closest('[data-nav]'); if(n) fakeLoad(()=>nav(n.dataset.nav),250);
});
$('#mobileMenuBtn').onclick=()=>{ const m=$('#mobileTabs'); m.style.display=m.style.display==='flex'?'none':'flex'; };
$('#backBtn').onclick=()=>nav(lastView);

/* ============ CARDS ============ */
function gameCard(g){
  return `<article class="card" data-open="${g.id}">
    <div class="cover" style="background:linear-gradient(135deg,${g.cover[0]},${g.cover[1]})">
      <div class="shade"></div><span class="emoji">${g.emoji}</span>
      <div class="cover-badges"><span class="badge rating">★ ${g.rating}</span><span class="badge">${esc(g.genre[0])}</span></div>
    </div>
    <div class="card-body">
      <h3>${esc(g.title)}</h3>
      <p class="desc">${esc(g.desc)}</p>
      <div class="meta">${g.platforms.slice(0,3).map(p=>`<span>${esc(p)}</span>`).join('')}</div>
      <div class="card-foot"><small>${esc(g.release.slice(0,4))} • ${esc(g.developer)}</small>
      <button class="fav-btn ${isFav(g.id)?'active':''}" data-fav="${g.id}">${isFav(g.id)?'★ Saved':'☆ Save'}</button></div>
    </div></article>`;
}
function proxyCard(p){
  return `<article class="card" data-open="${p.id}">
    <div class="cover" style="background:linear-gradient(135deg,#26262e,#101013)">
      <div class="shade"></div><span class="emoji">${p.emoji}</span>
      <div class="cover-badges"><span class="badge type">${esc(p.proxyType)}</span><span class="badge">${esc(p.anonymity)}</span></div>
    </div>
    <div class="card-body">
      <h3>${esc(p.name)}</h3>
      <p class="desc">${esc(p.desc)}</p>
      <div class="meta"><span>${esc(p.location)}</span><span>${esc(p.speed)}</span><span>${p.latency?p.latency+' ms':'—'}</span></div>
      <div class="card-foot"><span class="status ${p.status}"><i></i>${p.status}</span>
      <button class="fav-btn ${isFav(p.id)?'active':''}" data-fav="${p.id}">${isFav(p.id)?'★ Saved':'☆ Save'}</button></div>
    </div></article>`;
}
function aiCard(a){
  return `<article class="card" data-open="${a.id}">
    <div class="cover" style="background:linear-gradient(135deg,#27272a,#101013)">
      ${a.img?'<img class="cover-img" src="'+esc(a.img)+'" alt="" onload="this.classList.add(\'ok\')" onerror="this.remove()">':''}
      <div class="shade"></div><span class="emoji">${a.emoji}</span>
      <div class="cover-badges"><span class="badge rating">★ ${a.rating}</span><span class="badge">${esc(a.category)}</span><span class="badge type">${esc(a.pricing)}</span></div>
    </div>
    <div class="card-body">
      <h3>${esc(a.title)}</h3>
      <p class="desc">${esc(a.desc)}</p>
      <div class="meta">${a.features.slice(0,3).map(f=>`<span>${esc(f)}</span>`).join('')}</div>
      <div class="card-foot"><small>${esc(a.price)}</small>
      <button class="fav-btn ${isFav(a.id)?'active':''}" data-fav="${a.id}">${isFav(a.id)?'★ Saved':'☆ Save'}</button></div>
    </div></article>`;
}
const ROLE_RANK = {Owner:0,'Co-Owner':1,Admin:2,Developer:3,Helper:4};
function staffCard(s){
  const cov = s.cover || ['#27272a','#101013'];
  return `<article class="card" data-open="${s.id}">
    <div class="cover" style="background:linear-gradient(135deg,${cov[0]},${cov[1]})">
      <div class="shade"></div><span class="emoji">${s.emoji||'U'}</span>
      <div class="cover-badges"><span class="badge role-${esc(s.role)}">${esc(s.role)}</span><span class="badge">${esc(s.status||'Active')}</span></div>
    </div>
    <div class="card-body">
      <h3>${esc(s.name)}</h3>
      <p class="desc">${esc(s.title||'')} - ${esc(s.desc||'')}</p>
      <div class="meta">${(s.responsibilities||[]).slice(0,3).map(r=>`<span>${esc(r)}</span>`).join('')}</div>
      <div class="card-foot"><small>${esc(s.contact||'')}</small>
      <button class="fav-btn ${isFav(s.id)?'active':''}" data-fav="${s.id}">Save</button></div>
    </div></article>`;
}
document.addEventListener('click',e=>{
  const f=e.target.closest('[data-fav]'); if(f){ toggleFav(f.dataset.fav,e); return; }
  const c=e.target.closest('[data-open]'); if(c) openDetail(c.dataset.open);
});
document.addEventListener('click',e=>{
  const b=e.target&&e.target.closest?e.target.closest('[data-mod]'):null;
  if(!b||!b.dataset) return;
  if(!staffForEmail(linkedEmail())) return;
  const R=b.dataset.room==='staff'?staffRoom:publicRoom;
  const warn=$(R.warn);
  const deny=msg=>{ if(warn){ warn.textContent=msg; warn.classList.add('show'); } };
  if(b.dataset.mod==='panel'){
    const em=String(b.dataset.email||'').toLowerCase();
    modPanelFor=(modPanelFor===em?null:em);
    renderChatRoom(R);
  }
  else if(b.dataset.mod==='dur'){
    const em=String(b.dataset.email||'').toLowerCase();
    if(staffForEmail(em)){ deny('You cannot time out a staff member.'); return; }
    if(em===linkedEmail().toLowerCase()){ deny('You cannot time out yourself.'); return; }
    if(Net.online){ const R2=R; Net.remoteMod('timeout',{email:em,min:parseInt(b.dataset.min,10)||10},R2,warn,deny); return; }
    timeoutUser(em,parseInt(b.dataset.min,10)||10);
    modPanelFor=null; renderChatRoom(R);
  }
  else if(b.dataset.mod==='untimeout'){ if(Net.online){ Net.remoteMod('untimeout',{email:b.dataset.email},R,warn,deny); return; } untimeoutUser(b.dataset.email); modPanelFor=null; renderChatRoom(R); }
  else if(b.dataset.mod==='del'){ if(Net.online){ Net.remoteMod('del',{id:b.dataset.id},R,warn,deny); return; } R.msgs=R.msgs.filter(m=>m.id!==b.dataset.id); saveChatRoom(R); renderChatRoom(R); }
});

/* ============ FILTERS ============ */
function initFilters(){
  const genres=[...new Set(GAMES.flatMap(g=>g.genre||[]))].sort();
  $('#gamesGenre').innerHTML='<option value="">All genres</option>'+genres.map(g=>`<option>${esc(g)}</option>`).join('');
  $('#gamesGenreChips').innerHTML='<button class="chip active" data-g="all">All</button>'+genres.slice(0,9).map(g=>`<button class="chip" data-g="${esc(g)}">${esc(g)}</button>`).join('');
  const cats=[...new Set(AIS.map(a=>a.category).filter(Boolean))].sort();
  $('#aisCategory').innerHTML='<option value="">All categories</option>'+cats.map(c=>`<option>${esc(c)}</option>`).join('');
  $('#aisCategoryChips').innerHTML='<button class="chip active" data-c="all">All</button>'+cats.map(c=>`<button class="chip" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  $('#gamesGenreChips').onclick=e=>{ const b=e.target.closest('.chip'); if(!b)return;
    $$('#gamesGenreChips .chip').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    $('#gamesGenre').value=b.dataset.g==='all'?'':b.dataset.g; renderGames(); };
  $('#aisCategoryChips').onclick=e=>{ const b=e.target.closest('.chip'); if(!b)return;
    $$('#aisCategoryChips .chip').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    $('#aisCategory').value=b.dataset.c==='all'?'':b.dataset.c; renderAIs(); };
}
function renderGames(){
  let list=[...GAMES];
  const q=$('#gamesSearch').value.toLowerCase(), g=$('#gamesGenre').value, p=$('#gamesPlatform').value, s=$('#gamesSort').value;
  if(q) list=list.filter(x=>(x.title+x.desc+x.developer+x.genre.join(' ')).toLowerCase().includes(q));
  if(g) list=list.filter(x=>x.genre.includes(g));
  if(p) list=list.filter(x=>x.platforms.includes(p));
  if(s==='rating')list.sort((a,b)=>b.rating-a.rating);
  if(s==='newest')list.sort((a,b)=>b.release.localeCompare(a.release));
  if(s==='oldest')list.sort((a,b)=>a.release.localeCompare(b.release));
  if(s==='az')list.sort((a,b)=>a.title.localeCompare(b.title));
  $('#gamesCount').textContent=`${list.length} games in catalog`;
  $('#gamesGrid').innerHTML=list.length?list.map(gameCard).join(''):`<div class="empty">No games yet. Add your own in app.js → GAMES.</div>`;
}
function renderProxies(){
  let list=[...PROXIES];
  const q=$('#proxiesSearch').value.toLowerCase(), t=$('#proxiesType').value, st=$('#proxiesStatus').value, s=$('#proxiesSort').value;
  if(q) list=list.filter(x=>(x.name+x.location+x.proxyType+x.host).toLowerCase().includes(q));
  if(t) list=list.filter(x=>x.proxyType===t);
  if(st) list=list.filter(x=>x.status===st);
  if(s==='fastest')list.sort((a,b)=>(a.latency||9999)-(b.latency||9999));
  if(s==='uptime')list.sort((a,b)=>b.uptime-a.uptime);
  if(s==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
  $('#proxiesCount').textContent=`${list.length} proxies tracked`;
  $('#proxiesGrid').innerHTML=list.length?list.map(proxyCard).join(''):`<div class="empty">No proxies yet. Add your own in app.js → PROXIES.</div>`;
}
function renderAIs(){
  let list=[...AIS];
  const q=$('#aisSearch').value.toLowerCase(), c=$('#aisCategory').value, pr=$('#aisPricing').value, s=$('#aisSort').value;
  if(q) list=list.filter(x=>(x.title+x.desc+x.category+x.features.join(' ')).toLowerCase().includes(q));
  if(c) list=list.filter(x=>x.category===c);
  if(pr) list=list.filter(x=>x.pricing===pr);
  if(s==='rating')list.sort((a,b)=>b.rating-a.rating); else list.sort((a,b)=>a.title.localeCompare(b.title));
  $('#aisCount').textContent=`${list.length} AI tools indexed`;
  $('#aisGrid').innerHTML=list.length?list.map(aiCard).join(''):`<div class="empty">No AIs yet. Add your own in app.js → AIS.</div>`;
}
['gamesSearch','gamesGenre','gamesPlatform','gamesSort'].forEach(id=>document.addEventListener('input',e=>{ if(e.target.id===id)renderGames(); }));
document.addEventListener('change',e=>{ if(['gamesGenre','gamesPlatform','gamesSort','proxiesType','proxiesStatus','proxiesSort','aisCategory','aisPricing','aisSort','staffRole','staffSort'].includes(e.target.id)){renderGames();renderProxies();renderAIs();renderStaff();} });
['proxiesSearch'].forEach(id=>document.addEventListener('input',e=>{ if(e.target.id===id)renderProxies(); }));
['aisSearch'].forEach(id=>document.addEventListener('input',e=>{ if(e.target.id===id)renderAIs(); }));
['staffSearch'].forEach(id=>document.addEventListener('input',e=>{ if(e.target.id===id)renderStaff(); }));

function renderStaff(){
  const grid=$('#staffGrid'); if(!grid) return;
  let list=[...STAFF];
  const q=($('#staffSearch')&&$('#staffSearch').value||'').toLowerCase();
  const r=$('#staffRole')&&$('#staffRole').value;
  const s=$('#staffSort')&&$('#staffSort').value;
  if(q) list=list.filter(x=((x.name||'')+' '+(x.title||'')+' '+(x.role||'')+' '+(x.desc||'')).toLowerCase().includes(q));
  if(r) list=list.filter(x=>x.role===r);
  if(s==='az') list.sort((a,b)=>(a.name||'').localeCompare(b.name||''));
  else list.sort((a,b)=>((ROLE_RANK[a.role]!==undefined?ROLE_RANK[a.role]:99)-(ROLE_RANK[b.role]!==undefined?ROLE_RANK[b.role]:99)));
  const c=$('#staffCount'); if(c) c.textContent=list.length+' team members';
  grid.innerHTML=list.length?list.map(staffCard).join(''):'<div class="empty">No staff yet. Add your own in app.js - STAFF.</div>';
  const chips=$('#staffRoleChips');
  if(chips && !chips.dataset.bound){
    chips.dataset.bound='1';
    chips.onclick=e=>{ const b=e.target.closest('.chip'); if(!b)return;
      chips.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); b.classList.add('active');
      const sel=$('#staffRole'); if(sel) sel.value=b.dataset.r==='all'?'':b.dataset.r; renderStaff(); };
  }
}

/* ============ DASHBOARD ============ */
function renderDashboard(){
  $('#statGames').textContent=GAMES.length;
  $('#statProxies').textContent=PROXIES.length;
  $('#statAIs').textContent=AIS.length;
  const stEl=$('#statStaff'); if(stEl) stEl.textContent=STAFF.length;
  const total=GAMES.length+PROXIES.length+AIS.length+STAFF.length;
  const eb=$('#eyebrowCount'); if(eb) eb.textContent=total?total+' ENTRIES':'READY FOR YOUR DATA';
  const online=PROXIES.filter(p=>p.status==='Online');
  const avgLat=online.length?Math.round(online.reduce((s,p)=>s+p.latency,0)/online.length):0;
  const avgUp=PROXIES.length?(PROXIES.reduce((s,p)=>s+p.uptime,0)/PROXIES.length).toFixed(1):'0.0';
  $('#statOnline').textContent=avgUp+'%';
  $('#avgLatency').textContent=PROXIES.length?avgLat+' ms':'—';
  $('#avgLatency2').textContent=PROXIES.length?avgLat+' ms':'—';
  $('#onlineCount').textContent=online.length+'/'+PROXIES.length;
  $('#eliteCount').textContent=PROXIES.filter(p=>p.anonymity==='Elite').length;
  $('#proxyStatusLine').textContent=`● ${online.length}/${PROXIES.length} online`;
  $('#miniChart').innerHTML=online.length?online.slice(0,14).map((p,i)=>`<i style="height:${Math.max(15,100-p.latency/1.8)}%;animation-delay:${i*0.06}s"></i>`).join(''):'<div class="empty" style="width:100%">No data yet</div>';
  const tg=[...GAMES].sort((a,b)=>b.rating-a.rating).slice(0,3);
  $('#trendingGames').innerHTML=tg.length?tg.map(gameCard).join(''):'<div class="empty">No games yet — add some in app.js → GAMES</div>';
  const tp=[...PROXIES].filter(p=>p.status==='Online').sort((a,b)=>a.latency-b.latency).slice(0,4);
  $('#topProxies').innerHTML=tp.length?tp.map(p=>`
    <div class="row" data-open="${p.id}"><div class="ic">${p.emoji}</div>
    <div class="inf"><strong>${esc(p.name)}</strong><small>${esc(p.location)} • ${esc(p.proxyType)}</small></div>
    <div class="r"><span class="status ${p.status}"><i></i>${p.status}</span><br><span class="lat"><b>${p.latency} ms</b></span></div></div>`).join(''):'<div class="empty">No proxies yet — add some in app.js → PROXIES</div>';
  const ta=[...AIS].sort((a,b)=>b.rating-a.rating).slice(0,4);
  $('#topAIs').innerHTML=ta.length?ta.map(a=>`
    <div class="row" data-open="${a.id}"><div class="ic">${a.emoji}</div>
    <div class="inf"><strong>${esc(a.title)}</strong><small>${esc(a.category)} • ${esc(a.pricing)}</small></div>
    <div class="r">★ ${a.rating}<br><small>${esc(a.price.split('/')[0])}</small></div></div>`).join(''):'<div class="empty">No AIs yet — add some in app.js → AIS</div>';
  renderRecent(); renderHomeFavs();
  const ssl=$('#staffStatusLine'); if(ssl){ const nRoles=new Set(STAFF.map(s=>s.role)).size; ssl.textContent='- '+STAFF.length+' members / '+nRoles+' roles'; }
  const teamEl=$('#teamPreview');
  if(teamEl){
    const ordered=[...STAFF].sort((a,b)=>((ROLE_RANK[a.role]!==undefined?ROLE_RANK[a.role]:99)-(ROLE_RANK[b.role]!==undefined?ROLE_RANK[b.role]:99))).slice(0,4);
    teamEl.innerHTML=ordered.length?ordered.map(s=>'<div class="row" data-open="'+s.id+'"><div class="ic">'+s.emoji+'</div><div class="inf"><strong>'+esc(s.name)+'</strong><small>'+esc(s.role)+' - '+esc(s.title||'')+'</small></div><div class="r"><span class="badge role-'+esc(s.role)+'">'+esc(s.role)+'</span></div></div>').join(''):'<div class="empty">No staff yet.</div>';
  }
}
function renderRecent(){
  const el=$('#recentList');
  el.innerHTML=recent.length?recent.map(id=>{const it=byId(id);if(!it)return'';
    return `<div class="row" data-open="${it.id}"><div class="ic">${it.emoji}</div>
    <div class="inf"><strong>${esc(displayName(it))}</strong><small>${it.kind} • ${esc(it.kind==='game'?it.genre[0]:it.kind==='proxy'?it.proxyType:it.kind==='staff'?it.role:it.category)}</small></div>
    <div class="r"><button class="fav-btn ${isFav(it.id)?'active':''}" data-fav="${it.id}">${isFav(it.id)?'★':'☆'}</button></div></div>`;}).join(''):`<div class="empty">Nothing viewed yet — click any card.</div>`;
}
function renderHomeFavs(){
  const el=$('#homeFavs'); if(!el)return;
  el.innerHTML=favs.length?favs.slice(0,4).map(id=>{const it=byId(id);if(!it)return'';
    return `<div class="row" data-open="${it.id}"><div class="ic">${it.emoji}</div>
    <div class="inf"><strong>${esc(displayName(it))}</strong><small>${it.kind}</small></div>
    <div class="r"><button class="fav-btn active" data-fav="${it.id}">★</button></div></div>`;}).join(''):`<div class="empty">No favorites yet — hit ☆ Save on any card.</div>`;
}
function renderFavs(){
  const el=$('#favsGrid');
  el.innerHTML=favs.length?favs.map(id=>{const it=byId(id);if(!it)return'';
    return it.kind==='game'?gameCard(it):it.kind==='proxy'?proxyCard(it):it.kind==='staff'?staffCard(it):aiCard(it);}).join(''):`<div class="empty">No saved items yet. Browse Games, Proxies or AIs and tap ☆ Save.</div>`;
}
$('#clearRecent').onclick=()=>{recent=[];localStorage.setItem('gdb_recent','[]');renderRecent();};
$('#clearFavs').onclick=()=>{favs=[];saveFavs();renderFavs();renderGames();renderProxies();renderAIs();renderStaff();renderDashboard();};

/* ============ DETAIL ============ */
function openDetail(id){
  const it=byId(id); if(!it)return;
  pushRecent(id);
  let html='';
  if(it.kind==='game'){
    html=`<div class="detail">
      <div class="detail-hero" style="background:linear-gradient(135deg,${it.cover[0]},${it.cover[1]})"><span class="big">${it.emoji}</span>
        <div><div class="cover-badges"><span class="badge rating">★ ${it.rating} / 10</span>${it.genre.map(g=>`<span class="badge">${esc(g)}</span>`).join('')}</div>
        <h1>${esc(it.title)}</h1><p>${esc(it.desc)}</p></div></div>
      <div class="detail-grid"><div class="detail-main">
        <h3>About</h3><p style="color:#d4d4d8;line-height:1.7">${esc(it.long)}</p>
        <h3>Tags</h3><div class="meta">${it.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
        <h3>Platforms</h3><div class="meta">${it.platforms.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
        <div class="detail-actions">
          <button class="btn primary" data-fav="${it.id}">${isFav(it.id)?'★ Saved':'☆ Save to favorites'}</button>
          <button class="btn ghost" onclick="navigator.clipboard&&navigator.clipboard.writeText(location.href+'#${it.id}')">⧉ Copy link</button>
        </div></div>
        <div class="detail-side">
          <div class="spec"><small>Rating</small><strong>★ ${it.rating} — ${stars(it.rating)}</strong></div>
          <div class="spec"><small>Release date</small><strong>${esc(it.release)}</strong></div>
          <div class="spec"><small>Developer</small><strong>${esc(it.developer)}</strong></div>
          <div class="spec"><small>Publisher</small><strong>${esc(it.publisher)}</strong></div>
          <div class="spec"><small>Players</small><strong>${esc(it.players)}</strong></div>
          <div class="spec"><small>Size</small><strong>${esc(it.size)}</strong></div>
        </div></div></div>`;
  } else if(it.kind==='proxy'){
    html=`<div class="detail">
      <div class="detail-hero" style="background:linear-gradient(135deg,#26262e,#101013)"><span class="big">${it.emoji}</span>
        <div><div class="cover-badges"><span class="badge type">${esc(it.proxyType)}</span><span class="badge">${esc(it.anonymity)} anonymity</span></div>
        <h1>${esc(it.name)}</h1><p>${esc(it.desc)}</p></div></div>
      <div class="detail-grid"><div class="detail-main">
        <h3>Connection</h3>
        <dl>
        <div class="kv"><dt>Endpoint</dt><dd><code>${esc(it.host)}</code></dd></div>
        <div class="kv"><dt>Type</dt><dd>${esc(it.proxyType)}</dd></div>
        <div class="kv"><dt>Location</dt><dd>${esc(it.location)}</dd></div>
        <div class="kv"><dt>Anonymity</dt><dd>${esc(it.anonymity)}</dd></div>
        <div class="kv"><dt>Provider</dt><dd>${esc(it.provider)}</dd></div>
        </dl>
        <h3>Best for</h3>
        <ul class="feat-list"><li>Gaming with low ping routes</li><li>Web scraping & SEO monitoring</li><li>Geo-unblocking ${esc(it.location)}</li></ul>
        <div class="detail-actions">
          <button class="btn primary" data-fav="${it.id}">${isFav(it.id)?'★ Saved':'☆ Save to favorites'}</button>
          <button class="btn ghost" onclick="navigator.clipboard&&navigator.clipboard.writeText('${esc(it.host)}')">⧉ Copy endpoint</button>
        </div></div>
        <div class="detail-side">
          <div class="spec"><small>Status</small><strong><span class="status ${it.status}"><i></i>${it.status}</span></strong></div>
          <div class="spec"><small>Latency</small><strong>${it.latency?it.latency+' ms':'— offline'}</strong></div>
          <div class="spec"><small>Uptime (30d)</small><strong>${it.uptime}%</strong></div>
          <div class="spec"><small>Speed</small><strong>${esc(it.speed)}</strong></div>
          <div class="spec"><small>Anonymity</small><strong>${esc(it.anonymity)}</strong></div>
        </div></div></div>`;
  } else if(it.kind==='ai'){
    html=`<div class="detail">
      <div class="detail-hero" style="background:linear-gradient(135deg,#27272a,#101013)">${it.img?'<img class="detail-img" src="'+esc(it.img)+'" alt="" onload="this.classList.add(\'ok\')" onerror="this.remove()">':''}<span class="big">${it.emoji}</span>
        <div><div class="cover-badges"><span class="badge rating">★ ${it.rating}</span><span class="badge">${esc(it.category)}</span><span class="badge type">${esc(it.pricing)}</span></div>
        <h1>${esc(it.title)}</h1><p>${esc(it.desc)}</p></div></div>
      <div class="detail-grid"><div class="detail-main">
        <h3>Key features</h3><ul class="feat-list">${it.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>
        <h3>Use cases</h3><div class="meta">${it.useCases.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
        <div class="detail-actions">
          <a class="btn primary" href="${it.website}" target="_blank" rel="noopener" style="text-decoration:none">Visit website ↗</a>
          <button class="btn ghost" data-fav="${it.id}">${isFav(it.id)?'★ Saved':'☆ Save'}</button>
        </div></div>
        <div class="detail-side">
          <div class="spec"><small>Rating</small><strong>★ ${it.rating} — ${stars(it.rating)}</strong></div>
          <div class="spec"><small>Pricing</small><strong>${esc(it.pricing)}</strong></div>
          <div class="spec"><small>Plan</small><strong>${esc(it.price)}</strong></div>
          <div class="spec"><small>Company</small><strong>${esc(it.company)}</strong></div>
          <div class="spec"><small>Website</small><strong style="font-size:13px;word-break:break-all">${esc(it.website)}</strong></div>
        </div></div></div>`;
  } else if(it.kind==='staff'){
    const cov = it.cover || ['#27272a','#101013'];
    html='<div class="detail">'
      +'<div class="detail-hero" style="background:linear-gradient(135deg,'+cov[0]+','+cov[1]+')"><span class="big">'+it.emoji+'</span>'
      +'<div><div class="cover-badges"><span class="badge role-'+esc(it.role)+'">'+esc(it.role)+'</span><span class="badge">'+esc(it.status||'Active')+'</span></div>'
      +'<h1>'+esc(it.name)+'</h1><p>'+esc(it.title||'')+' - '+esc(it.desc||'')+'</p></div></div>'
      +'<div class="detail-grid"><div class="detail-main">'
      +'<h3>Responsibilities</h3><ul class="feat-list">'+(it.responsibilities||[]).map(f=>'<li>'+esc(f)+'</li>').join('')+'</ul>'
      +'<div class="detail-actions"><button class="btn primary" data-fav="'+it.id+'">Save to favorites</button></div></div>'
      +'<div class="detail-side">'
      +'<div class="spec"><small>Role</small><strong>'+esc(it.role)+'</strong></div>'
      +'<div class="spec"><small>Title</small><strong>'+esc(it.title||'-')+'</strong></div>'
      +'<div class="spec"><small>Status</small><strong>'+esc(it.status||'Active')+'</strong></div>'
      +'<div class="spec"><small>Contact</small><strong style="font-size:13px;word-break:break-all">'+esc(it.contact||'-')+'</strong></div>'
      +'</div></div></div>';
  }
  if(it.link&&(it.kind==='game'||it.kind==='proxy')){
    const label=it.kind==='game'?'Play now':'Open site';
    html=html.replace('<div class="detail-actions">','<div class="detail-actions"><a class="btn primary" href="'+esc(it.link)+'" target="_blank" rel="noopener" style="text-decoration:none">'+label+'</a>');
  }
  $('#detailContent').innerHTML=html;
  fakeLoad(()=>nav('detail'),300);
}

/* ============ GLOBAL SEARCH ============ */
$('#globalSearch').addEventListener('input',e=>{
  const q=e.target.value.trim().toLowerCase(), box=$('#searchResults');
  if(q.length<2){box.classList.remove('open');return;}
  const hits=ALL.filter(it=>(displayName(it)+' '+(it.desc||'')+' '+(it.kind==='game'?it.genre.join(' ')+it.developer:it.kind==='proxy'?it.proxyType+it.location:it.kind==='staff'?it.role+it.title:it.category)).toLowerCase().includes(q)).slice(0,8);
  box.innerHTML=hits.length?hits.map(it=>`<div class="sr-item" data-open="${it.id}"><span class="sr-badge">${it.kind}</span><div><div class="t">${esc(displayName(it))}</div><div class="s">${esc((it.desc||'').slice(0,60))}…</div></div></div>`).join(''):`<div class="sr-item"><div class="s">No results for “${esc(q)}”</div></div>`;
  box.classList.add('open');
});
document.addEventListener('click',e=>{ if(!e.target.closest('.search-wrap'))$('#searchResults').classList.remove('open'); });

/* ============ PUBLIC CHAT + AUTO-MOD ============ */
const CHAT_KEY='gdb_chat', CHAT_NAME_KEY='gdb_chat_name';
const STAFF_CHAT_KEY='gdb_staff_chat';
const STAFF_CHAT_PASS='Staff1234#';
const STAFF_CHAT_UNLOCK_KEY='gdb_staff_unlocked';
const SLOWMODE_MS=3000;
const publicRoom={key:CHAT_KEY,msgs:[],flood:[],lastSend:0,box:'#chatMessages',count:'#chatCount',warn:'#chatWarn',text:'#chatText',clear:'#clearChat'};
const staffRoom={key:STAFF_CHAT_KEY,msgs:[],flood:[],lastSend:0,box:'#staffMessages',count:'#staffChatCount',warn:'#staffWarn',text:'#staffText',clear:'#clearStaffChat'};
const BAD_WORDS=['fuck','shit','bitch','asshole','bastard','dick','pussy','cunt','whore','slut','faggot','fag','nigger','nigga','retard','motherfucker','jackass','dumbass','cocksucker','twat','wanker','jizz'];
const LINK_RE=/(https?:\/\/|www\.|discord\.gg|discord\.com\/invite|[a-z0-9-]+\.(com|net|org|io|gg|co|me|tv|xyz|site|online|link|ly|app|dev))\b/i;
function normLeet(s){
  return s.toLowerCase().replace(/0/g,'o').replace(/1/g,'i').replace(/3/g,'e').replace(/4/g,'a').replace(/5/g,'s').replace(/7/g,'t').replace(/\$/g,'s').replace(/@/g,'a').replace(/[^a-z ]/g,' ');
}
function hasProfanity(t,strict){
  const n=normLeet(t), ns=n.replace(/ /g,'');
  for(const w of BAD_WORDS){
    if(!strict&&ns.indexOf(w)!==-1) return true;
    const parts=n.split(' ');
    for(const p of parts){ if(p===w) return true; }
  }
  return false;
}
function moderateChat(name,text,room){
  const t=(text||'').trim();
  const nm=(name||'').trim();
  const R=room||publicRoom;
  if(!t) return {ok:false,reason:'Message is empty.'};
  if(t.length>300) return {ok:false,reason:'Message too long (max 300 characters).'};
  if(LINK_RE.test(t)||LINK_RE.test(nm)) return {ok:false,reason:'Links and invites are not allowed.'};
  if(/\d{7,}/.test(t.replace(/[\s\-().]/g,''))) return {ok:false,reason:'Phone numbers and personal info are not allowed.'};
  if(hasProfanity(t,false)||hasProfanity(nm,true)) return {ok:false,reason:'Swearing is not allowed.'};
  const letters=t.replace(/[^A-Za-z]/g,'');
  if(letters.length>=12&&(letters.replace(/[^A-Z]/g,'').length/letters.length)>0.7) return {ok:false,reason:'Please turn off caps lock.'};
  if(/(.)\1{5,}/.test(t)) return {ok:false,reason:'No letter-spamming.'};
  const now=Date.now();
  R.flood=(R.flood||[]).filter(x=>now-x<10000);
  if(R.flood.length>=5) return {ok:false,reason:'Slow down: wait a few seconds.'};
  const mine=R.msgs.filter(m=>!m.sys&&m.user===nm);
  if(mine.length&&mine[mine.length-1].text===t) return {ok:false,reason:'No repeat spam: say something new.'};
  return {ok:true,text:t};
}
function saveChatRoom(room){ try{ localStorage.setItem(room.key,JSON.stringify(room.msgs.slice(-100))); }catch(e){} }
function staffForEmail(email){
  const e=String(email||'').trim().toLowerCase();
  if(!e||typeof STAFF==='undefined'||!Array.isArray(STAFF)) return null;
  for(const s of STAFF){ if(s.contact&&String(s.contact).trim().toLowerCase()===e) return s; }
  return null;
}
function staffShield(email){
  const st=staffForEmail(email);
  if(!st) return '';
  return '<span class="staff-shield" title="Staff member - '+esc(st.role||'Staff')+'">🛡️</span>';
}
function chatTime(ts){ try{ return new Date(ts).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}); }catch(e){ return ''; } }
function renderChatRoom(room){
  const box=$(room.box); if(!box) return;
  let me=''; try{ me=localStorage.getItem(CHAT_NAME_KEY)||''; }catch(e){}
  let myEmail=''; try{ myEmail=linkedEmail(); }catch(e){}
  const imMod=!!staffForEmail(myEmail);
  const timeouts=getTimeouts();
  const activeTo=Object.keys(timeouts).length;
  const rm=room===staffRoom?'staff':'public';
  box.innerHTML=room.msgs.map(m=>{
    if(m.sys) return '<div class="msg sys">'+esc(m.text)+'</div>';
    const cls=m.user===me&&me?'msg mine':'msg';
    const badge=m.v?'<span class="vbadge">✓</span>':'';
    const shield=staffShield(m.email);
    let mod='';
    if(imMod&&m.email){
      const em=esc(m.email);
      const toExp=timeouts[String(m.email).toLowerCase()]||0;
      mod='<span class="mod-btns"><button class="mod-btn" data-mod="panel" data-room="'+rm+'" data-email="'+em+'" title="Timeout user">⏱</button>'
        +'<button class="mod-btn" data-mod="del" data-room="'+rm+'" data-id="'+esc(m.id||'')+'" title="Delete message">🗑</button></span>';
      if(toExp) mod+='<span class="to-badge">timed out until '+esc(chatTimeLong(toExp))+'</span>';
      if(modPanelFor&&modPanelFor===String(m.email).toLowerCase()){
        mod+='<div class="mod-panel"><span>Timeout '+esc(m.user)+':</span>'
          +'<button class="dur-btn" data-mod="dur" data-room="'+rm+'" data-email="'+em+'" data-min="1">1m</button>'
          +'<button class="dur-btn" data-mod="dur" data-room="'+rm+'" data-email="'+em+'" data-min="10">10m</button>'
          +'<button class="dur-btn" data-mod="dur" data-room="'+rm+'" data-email="'+em+'" data-min="60">1h</button>'
          +'<button class="dur-btn" data-mod="dur" data-room="'+rm+'" data-email="'+em+'" data-min="1440">24h</button>';
        if(toExp) mod+='<button class="dur-btn" data-mod="untimeout" data-room="'+rm+'" data-email="'+em+'">Remove</button>';
        mod+='</div>';
      }
    }
    return '<div class="'+cls+'"><div class="u">'+esc(m.user)+shield+badge+'<span class="ts">'+esc(chatTime(m.ts))+'</span>'+mod+'</div><div class="t">'+esc(m.text)+'</div></div>';
  }).join('');
  const c=$(room.count); if(c) c.textContent=room.msgs.filter(m=>!m.sys).length+' messages - auto-moderated'+(imMod&&activeTo?' - '+activeTo+' timed out':'');
  const cc=$(room.clear); if(cc) cc.style.display=imMod?'':'none';
  box.scrollTop=box.scrollHeight;
}
function renderChat(){ renderChatRoom(publicRoom); }
function renderStaffRoom(){ if(isStaffUnlocked()) renderChatRoom(staffRoom); }
function sendChatRoom(room){
  const textEl=$(room.text), warn=$(room.warn);
  if(!textEl) return;
  const email=linkedEmail();
  if(!email){ if(warn){ warn.textContent='Link your email above to chat first.'; warn.classList.add('show'); } return; }
  const name=deriveName(email);
  const toExp=isTimedOut(email);
  if(toExp){ if(warn){ warn.textContent='You are timed out until '+chatTimeLong(toExp)+'.'; warn.classList.add('show'); } return; }
  const now=Date.now();
  if(!staffForEmail(email)&&room.lastSend&&now-room.lastSend<SLOWMODE_MS){
    const wait=Math.ceil((SLOWMODE_MS-(now-room.lastSend))/1000);
    if(warn){ warn.textContent='Slowmode: wait '+wait+'s before sending.'; warn.classList.add('show'); }
    return;
  }
  const res=moderateChat(name,textEl.value,room);
  if(!res.ok){ if(warn){ warn.textContent='Blocked: '+res.reason; warn.classList.add('show'); } return; }
  if(Net.online){ Net.remoteSend(room,res.text,email,warn,textEl); return; }
  if(warn) warn.classList.remove('show');
  room.flood.push(Date.now());
  room.lastSend=Date.now();
  room.msgs.push({id:'c'+Date.now()+''+Math.floor(Math.random()*999),user:name,email:email,text:res.text,ts:Date.now(),v:true});
  if(room.msgs.length>100) room.msgs=room.msgs.slice(-100);
  saveChatRoom(room);
  try{ localStorage.setItem(CHAT_NAME_KEY,name); }catch(e){}
  textEl.value='';
  renderChatRoom(room);
}
function sendChat(){ sendChatRoom(publicRoom); }
function sendStaffChat(){ sendChatRoom(staffRoom); }
const CHAT_EMAIL_KEY='gdb_chat_email';
function linkedEmail(){ try{ return localStorage.getItem(CHAT_EMAIL_KEY)||''; }catch(e){ return ''; } }
function deriveName(email){
  const local=String(email||'').split('@')[0]||'Guest';
  const words=local.split(/[._\-]+/).filter(Boolean);
  const pretty=words.map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ')||'Guest';
  return pretty.slice(0,24);
}
function linkEmail(){
  const em=$('#chatEmail'), warn=$('#chatWarn');
  const v=((em&&em.value)||'').trim().toLowerCase();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){
    if(warn){ warn.textContent='Enter a valid email address to link.'; warn.classList.add('show'); }
    return false;
  }
  try{ localStorage.setItem(CHAT_EMAIL_KEY,v); localStorage.setItem(CHAT_NAME_KEY,deriveName(v)); }catch(e){}
  if(warn) warn.classList.remove('show');
  renderIdentity(); renderChat();
  const t=$('#chatText'); if(t&&t.focus) t.focus();
  return true;
}
function renderIdentity(){
  const bar=$('#identityBar'); if(!bar) return;
  const email=linkedEmail();
  const textEl=$('#chatText'), sendBtn=$('#chatSend');
  if(!email){
    bar.innerHTML='<span class="id-note">Link your email to chat — your name is read from it.</span>'
      +'<input id="chatEmail" class="input" type="email" placeholder="you@example.com" autocomplete="off" />'
      +'<button class="btn primary" id="linkEmailBtn" style="padding:11px 16px;">Link Email</button>';
    const btn=$('#linkEmailBtn'), em=$('#chatEmail');
    if(btn) btn.onclick=linkEmail;
    if(em) em.addEventListener('keydown',e=>{ if(e.key==='Enter') linkEmail(); });
    if(textEl) textEl.disabled=true;
    if(sendBtn) sendBtn.disabled=true;
  }else{
    bar.innerHTML='<span class="id-note">Chatting as</span> <b>'+esc(deriveName(email))+'</b>'+staffShield(email)
      +'<span class="vbadge">✓ Linked</span>'
      +'<span class="id-email">'+esc(email)+'</span>'
      +'<button class="btn ghost" id="unlinkBtn" style="margin-left:auto;padding:8px 12px;font-size:12px;">Switch</button>';
    const ub=$('#unlinkBtn');
    if(ub) ub.onclick=()=>{
      let ok=true;
      try{ ok=confirm('Unlink '+email+'? You will need to link again to chat.'); }catch(e){ ok=true; }
      if(!ok) return;
      try{ localStorage.removeItem(CHAT_EMAIL_KEY); localStorage.removeItem(CHAT_NAME_KEY); }catch(e){}
      renderIdentity(); renderChat();
    };
    if(textEl) textEl.disabled=false;
    if(sendBtn) sendBtn.disabled=false;
  }
}
const MOD_TIMEOUTS_KEY='gdb_chat_timeouts';
let modPanelFor=null;
function getTimeouts(){
  let o={};
  try{ o=JSON.parse(localStorage.getItem(MOD_TIMEOUTS_KEY)||'{}')||{}; }catch(e){ o={}; }
  const now=Date.now(); let changed=false;
  for(const k of Object.keys(o)){ if(!o[k]||o[k]<=now){ delete o[k]; changed=true; } }
  if(changed){ try{ localStorage.setItem(MOD_TIMEOUTS_KEY,JSON.stringify(o)); }catch(e){} }
  return o;
}
function isTimedOut(email){
  const o=getTimeouts();
  return o[String(email||'').toLowerCase()]||0;
}
function timeoutUser(email,min){
  const e=String(email||'').toLowerCase(); if(!e) return 0;
  const exp=Date.now()+Math.max(1,parseInt(min,10)||10)*60000;
  const o=getTimeouts(); o[e]=exp;
  try{ localStorage.setItem(MOD_TIMEOUTS_KEY,JSON.stringify(o)); }catch(e2){}
  return exp;
}
function untimeoutUser(email){
  const e=String(email||'').toLowerCase();
  const o=getTimeouts();
  if(o[e]){ delete o[e]; try{ localStorage.setItem(MOD_TIMEOUTS_KEY,JSON.stringify(o)); }catch(e2){} }
}
function chatTimeLong(ts){ try{ return new Date(ts).toLocaleString([], {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}); }catch(e){ return ''; } }
function loadMsgs(key,welcome){
  try{ const a=JSON.parse(localStorage.getItem(key)||'[]'); if(Array.isArray(a)&&a.length) return a; }catch(e){}
  return [{id:'c-welcome',user:'System',sys:true,text:welcome,ts:Date.now()}];
}
function initChat(){
  publicRoom.msgs=loadMsgs(CHAT_KEY,'Welcome to public chat! Link your email above: your name is read from it so nobody can post as you.');
  renderIdentity();
  renderChatRoom(publicRoom);
}
let staffUnlockedMem=false;
function isStaffUnlocked(){ try{ return !!sessionStorage.getItem(STAFF_CHAT_UNLOCK_KEY); }catch(e){ return staffUnlockedMem; } }
function renderStaffLock(){
  const lock=$('#staffLock'), wrap=$('#staffRoomWrap');
  const open=isStaffUnlocked();
  if(lock) lock.style.display=open?'none':'';
  if(wrap) wrap.style.display=open?'':'none';
  if(open){ renderChatRoom(staffRoom); Net.syncRooms(); }
}
function unlockStaffChat(){
  const em=$('#staffPass'), warn=$('#staffWarn');
  if(Net.online){ return Net.remoteUnlock(((em&&em.value)||''),warn,em); }
  if(((em&&em.value)||'')===STAFF_CHAT_PASS){
    try{ sessionStorage.setItem(STAFF_CHAT_UNLOCK_KEY,'1'); }catch(e){ staffUnlockedMem=true; }
    if(warn) warn.classList.remove('show');
    if(em) em.value='';
    renderStaffLock();
    return true;
  }
  if(warn){ warn.textContent='Wrong password.'; warn.classList.add('show'); }
  return false;
}
function lockStaffChat(){
  try{ sessionStorage.removeItem(STAFF_CHAT_UNLOCK_KEY); }catch(e){}
  staffUnlockedMem=false;
  renderStaffLock();
}
function initStaffChat(){
  staffRoom.msgs=loadMsgs(STAFF_CHAT_KEY,'Staff-only channel. Same auto-mod and identity rules apply here.');
  renderStaffLock();
}
function renderUpdates(){
  const el=$('#updatesList'); if(!el) return;
  el.innerHTML=UPDATES.length?UPDATES.map(u=>'<article class="update-card"><div class="up-top"><span class="badge type">'+esc(u.version)+'</span><span class="up-date">'+esc(u.date)+'</span></div><h3>'+esc(u.title)+'</h3><ul class="feat-list">'+u.items.map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul></article>').join(''):'<div class="empty">No updates yet.</div>';
  const c=$('#updatesCount'); if(c) c.textContent=UPDATES.length+' updates • newest first';
}

function applyVersion(){
  const v='v'+SITE_VERSION;
  try{ document.querySelectorAll('.version-badge').forEach(el=>{ el.textContent=v; }); }catch(e){}
  const a=$('#aboutVersion'); if(a) a.textContent=v;
  const f=$('#footVersion'); if(f) f.textContent=v;
}

/* ============ NET (backend link; silent local fallback) ============ */
const Net={
  online:false, ws:null, wsOk:false, pollTimer:null, retryTimer:null,
  base(){ try{ if(location.protocol==='file:') return ''; return location.origin||''; }catch(e){ return ''; } },
  setStatus(){
    const t=this.online&&this.wsOk?'Live':(this.online?'Online':'Offline mode');
    const live=this.online&&this.wsOk;
    ['#netStatus','#staffNetStatus'].forEach(s=>{ const el=$(s); if(!el) return; el.textContent=t; el.classList.toggle('live',live); });
  },
  async init(){
    if(typeof fetch==='undefined') return;
    if(!this.base()) return;
    try{
      const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),3000);
      const r=await fetch(this.base()+'/api/health',{signal:ctl.signal}); clearTimeout(to);
      if(!r.ok) throw 0;
      this.online=true;
      await this.syncRooms();
      this.connectWS();
      if(!this.wsOk&&!this.pollTimer) this.pollTimer=setInterval(()=>{ this.syncRooms(); },5000);
    }catch(e){ this.online=false; }
    this.setStatus();
  },
  async syncRooms(){
    if(!this.online||typeof fetch==='undefined') return;
    try{
      const h=await (await fetch(this.base()+'/api/history?room=public')).json();
      if(h.msgs){ publicRoom.msgs=h.msgs.slice(-100); saveChatRoom(publicRoom); }
      if(h.timeouts) mergeTimeouts(h.timeouts);
      renderChatRoom(publicRoom);
      const tok=staffToken();
      if(tok){
        const s=await fetch(this.base()+'/api/history?room=staff&token='+encodeURIComponent(tok));
        if(s.status===401){ clearStaffToken(); renderStaffLock(); }
        else{ const sj=await s.json(); if(sj.msgs){ staffRoom.msgs=sj.msgs.slice(-100); saveChatRoom(staffRoom); } if(sj.timeouts) mergeTimeouts(sj.timeouts); renderStaffRoom(); }
      }
    }catch(e){}
  },
  connectWS(){
    try{
      const proto=location.protocol==='https:'?'wss://':'ws://';
      const ws=new WebSocket(proto+location.host+'/ws');
      this.ws=ws;
      ws.onopen=()=>{ this.wsOk=true; try{ ws.send(JSON.stringify({t:'hello',email:linkedEmail()})); }catch(e){} this.setStatus(); };
      ws.onmessage=(ev)=>{
        let m=null; try{ m=JSON.parse(ev.data); }catch(e){ return; }
        if(m.t==='msg'){ const R=m.room==='staff'?staffRoom:publicRoom; addMsg(R,m.msg); }
        else if(m.t==='del'){ const R=m.room==='staff'?staffRoom:publicRoom; R.msgs=R.msgs.filter(x=>x.id!==m.id); saveChatRoom(R); renderChatRoom(R); }
        else if(m.t==='timeouts'){ mergeTimeouts(m.timeouts||{}); renderChatRoom(publicRoom); renderStaffRoom(); }
      };
      ws.onclose=()=>{ this.wsOk=false; this.setStatus(); if(!this.pollTimer) this.pollTimer=setInterval(()=>{ this.syncRooms(); },5000); if(!this.retryTimer) this.retryTimer=setTimeout(()=>{ this.retryTimer=null; this.connectWS(); },10000); };
      ws.onerror=()=>{ try{ ws.close(); }catch(e){} };
    }catch(e){}
  },
  async remoteSend(room,text,email,warn,textEl){
    try{
      const r=await fetch(this.base()+'/api/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({room:room===staffRoom?'staff':'public',email:email,text:text,token:staffToken()})});
      const d=await r.json();
      if(!r.ok||!d.ok){ if(warn){ warn.textContent=d.error||'Send failed.'; warn.classList.add('show'); } return; }
      addMsg(room,d.msg);
      room.flood.push(Date.now()); room.lastSend=Date.now();
      try{ localStorage.setItem(CHAT_NAME_KEY,d.msg.user); }catch(e){}
      textEl.value='';
      if(warn) warn.classList.remove('show');
    }catch(e){ this.online=false; this.setStatus(); localSend(room,text,email,warn,textEl); }
  },
  async remoteMod(action,payload,R,warn,deny){
    try{
      const body={action:action,modEmail:linkedEmail(),room:R===staffRoom?'staff':'public'};
      for(const k of Object.keys(payload||{})) body[k]=payload[k];
      const r=await fetch(this.base()+'/api/mod',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
      const d=await r.json();
      if(!r.ok||!d.ok){ deny(d.error||'Mod action failed.'); return; }
      modPanelFor=null;
      if(action==='del'){ R.msgs=R.msgs.filter(m=>m.id!==payload.id); saveChatRoom(R); }
      if(d.timeouts) mergeTimeouts(d.timeouts);
      renderChatRoom(R);
    }catch(e){ deny('Server unreachable.'); }
  },
  async remoteUnlock(password,warn,em){
    try{
      const r=await fetch(this.base()+'/api/unlock',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:password})});
      const d=await r.json();
      if(!r.ok||!d.token){ if(warn){ warn.textContent=(d&&d.error)||'Wrong password.'; warn.classList.add('show'); } return false; }
      try{ sessionStorage.setItem(STAFF_CHAT_UNLOCK_KEY,d.token); }catch(e){ staffUnlockedMem=true; }
      if(warn) warn.classList.remove('show');
      if(em) em.value='';
      renderStaffLock();
      this.syncRooms();
      return true;
    }catch(e){ return this.localUnlock(password,warn,em); }
  },
  localUnlock(password,warn,em){
    if(password===STAFF_CHAT_PASS){
      try{ sessionStorage.setItem(STAFF_CHAT_UNLOCK_KEY,'local'); }catch(e){ staffUnlockedMem=true; }
      if(warn) warn.classList.remove('show');
      if(em) em.value='';
      renderStaffLock();
      return true;
    }
    if(warn){ warn.textContent='Wrong password.'; warn.classList.add('show'); }
    return false;
  }
};
function staffToken(){ try{ return sessionStorage.getItem(STAFF_CHAT_UNLOCK_KEY)||''; }catch(e){ return staffUnlockedMem?'local':''; } }
function clearStaffToken(){ try{ sessionStorage.removeItem(STAFF_CHAT_UNLOCK_KEY); }catch(e){} staffUnlockedMem=false; }
function addMsg(room,msg){
  if(!msg||room.msgs.some(m=>m.id===msg.id)) return false;
  room.msgs.push(msg);
  if(room.msgs.length>100) room.msgs=room.msgs.slice(-100);
  saveChatRoom(room);
  renderChatRoom(room);
  return true;
}
function mergeTimeouts(incoming){
  let cur={};
  try{ cur=JSON.parse(localStorage.getItem('gdb_chat_timeouts')||'{}')||{}; }catch(e){ cur={}; }
  const now=Date.now();
  for(const k of Object.keys(incoming||{})){ if(incoming[k]>now) cur[k]=Math.max(cur[k]||0,incoming[k]); }
  for(const k of Object.keys(cur)){ if(!cur[k]||cur[k]<=now) delete cur[k]; }
  try{ localStorage.setItem('gdb_chat_timeouts',JSON.stringify(cur)); }catch(e){}
}
function localSend(room,text,email,warn,textEl){
  const name=deriveName(email);
  const res=moderateChat(name,text,room);
  if(!res.ok){ if(warn){ warn.textContent='Blocked: '+res.reason; warn.classList.add('show'); } return; }
  if(warn) warn.classList.remove('show');
  room.flood.push(Date.now());
  room.lastSend=Date.now();
  room.msgs.push({id:'c'+Date.now()+''+Math.floor(Math.random()*999),user:name,email:email,text:res.text,ts:Date.now(),v:true});
  if(room.msgs.length>100) room.msgs=room.msgs.slice(-100);
  saveChatRoom(room);
  try{ localStorage.setItem(CHAT_NAME_KEY,name); }catch(e){}
  textEl.value='';
  renderChatRoom(room);
}

/* ============ INIT ============ */
try{
  const dbCount=initDatabase();
  if(!dbCount) throw new Error('database is empty');
  // drop saved ids that no longer exist
  favs=favs.filter(id=>byId(id)); recent=recent.filter(id=>byId(id));
  localStorage.setItem('gdb_favs',JSON.stringify(favs)); localStorage.setItem('gdb_recent',JSON.stringify(recent));
  $('#favCount').textContent=favs.length;
  initFilters(); renderGames(); renderProxies(); renderAIs(); renderStaff(); renderDashboard(); renderFavs(); renderUpdates(); applyVersion();
  initChat(); initStaffChat(); Net.init();
  if($('#chatSend')) $('#chatSend').onclick=sendChat;
  if($('#chatText')) $('#chatText').addEventListener('keydown',e=>{ if(e.key==='Enter') sendChat(); });
  if($('#clearChat')) $('#clearChat').onclick=()=>{ publicRoom.msgs=[]; publicRoom.flood=[]; saveChatRoom(publicRoom); initChat(); };
  if($('#clearStaffChat')) $('#clearStaffChat').onclick=()=>{ staffRoom.msgs=[]; staffRoom.flood=[]; saveChatRoom(staffRoom); initStaffChat(); };
  if($('#staffSend')) $('#staffSend').onclick=sendStaffChat;
  if($('#staffText')) $('#staffText').addEventListener('keydown',e=>{ if(e.key==='Enter') sendStaffChat(); });
  if($('#unlockBtn')) $('#unlockBtn').onclick=unlockStaffChat;
  if($('#staffPass')) $('#staffPass').addEventListener('keydown',e=>{ if(e.key==='Enter') unlockStaffChat(); });
  if($('#lockStaffBtn')) $('#lockStaffBtn').onclick=lockStaffChat;
}catch(err){
  console.error(err);
  try{ showLoadError(err&&err.message||err); }catch(e){}
}
// deep link #id
if(location.hash.length>2){ const it=byId(location.hash.slice(1)); if(it) openDetail(it.id); }



