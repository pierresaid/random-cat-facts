module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{png,html,js,css,webmanifest}"
  ],
  swDest: "dist/service-worker.js",
  swSrc: "./service-worker.js",
};