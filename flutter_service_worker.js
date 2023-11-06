'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ab168ab0d30d908a1dc9cf55f866b4a7",
"assets/AssetManifest.json": "72243896d131ad748366b4e269dd1c5b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "609183ac4adcb3beceff11c9565f4ddb",
"assets/lib/models/Assets/dict/0.jpeg": "e31137e78639d4a45684f1ca15deb956",
"assets/lib/models/Assets/dict/1.jpg": "caf62a8ba2c0fdd2015102a6effe8e84",
"assets/lib/models/Assets/dict/10.jpeg": "078ea9ff517f4a6c6e69b29daa3e4c34",
"assets/lib/models/Assets/dict/11.jpeg": "a34fa889446576476295f1d2ef2515b7",
"assets/lib/models/Assets/dict/12.jpeg": "72026b0263d77d802161edbab0d42a8e",
"assets/lib/models/Assets/dict/13.jpg": "73a135b3733a0dc754ce006eb9979840",
"assets/lib/models/Assets/dict/14.jpg": "35b24f9201e5a9d32ef5b946f46b38ed",
"assets/lib/models/Assets/dict/15.jpg": "d6ee56045177c8c6662156f3fa3df84d",
"assets/lib/models/Assets/dict/16.jpg": "62ebf1eedeca427a0eeee1ca5419c1a4",
"assets/lib/models/Assets/dict/17.jpg": "1d7ec76fc9d73c299c8ef214ffd8e499",
"assets/lib/models/Assets/dict/18.jpg": "13b067667c4843e42cf9b69dd59de47b",
"assets/lib/models/Assets/dict/19.jpg": "8314b0acb2712061bc37aac65779ed95",
"assets/lib/models/Assets/dict/2.jpg": "00f912e21e322fb3fb2d3b45cd43eca2",
"assets/lib/models/Assets/dict/20.jpg": "5d2ad2ea88479f41eb3f09acc6b1183e",
"assets/lib/models/Assets/dict/21.jpg": "7afb0eb8d82fd7a9160b62370ca0c351",
"assets/lib/models/Assets/dict/22.jpg": "9bb34f8a3ee04236883ee51cc9be4b82",
"assets/lib/models/Assets/dict/23.jpg": "13a2742596ad74b00e7350a225a88ea8",
"assets/lib/models/Assets/dict/3.jpg": "e611866dd36cd0d069f879fd00ffae90",
"assets/lib/models/Assets/dict/4.jpg": "69af3be01a8b16ba5709f2743629106e",
"assets/lib/models/Assets/dict/5.jpg": "8684dd4790e46e1e9425cdc135c0de32",
"assets/lib/models/Assets/dict/6.jpg": "209dc99329fcc2503dae48e6a85f211e",
"assets/lib/models/Assets/dict/7.jpg": "f3475362e6559338b918e420f950f66d",
"assets/lib/models/Assets/dict/8.jpg": "67b2099f1813d279578b22b874ebce4a",
"assets/lib/models/Assets/dict/9.jpg": "6a81e7d813111df392933cd5cd9a5be4",
"assets/lib/models/Assets/music/steal-the-show.mp3": "22bbf1c80b44bba094ce8da074ce9364",
"assets/lib/models/Assets/thesis/1.jpeg": "8e64e997529f0bb55b1f22c74e917061",
"assets/lib/models/Assets/thesis/10.jpeg": "52a6cb9a6172d0bb2b53b51f10ae16bf",
"assets/lib/models/Assets/thesis/11.jpeg": "77f15db286883b0d5d8e418377a93e5f",
"assets/lib/models/Assets/thesis/12.jpeg": "4a3050be712020213c9de7cf2fa671d8",
"assets/lib/models/Assets/thesis/13.jpeg": "6ad13db3d3c7b4d6489df4ca62b17989",
"assets/lib/models/Assets/thesis/14.jpeg": "125a3a603a4230be25eb526e0e67ce7b",
"assets/lib/models/Assets/thesis/15.jpeg": "895a80fbd498bb24db4e6ef08779e0ae",
"assets/lib/models/Assets/thesis/16.jpeg": "ffe60cbbf2661b684f3a858346bc78ef",
"assets/lib/models/Assets/thesis/17.jpeg": "e114ad810bbbe7b3a1d3712950a119cb",
"assets/lib/models/Assets/thesis/18.webp": "c4356f1b7d49f57d30c43be7b1b0116e",
"assets/lib/models/Assets/thesis/19.jpeg": "c79642aed1ad55a4c10629c57d0a9b3c",
"assets/lib/models/Assets/thesis/2.jpeg": "6e46d23dc9fee2195f05ca0dfbca03d0",
"assets/lib/models/Assets/thesis/20.jpeg": "42f916badc804f1ac3927c50685ad6be",
"assets/lib/models/Assets/thesis/21.jpeg": "a79c2d9aec01a738b89ed6a43276fd15",
"assets/lib/models/Assets/thesis/3.jpeg": "a191b36003cfea6c985da0a2a176fcc6",
"assets/lib/models/Assets/thesis/4.jpeg": "a6954676b79389dac72723c170225f29",
"assets/lib/models/Assets/thesis/5.jpeg": "709ccf7891bc202625917be42611c516",
"assets/lib/models/Assets/thesis/6.jpeg": "945f1c79b5d8cfe98a21a25526952841",
"assets/lib/models/Assets/thesis/7.jpeg": "ae7cdc92046e49fe1b88bbda7020c1e7",
"assets/lib/models/Assets/thesis/9.jpeg": "60e53c3ea50abb4d1490800c1c97b277",
"assets/lib/models/Assets/thesis/thesis.jpg": "70fae5685c3778f120dd7cd9f54822f8",
"assets/NOTICES": "b6a7b33eedaeb36ef6691fa93e9e9836",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90167b88a4b70c1292a7c6a75c33aac7",
"/": "90167b88a4b70c1292a7c6a75c33aac7",
"main.dart.js": "d71166562ccca514224ac4005fdf136c",
"manifest.json": "b744b2e705afa7a664ac7509b70d78bb",
"version.json": "aecaf7fd218382e439978b69561c66bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
