[{"revision":"9ae5e9caa70dfab31be489190e9eb292","url":"icon.6e6b9c81.png"},{"revision":"49d54788aac789e91e99ee4e68f5b04b","url":"index.html"},{"revision":"5edfc55d50d0d6c1d05ae4d4882910bc","url":"logo.0dbcb34f.png"},{"revision":"44f9f2ed8773a269e04aa59314ddf8fd","url":"main.f7025706.css"},{"revision":"74c8f3f336780560cf314e04ce4b4763","url":"main.f84e1103.js"},{"revision":"c8badc759a2a8e72b13e3cdda673dea3","url":"modernizr-3.11.2.min.bbf62f91.js"},{"revision":"1c126477afab3efe418e99bfc4b5aaa3","url":"normalize.02b6c58e.css"},{"revision":"ec1a5f37d0ed81943c9a8f0b6d906563","url":"plugins.40a68ed9.js"},{"revision":"c81308af9e3e3791f2c20e4a36a7d279","url":"service-worker.js"},{"revision":"ebf8b6d4e3624c26258f7bd96a68f210","url":"site.webmanifest"}]

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
  
    workbox.precaching.precacheAndRoute([]);
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }