 [{"revision":"64fdbcee49e087971688604c28f3266e","url":"favicon-16x16.23b25d3d.png"},{"revision":"b0466da1d24d90b3b8a07ff6d8c89a9e","url":"favicon-32x32.5c2f78a7.png"},{"revision":"0296d7547c4f495b3d55692ec9cacc83","url":"favicon-96x96.cdb7d7dd.png"},{"revision":"9ae5e9caa70dfab31be489190e9eb292","url":"icon.6e6b9c81.png"},{"revision":"88fecd813bbe3a6b2345a0cdfce15572","url":"index.html"},{"revision":"5edfc55d50d0d6c1d05ae4d4882910bc","url":"logo.0dbcb34f.png"},{"revision":"082b43dd9e030eaa4ee3875d7a2063d4","url":"main.f7025706.css"},{"revision":"acadab010f240a3eca89dc865476f220","url":"main.f84e1103.js"},{"revision":"be2cecfca5f6231a3b19cf18d56100a8","url":"manifest.webmanifest"},{"revision":"6105216f9f69572f0f386a4eb3329720","url":"modernizr-3.11.2.min.bbf62f91.js"},{"revision":"c3f1790e5b5ebd02472343ba7746da15","url":"normalize.02b6c58e.css"},{"revision":"d121930984923110549a3fe0ed94bcbc","url":"plugins.40a68ed9.js"}]

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Network First
[ 
    '/$',  // Index 
    '/*',  // Anything in the same host
    '.+/*' // Anything in any host 
]
.forEach(mask => {
    workbox.routing.registerRoute(
        new RegExp(mask),
        new workbox.strategies.NetworkFirst( { cacheName: 'dynamic' } ) 
    );
});