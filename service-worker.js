if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const n=e=>d(e,c),l={module:{uri:c},exports:a,require:n};i[c]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-791ba835"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/11/19/hello-world/index.html",revision:"e4e21a16c357c2d304ad1ce514a42d2b"},{url:"2021/11/19/测试test/index.html",revision:"50e1421ef07b54af1541e3001595b66a"},{url:"404.html",revision:"4e3f1364101b17d866a00ec66085df98"},{url:"archives/2021/11/index.html",revision:"83ce5cf6b8df96f58868e10513800bb7"},{url:"archives/2021/index.html",revision:"9cde18b0d30beaa014776411eb2d29cb"},{url:"archives/index.html",revision:"bda6e63553ee419d91d2c19171113232"},{url:"categories/index.html",revision:"85d924870a0140451be6e7db6fc036ba"},{url:"css/index.css",revision:"13483995152ca9e74281f4831588957a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/backgroud.jpg",revision:"55c8dd20a0a187a30f3d88cabf9623f9"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/head.jpg",revision:"b9672d6385e75464100cbba0f9aa4b29"},{url:"index.html",revision:"3ee8c87cb4ca50f8d49eb13c24fc36ea"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"6c7765a1f91253093185593ed18c6c11"},{url:"tags/index.html",revision:"a672cd9aed158270decb9d12ac3aeca6"},{url:"tags/测试test/index.html",revision:"22ba644ec4ac98fdb8461a1de55e7bdd"}],{})}));
//# sourceMappingURL=service-worker.js.map
