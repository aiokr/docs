if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {
    console.log('service worker 注册成功');
  }).catch(function (err) {
    console.log('servcie worker 注册失败');
  });
}

self.importScripts("https://cdnjs.cat.net/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js");
self.toolbox.options.debug = false;
self.toolbox.options.networkTimeoutSeconds = 3;

var cacheVersion = "-170816";
var staticImageCacheName = "image" + cacheVersion;
var staticAssetsCacheName = "assets" + cacheVersion;
var contentCacheName = "content" + cacheVersion;
var vendorCacheName = "vendor" + cacheVersion; var maxEntries = 100;

/* StaticAssetsCache */
self.toolbox.router.get("/css/(.*)", self.toolbox.networkFirst, {origin: /docs\.aiokr\.top/,});
self.toolbox.router.get("/js/(.*)", self.toolbox.networkFirst, {origin: /cdn\.bootcss\.com/,});

/* staticImageCache */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
  origin: /docs\.aiokr\.top/,
  cache: {
      name: staticImageCacheName,
      maxEntries: maxEntries
  }
});

/* staticImageCache */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
  origin: /i\.loli\.net/,
  cache: {
      name: staticImageCacheName,
      maxEntries: maxEntries
  }
});

self.addEventListener("install",
function(event) {return event.waitUntil(self.skipWaiting())
});
self.addEventListener("activate",
function(event) {return event.waitUntil(self.clients.claim())
})