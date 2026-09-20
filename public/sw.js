// Minimal, non-intrusive service worker for Mimie's Study.
// - Cache-first for static assets (icons, manifest)
// - Network-only for pages and APIs (progress is server-authoritative)
// - Offline fallback page for navigations when the network is gone
const CACHE = "mimies-study-v1";
const PRECACHE = ["/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png", "/offline.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // never touch APIs — progress must always hit the server
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match("/offline.html").then((r) => r ?? new Response("Offline", { status: 503, headers: { "Content-Type": "text/html" } }))
      )
    );
    return;
  }

  if (url.pathname.startsWith("/icons/") || url.pathname === "/manifest.webmanifest" || url.pathname === "/offline.html") {
    event.respondWith(
      caches.match(request).then((cached) => cached ?? fetch(request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
        return res;
      }))
    );
  }
});
