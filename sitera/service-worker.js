const CACHE_NAME = "sitera-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", event => {
  // Tidak menyimpan halaman transaksi atau data keuangan ke cache.
});
