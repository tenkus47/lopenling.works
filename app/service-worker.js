var CACHE_NAME = "parkhnag_cache";

var urlsToCache = ["/", "/favicon.icon", "/service-worker.js", "/index.html"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function (cacheName) {})
                    .map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
            );
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                console.log("found in Cache");
                console.log(e.request);
                console.log(response);
                return response;
            }
            console.log("not found in cache");
            console.log(e.request);
            return fetch(e.request);
        })
    );
});
