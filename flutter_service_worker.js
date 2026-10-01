'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b247b34e92c702551161a98672d54f95",
"assets/AssetManifest.bin.json": "61971f54d0f76b0b807b15a97a07682f",
"assets/AssetManifest.json": "7a594ecfea6a41c588b8d268006c1143",
"assets/assets/audio/confusion.mp3": "573b367f023bb5db2fedefdf78f03308",
"assets/assets/audio/drop_dead.mp3": "eacffb3c6971c9256eb4c8420caaf777",
"assets/assets/audio/hot_to_go.mp3": "f3d92ccb91aedad05f5ea4ddc458b9c6",
"assets/assets/audio/love_is.mp3": "9256a836fc598537ae9ca29d5516ebfd",
"assets/assets/audio/maggots_for_brains.mp3": "8a21ad1ec7ba10522fd510196d2af440",
"assets/assets/audio/pinatahan.mp3": "c737e863cb02d1962d763eba2bd33add",
"assets/assets/audio/pink_pony_club.mp3": "ca8a2543328f1896a2fd48543de1cc59",
"assets/assets/audio/README.txt": "b77b82a97eb4e58e384f03200f9d1869",
"assets/assets/audio/red_wine_supernova.mp3": "3ea3a86d6c7436714b6c6b632384a534",
"assets/assets/audio/risk_it_all.mp3": "a4f4fcadb5d4749a60189e5fa4098bf0",
"assets/assets/audio/stupid_song.mp3": "19e932e28533f969d94d52fd81710726",
"assets/assets/audio/u_me.mp3": "948c713468014140a46af982ce724f5a",
"assets/assets/images/card_01.jpg": "6084a5c8a5795ddf5f82e7d85a4293dd",
"assets/assets/images/card_02.jpg": "3a4d095f6bd5328e1f0e42eba640209f",
"assets/assets/images/card_03.jpg": "7d3af59a78cf96e67ceb73c6d749147d",
"assets/assets/images/card_04.jpg": "ed451992e6693399b565a089b8054046",
"assets/assets/images/photo_01.jpg": "2210f6cd246accca1f3bcdc06443b058",
"assets/assets/images/photo_02.jpg": "d016876056b548d0e27eae4c1cf30640",
"assets/assets/images/photo_03.jpg": "b43c41bf294ba911a6258e15f7d3d843",
"assets/assets/images/photo_04.jpg": "64c5deb190283ab60cad650f31ada36b",
"assets/assets/images/photo_05.jpg": "4095d82c4ab426226970e36925b4ef98",
"assets/assets/images/photo_06.jpg": "4d2af2c3bc38af9a3ea8fbb19824eafb",
"assets/assets/images/photo_07.jpg": "bd251304a99f3916bd7d13d912c87d1f",
"assets/assets/images/photo_08.jpg": "51b115138d78c58b3249d7b9f85422f3",
"assets/assets/images/photo_09.jpg": "2df19bfe123a7590ada33d8949751431",
"assets/assets/images/README.txt": "798249e6141bc970f50225bf69946ab9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0a97ef4eba9911d7c87ae336a958d760",
"assets/NOTICES": "3eee5d82f662bac7e9d8b22b9278e023",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2215b70c3e17306870015de46a67435f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c374282cc68c57133abb3b006e0e65fe",
"/": "c374282cc68c57133abb3b006e0e65fe",
"main.dart.js": "16f5e6e9241a2efae6bea67c15a5c25b",
"main.dart.mjs": "569ae176a141b57149614be864edc423",
"main.dart.wasm": "a1f02cfad2d3e744c101ef42160f868a",
"manifest.json": "d38146ff650b37adcee3d3ae37fc8f8b",
"version.json": "cedff518cb73296c54403c058d9d1408"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
