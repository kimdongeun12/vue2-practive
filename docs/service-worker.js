if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const u=e=>c(e,n),t={module:{uri:n},exports:o,require:u};i[n]=Promise.all(s.map((e=>t[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue2-class"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue2-practice/css/685.7d075282.css",revision:null},{url:"/vue2-practice/css/app.be6a8f11.css",revision:null},{url:"/vue2-practice/icons/icon-192x192.png",revision:"63f3208ba460f393a75d069eb972db4c"},{url:"/vue2-practice/icons/icon-256x256.png",revision:"66522afd2f9cd006c19ca59ad99d6642"},{url:"/vue2-practice/icons/icon-384x384.png",revision:"50591a4b4b1740645a1863325ec26d5c"},{url:"/vue2-practice/icons/icon-512x512.png",revision:"299339f8421b64f66b3cfaef169d3019"},{url:"/vue2-practice/index.html",revision:"69c61328175defa48a027a503d53aeb7"},{url:"/vue2-practice/js/685.b81af15a.js",revision:null},{url:"/vue2-practice/js/app.9243ff8a.js",revision:null},{url:"/vue2-practice/js/chunk-vendors.03a2c0f5.js",revision:null},{url:"/vue2-practice/manifest.json",revision:"f8e3b2a1968147bac0acf415232bfdc6"}],{})}));
//# sourceMappingURL=service-worker.js.map