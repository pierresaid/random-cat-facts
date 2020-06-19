[{"revision":"9ae5e9caa70dfab31be489190e9eb292","url":"icon.6e6b9c81.png"},{"revision":"f5455f9b2eca27ac98ac5179ded090e9","url":"index.html"},{"revision":"5edfc55d50d0d6c1d05ae4d4882910bc","url":"logo.0dbcb34f.png"},{"revision":"082b43dd9e030eaa4ee3875d7a2063d4","url":"main.f7025706.css"},{"revision":"acadab010f240a3eca89dc865476f220","url":"main.f84e1103.js"},{"revision":"6105216f9f69572f0f386a4eb3329720","url":"modernizr-3.11.2.min.bbf62f91.js"},{"revision":"c3f1790e5b5ebd02472343ba7746da15","url":"normalize.02b6c58e.css"},{"revision":"d121930984923110549a3fe0ed94bcbc","url":"plugins.40a68ed9.js"},{"revision":"b73836013f965ab2b473f1dca47c82c7","url":"service-worker.js"},{"revision":"ebf8b6d4e3624c26258f7bd96a68f210","url":"site.webmanifest"}]

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
  
    workbox.precaching.precacheAndRoute([]);
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }