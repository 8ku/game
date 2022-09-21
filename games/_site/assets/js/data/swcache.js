const resource = [

  /* --- CSS --- */
  '/game/assets/css/style.css',

  /* --- PWA --- */
  '/game/app.js',
  '/game/sw.js',

  /* --- HTML --- */
  '/game/index.html',
  '/game/404.html',
  
    '/game/categories/',
  
    '/game/tags/',
  
    '/game/archives/',
  
    '/game/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/game/assets/img/favicons/android-chrome-192x192.png',
    '/game/assets/img/favicons/android-chrome-512x512.png',
    '/game/assets/img/favicons/apple-touch-icon.png',
    '/game/assets/img/favicons/favicon-16x16.png',
    '/game/assets/img/favicons/favicon-32x32.png',
    '/game/assets/img/favicons/favicon.ico',
    '/game/assets/img/favicons/favicon.png',
    '/game/assets/img/favicons/mstile-150x150.png',
    '/game/assets/js/dist/categories.min.js',
    '/game/assets/js/dist/commons.min.js',
    '/game/assets/js/dist/home.min.js',
    '/game/assets/js/dist/misc.min.js',
    '/game/assets/js/dist/page.min.js',
    '/game/assets/js/dist/post.min.js',
    '/game/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'raw.githubusercontent.com',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

