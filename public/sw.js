if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.4229f5e0a2a0cb365a7b.js",revision:"3492ad2b2f38311e21cdb923442faa45"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.9398c0bf99254ee54697.js",revision:"33b603f886a91c687e6d47a7bbec25d6"},{url:"/_next/static/chunks/framework.cb05d56be993eb6b088a.js",revision:"18cf5f5d0de16c62614aa6853bc8704e"},{url:"/_next/static/chunks/main-3eec34faad1ed4d14b44.js",revision:"9409db05a11bbaf771a0e898eb1c1442"},{url:"/_next/static/chunks/pages/_app-45f0f2255515b9fedd5b.js",revision:"88fb43eda9916eed91a0592fa45c53d0"},{url:"/_next/static/chunks/pages/_error-f4f567df00ce0843964e.js",revision:"1ce7635ad73519a6bb086b2767b96914"},{url:"/_next/static/chunks/pages/index-30a11dc7015a366992bf.js",revision:"ab163cddebf8a8878e4c995fcd2affeb"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/gKAtAXt25y-x2KSAK5pNn/_buildManifest.js",revision:"dbee821d2be536cebc464adc9202a784"},{url:"/_next/static/gKAtAXt25y-x2KSAK5pNn/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"043808d24af8d16156f374411cd87f55"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
