const CACHE='aguia-v35-2-4-disciplinas';
const FILES=["./", "./index.html", "./styles.css", "./app.js", "./manifest.json", "./data/perguntas/catecismo.json", "./data/perguntas/ciencias.json", "./data/perguntas/educacao_financeira.json", "./data/perguntas/geografia.json", "./data/perguntas/geometria.json", "./data/perguntas/historia.json", "./data/perguntas/index.json", "./data/perguntas/ingles.json", "./data/perguntas/latim.json", "./data/perguntas/matematica.json", "./data/perguntas/portugues.json"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))) });
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))) });
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
