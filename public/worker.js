var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/',
  '/offline.html'
];
const OFFLINE_URL = '/offline.html';

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('ServiceWorker'+ response)
          return response;
        }
        return fetch(event.request);
      }
    )
    .catch(function(error){
      const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
    })
  );
});

// self.addEventListener('fetch', function(event){
//   event.respondWith(
//     fetch(event.request).catch(function(){
//       return caches.match('/offline.html');
//     })
//   );
// });

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});