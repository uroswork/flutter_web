'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "492538430599c2f37acd211469a94727",
"/main.dart.js": "2398ce746f912c0d1beeadd09e982b2a",
"/assets/LICENSE": "2f5a4850524a1da33358d2df9713e283",
"/assets/AssetManifest.json": "6c196a80e47ce1713e7bfd9e525442ac",
"/assets/FontManifest.json": "ae69353f9b8c9f2a0955f864991b891f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/wifi.png": "55b9d9b59bc612ceaa895822271df3e2",
"/assets/assets/images/wifi.svg": "9f4ce75a39044ad4289d2cbbc745406b",
"/assets/assets/images/close.svg": "8df2b310113439a4e44f348d615666c6",
"/assets/assets/images/close.png": "91d058a1993250e805e9be50f032b126",
"/assets/assets/html/information.html": "a7a3a5d1f0c682c5934eae51f93bef3b",
"/assets/assets/fonts/akzidenz.ttf": "e853c524ba7c2e3798fe3f7a740fb543",
"/assets/assets/fonts/bodoni.ttf": "a5c77dca0bba1293ef0ff6154925a6ca"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
