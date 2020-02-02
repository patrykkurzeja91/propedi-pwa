const staticAssets = [
  './',
  './styles.css',
  './app.js'
]


self.addEventListener('install', async e => {
  const cache = await caches.open('company-static')
  cache.addAll(staticAssets)
})
self.addEventListener('fetch', e => {
  const req = e.request
  e.respondWith(cacheFirst(req))
})


async function cacheFirst(req) {
  const cachedResponse = await caches.match(req)
  return cachedResponse || fetch(req)
}
