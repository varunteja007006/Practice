# Docker Demo — Networking Notes

## BEFORE: Both Ports Exposed

### docker-compose.yaml
```yaml
api:
  ports:
    - "4000:4000"    # Exposed to host

myblog:
  ports:
    - "3000:3000"    # Exposed to host
```

### Frontend fetch
```js
fetch("http://localhost:4000/")
```

### How it worked
```
                    Browser (on host machine)
                    ┌──────────────────────────┐
                    │  localhost:3000  (UI)     │
                    │  localhost:4000  (API)    │
                    └──────┬───────────┬───────┘
                           │           │
                  ┌────────┘           └────────┐
                  ▼                              ▼
          ┌──────────────┐              ┌──────────────┐
          │  myblog       │              │  api          │
          │  container    │              │  container    │
          │  Vite :3000   │              │  Express:4000 │
          └──────────────┘              └──────────────┘
                Both ports mapped to host
```

### Key points
- The **browser** directly calls both `localhost:3000` and `localhost:4000`
- The `fetch` runs in client-side JavaScript — the browser makes a separate HTTP request to the backend
- CORS (`cors()` middleware) is **required** because the browser sees two different origins (`localhost:3000` → `localhost:4000`)
- Both containers are accessible from the host machine

---

## AFTER: Only Frontend Exposed (Vite Proxy)

### docker-compose.yaml
```yaml
api:
  expose:
    - "4000"         # Internal only — NOT accessible from host

myblog:
  ports:
    - "3000:3000"    # Still exposed — single entry point
```

### Vite proxy config (vite.config.js)
```js
server: {
  proxy: {
    "/api": {
      target: "http://api:4000",     // Docker internal DNS
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
}
```

### Frontend fetch
```js
fetch("/api")   // No hostname — relative URL, stays on localhost:3000
```

### How it works
```
Browser (on host machine)
┌──────────────────────────┐
│  localhost:3000  (UI)    │   ← Single entry point
│  fetch("/api")           │
└──────────┬───────────────┘
           │
           ▼
  ┌────────────────────┐
  │  myblog container   │
  │  Vite dev server    │
  │                     │
  │  ┌─────────────┐    │
  │  │ Proxy rule  │    │
  │  │ /api →      │────┼───┐
  │  └─────────────┘    │   │
  └────────────────────┘   │
                           │ Docker internal network
                           ▼
                  ┌────────────────┐
                  │ api container   │
                  │ Express :4000   │
                  │ (not on host!)  │
                  └────────────────┘
```

### Key points
- The **browser** only talks to `localhost:3000` — one single entry point
- The fetch URL is **relative** (`/api`) — the browser sends it to the same origin (`localhost:3000`)
- **Vite** intercepts requests matching `/api`, strips the prefix, and **proxies** them to `http://api:4000` over Docker's internal network
- Docker Compose automatically creates a network where containers can reach each other by **service name** (`api`, `myblog`)
- The backend is **not** exposed to the host — only other containers can reach it
- **CORS is no longer needed** (all traffic appears same-origin to the browser), though leaving `cors()` on the backend does no harm

---

## Side-by-Side Comparison

| Aspect | Before | After |
|--------|--------|-------|
| Backend accessible from host? | Yes (`localhost:4000`) | **No** |
| Frontend accessible from host? | Yes (`localhost:3000`) | Yes (`localhost:3000`) |
| Browser calls backend directly? | Yes (`fetch("http://localhost:4000")`) | **No** — Vite proxies it |
| API URL in frontend code | `http://localhost:4000/` | `/api` (relative) |
| CORS required? | Yes | No (same-origin) |
| Entry points for browser | Two (`:3000` + `:4000`) | **One** (`:3000`) |
| Network flow | Browser → Host → Both containers | Browser → Host → Frontend container → Vite proxy → Backend container |
