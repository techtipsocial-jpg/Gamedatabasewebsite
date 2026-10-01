# Game Database

Site + tiny Node backend. Idle RAM ~40-60MB — fits 512MB free hosts.

## Run locally

```cmd
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
node server.js
```

Open http://localhost:3000. (Opening `public/index.html` directly still works in offline local mode.)

## Deploy (Render free tier)

1. Push this folder to GitHub (`node_modules/` and `data/*.json` are git-ignored).
2. Render → New → Web Service → select the repo.
3. Build command: `npm install` — Start command: `node server.js`.
4. Open the URL Render gives you. Done.

Notes:
- Free disks are ephemeral: chat history resets when the service sleeps/restarts. Everything else (catalog, staff, updates) lives in `public/app.js` and is unaffected.
- Staff emails must match between `server.js` (`STAFF_EMAILS`) and `public/app.js` (`STAFF` contacts) or shields/mod tools break.
- Staff room password lives in `server.js` (`STAFF_CHAT_PASS`).

## Layout

- `server.js` — backend (static hosting, chat sync, timeouts, password checks)
- `public/` — the website (`index.html`, `styles.css`, `app.js`)
- `public/logo.png`, `public/verity.png` — optional images (drop them in; site falls back gracefully without them)
- `data/chat.json` — chat snapshot, auto-created at runtime
