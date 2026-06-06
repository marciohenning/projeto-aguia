const CACHE='aguia-v13';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.json'];
for(let i=1;i<=52;i++){FILES.push('./catecismo/semana'+String(i).padStart(2,'0')+'.html')}
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))))});
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
