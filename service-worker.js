"use strict";var precacheConfig=[["/cp-ncba/index.html","84998cdae8bbb9089a78087fd6b5b8e0"],["/cp-ncba/static/css/main.1d9f7828.css","979f5b5d918a43d8ba3791300a738d88"],["/cp-ncba/static/js/main.82e900bf.js","65d0f79bd535be9ab1c05d0b48c2aba9"],["/cp-ncba/static/media/Ballerine Script.05e22bc4.ttf","05e22bc4b71d38a03ff89dcfee550e3c"],["/cp-ncba/static/media/Bluebell.86cea1ec.ttf","86cea1ec3760463ef2d783cdd618fbf6"],["/cp-ncba/static/media/Darleston.7d7bbb25.otf","7d7bbb2524782f4e9ee885841ffb797f"],["/cp-ncba/static/media/aaron.cc5dfe61.jpeg","cc5dfe61d1c8f73717ab980a414375be"],["/cp-ncba/static/media/exmouth_.59e50f7d.ttf","59e50f7d0e99f3374541f064726b5fcf"],["/cp-ncba/static/media/fa-brands-400.a999c7b8.svg","a999c7b8823b901248833dc7fe07a52f"],["/cp-ncba/static/media/fa-brands-400.d034c1b2.woff","d034c1b2ee84dd981ef2e637754a0b4f"],["/cp-ncba/static/media/fa-brands-400.e0fc4e5c.ttf","e0fc4e5c719b4dc10c97fc111d7374e1"],["/cp-ncba/static/media/fa-brands-400.e2a76403.eot","e2a76403183eff8967cf6318c6e51509"],["/cp-ncba/static/media/fa-brands-400.f319eac1.woff2","f319eac1c755f9929fd856720ce1695e"],["/cp-ncba/static/media/fa-regular-400.5a4618f0.eot","5a4618f029618cc2795c05fe53d57028"],["/cp-ncba/static/media/fa-regular-400.6534c603.ttf","6534c603e0892488132ad57248ec69e2"],["/cp-ncba/static/media/fa-regular-400.a3715c6f.woff2","a3715c6fe264a51f1d9260b447ff46bc"],["/cp-ncba/static/media/fa-regular-400.e99569d3.woff","e99569d3d10c94c60d9a68523c1c0e71"],["/cp-ncba/static/media/fa-regular-400.e9d8dbb0.svg","e9d8dbb0c3e9b97ffc59c50ff5d01422"],["/cp-ncba/static/media/fa-solid-900.00ddaede.ttf","00ddaede094b83270cadbfc1a907e8ca"],["/cp-ncba/static/media/fa-solid-900.128d2b0b.woff","128d2b0be23925e5cf36717ddc6f093b"],["/cp-ncba/static/media/fa-solid-900.18d2347a.woff2","18d2347ab2a9f40ca2247cdb03303d84"],["/cp-ncba/static/media/fa-solid-900.666a82cb.svg","666a82cb3e9f8591bef4049aea26c4c6"],["/cp-ncba/static/media/fa-solid-900.d9824d00.eot","d9824d00712532d7697df68df16ae0d3"],["/cp-ncba/static/media/image2.f1df4e11.jpeg","f1df4e1123550a087375de19d54048e8"],["/cp-ncba/static/media/image3.449bf3b6.jpeg","449bf3b6c86b3de097a371ad4e813c88"],["/cp-ncba/static/media/image4.bafc10c4.jpg","bafc10c484e99aaf355011a01866060a"],["/cp-ncba/static/media/kristin.5bbcc3d3.jpeg","5bbcc3d33177233bb3daff655b02276c"],["/cp-ncba/static/media/logo.be1a607d.png","be1a607d947ee35e4c28ef49ca4e4c0f"],["/cp-ncba/static/media/weebly4.02a23eac.png","02a23eac2dd3dbd209e5aa84e09daf6e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="/cp-ncba/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});