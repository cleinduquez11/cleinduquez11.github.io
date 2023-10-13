'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4739e68841abd1391de59578295df77c",
"assets/AssetManifest.json": "484faa39927bed9468468a81a9142ddd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c76f704608c15808b051f271784afe0c",
"assets/lib/models/Assets/automation.jpg": "8d2c249518225dc4ab508e3513f2bf98",
"assets/lib/models/Assets/awsbadge.png": "a520819cb3c2dc2263e7e0ad5c9965f5",
"assets/lib/models/Assets/casa.jpg": "6b58328ef0bc87265c4850b25f1e554c",
"assets/lib/models/Assets/circuit.jpg": "58d092e1897e0ab88a10b55a3a71c978",
"assets/lib/models/Assets/CLEIN.png": "98b04907389c2cc52c8346553dd1308a",
"assets/lib/models/Assets/clock.jpg": "04bc72a29c554a855a703cd0e7cdbe62",
"assets/lib/models/Assets/Cross.jpg": "1d6b7a4db46298cb55f20fe0499dfb19",
"assets/lib/models/Assets/datascience.jpg": "245e4b0323f3cf082209efc08ca1fb22",
"assets/lib/models/Assets/ens.mp4": "ecb759ecfeea089d83d09430b4dc2bd7",
"assets/lib/models/Assets/fair.jpeg": "6244c12a478f615b0a23f43d5d0dbae3",
"assets/lib/models/Assets/incoming.png": "f09086604e863b2e7f7499fbf0f82ea8",
"assets/lib/models/Assets/iot.jpg": "2a6b160689fdf1d6406876096d3bac29",
"assets/lib/models/Assets/male.jpg": "52292c6272b4612de1e874f843ad3ee6",
"assets/lib/models/Assets/thesis/1.jpeg": "f32c962446faa2df8133d5b45ab372ef",
"assets/lib/models/Assets/thesis/10.jpeg": "a2c65c817716cecc98160b3d5868ed20",
"assets/lib/models/Assets/thesis/11.jpeg": "3141d5174bb1712a1260f7beaa191e02",
"assets/lib/models/Assets/thesis/12.jpeg": "ed8845249eb7bd34031105c66d83e41b",
"assets/lib/models/Assets/thesis/13.jpeg": "c600611030e2954be596dcc0958c5d9e",
"assets/lib/models/Assets/thesis/14.jpeg": "3bf7afc71b26108e23c716f3db83f380",
"assets/lib/models/Assets/thesis/15.jpeg": "08b8432c761ab6ecadf646677d50b3b3",
"assets/lib/models/Assets/thesis/16.jpeg": "0bc65c70669630602a72ff877aa449fc",
"assets/lib/models/Assets/thesis/17.jpeg": "29b96c0bd5360c9a835c798ddc05c907",
"assets/lib/models/Assets/thesis/18.webp": "28e3d1f23c3815c0a7e691c4c85014c3",
"assets/lib/models/Assets/thesis/19.jpeg": "3660b9b2c6037e552ce650fa4c812f53",
"assets/lib/models/Assets/thesis/2.jpeg": "38aa5959c23edad72bd67d1c7a7ca3a8",
"assets/lib/models/Assets/thesis/20.jpeg": "69253c0d42e4f393b9f3d679fab137ca",
"assets/lib/models/Assets/thesis/21.jpeg": "0bbfa4d1e07b01bb1a9e1b09ecb35343",
"assets/lib/models/Assets/thesis/3.jpeg": "3dd28bfb1b464d7ff4491f7fd77d36d8",
"assets/lib/models/Assets/thesis/4.jpeg": "53846313e83a2fc6fe8f2c3ddbc5bf70",
"assets/lib/models/Assets/thesis/5.jpeg": "36955c18353349bdac98aa31d991fd60",
"assets/lib/models/Assets/thesis/6.jpeg": "de79eb1749379db400322a1cc6a3f480",
"assets/lib/models/Assets/thesis/7.jpeg": "2664175d6872dce65ff0e5cec2187037",
"assets/lib/models/Assets/thesis/9.jpeg": "d247bf4b3e0c88087be1d31a5e1b3ac0",
"assets/lib/models/Assets/thesis.jpg": "fcf666e5a7b5c6002ca4982f8b3ded5d",
"assets/lib/models/Assets/web.jpg": "cb749b48bd9eb69a116be87f173820a5",
"assets/lib/models/Assets/webrtc.jpg": "888d1d9478483fed8dda1fc373631ef9",
"assets/NOTICES": "838577cb90a59a989b894651b5e0804b",
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
"index.html": "b5b77a7b1179a009acebb1bfb5b9052f",
"/": "b5b77a7b1179a009acebb1bfb5b9052f",
"main.dart.js": "42130f830f465f43a3e73e0dfc865335",
"manifest.json": "b744b2e705afa7a664ac7509b70d78bb",
"version.json": "3d4281b093cc59d2691b33a537e2c1ab"};
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
