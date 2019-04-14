self.addEventListener('install', function(e) {
   e.waitUntil(
       caches.open('mycache').then(function(cache) {
           return cache.addAll([
               '/',
               '/index.html',
               '/restaurant.html',
               '/restaurant.html?id=1',
               '/restaurant.html?id=2',
               '/restaurant.html?id=3',
               '/restaurant.html?id=4',
               '/restaurant.html?id=5',
               '/restaurant.html?id=6',
               '/restaurant.html?id=7',
               '/restaurant.html?id=8',
               '/restaurant.html?id=9',
               '/restaurant.html?id=10',
               '/css/styles.css',
               '/js/main.js',
               '/js/restaurant_info.js',
               '/js/dbhelper.js',
               '/data/restaurants.json',
               '/img/1.jpg',
               '/img/2.jpg',
               '/img/3.jpg',
               '/img/4.jpg',
               '/img/5.jpg',
               '/img/6.jpg',
               '/img/7.jpg',
               '/img/8.jpg',
               '/img/9.jpg',
               '/img/10.jpg',
               'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
               'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
               'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
               'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
               'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'
/* tried to get the map with these requests, both fail */
               //"https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={'pk.eyJ1IjoidmFsZW4zMyIsImEiOiJjanR4ZG5janoxYmdlNDVydDIzc3J5cHZsIn0.P5DKCScYaS1PwzdhXNpFFw'}",
               //'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={"pk.eyJ1IjoidmFsZW4zMyIsImEiOiJjanR4ZG5janoxYmdlNDVydDIzc3J5cHZsIn0.P5DKCScYaS1PwzdhXNpFFw"}',
           ]);
       })
   );
});

self.addEventListener('fetch', function(e) {
    // Get network content if available, if not use cache
    e.respondWith(
        fetch(e.request)
            .catch(function() {
              return caches.match(e.request);
            })
    );
});

