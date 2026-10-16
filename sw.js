// 入画·桃花源记 · 离线缓存（network-first）：联网时总是取最新版本；断网或信号差到连不上时，用上次存下的那一份——地铁里、飞机上也能从主屏图标直接打开
const C = 'ruhua-v1';
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(C).then((c) => c.addAll(['./', 'icon.png'])).catch(() => {})); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return; const u = new URL(r.url); if (u.origin !== location.origin) return;
  // 主页带参数的网址（?fps 等）都存成同一份
  const key = r.mode === 'navigate' && /\/(index\.html)?$/.test(u.pathname) ? self.registration.scope : u.origin + u.pathname;
  e.respondWith(fetch(r).then((res) => { if (res.ok && res.type === 'basic' && !res.redirected) { const cp = res.clone(); caches.open(C).then((c) => c.put(key, cp)).catch(() => {}); } return res; })
    .catch(() => caches.match(key).then((m) => m || Response.error())));
});
