// 학급대시보드 서비스워커
// - 앱 파일(껍데기)을 미리 캐싱해서 PWA로 설치했을 때 빠르게 뜨고, 네트워크가 잠깐 끊겨도 화면이 나오게 함
// - Firebase 등 외부/실시간 데이터 요청은 절대 가로채지 않고 그대로 네트워크로 흘려보냄 (실시간 데이터는 캐싱하면 안 됨)
//
// 나중에 index.html/admin.html 등을 수정하고 나서 사용자 화면에 바로 반영되지 않으면,
// 아래 CACHE_NAME의 버전 숫자(v1 -> v2)를 올려서 다시 배포하면 새 캐시로 교체돼요.
const CACHE_NAME = 'class-dashboard-v2';

const PRECACHE_URLS = [
  './',
  './index.html',
  './admin.html',
  './manifest.json',
  './admin-manifest.json',
  './icon-192.png',
  './icon-512.png',
  './admin-icon-192.png',
  './admin-icon-512.png',
  './sounds/celebration-fanfare.mp3',
  './sounds/celebration-crowd.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {}) // 아직 없는 파일(sounds 폴더 등)이 있어도 설치 자체는 실패하지 않게 함
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // GET 요청이 아니거나 다른 출처(Firebase, 외부 API 등)로 가는 요청은 손대지 않음
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
    return;
  }

  // network-first: 온라인이면 항상 네트워크에서 최신 파일을 받아와 보여주고 캐시도 갱신함.
  // 네트워크가 안 될 때만(오프라인) 캐시에 있던 예전 버전으로 대체함.
  // → 자주 수정하는 동안에는 이 방식이 "왜 수정한 게 안 보이지?" 하는 혼란이 적음.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
