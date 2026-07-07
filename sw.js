// Service worker minimal — présent pour rendre l'application installable (PWA).
// Stratégie « réseau d'abord » (pas de cache agressif) : vous êtes toujours
// sur la dernière version, et l'installation « application » reste possible.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  // Laisse passer les requêtes normalement (nécessaire pour l'installabilité).
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
