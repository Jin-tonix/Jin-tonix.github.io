// build 산출물을 저장소 루트로 복사 (GitHub Pages가 main 루트를 서빙, 옛 xcopy와 동일 동작)
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const buildDir = path.join(repoRoot, 'build');

if (!fs.existsSync(buildDir)) {
  console.error('build/ 폴더가 없습니다. 먼저 npm run build 를 실행하세요.');
  process.exit(1);
}

// --dry-run: 지울 것·복사할 것만 출력한다
const dryRun = process.argv.includes('--dry-run');

function remove(rel) {
  console.log(`${dryRun ? '[dry-run] would delete' : 'deleted'} ${rel}`);
  if (!dryRun) fs.rmSync(path.join(repoRoot, rel), { force: true });
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    return d.isDirectory() ? walk(full) : [full];
  });
}

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.isDirectory()) removeEmptyDirs(path.join(dir, d.name));
  }
  if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

// 1) 옛 빌드 잔재 정리 — 빌드 산출물만 지운다
//    static/ 아래에서 새 asset-manifest.json 이 가리키지 않는 파일, 새 빌드에 없는 precache-manifest.*.js,
//    지난번 prerender 가 만들고 이번엔 만들지 않는 정적 HTML
const assetManifest = JSON.parse(fs.readFileSync(path.join(buildDir, 'asset-manifest.json'), 'utf8'));
const keep = new Set(
  [...Object.values(assetManifest.files || {}), ...(assetManifest.entrypoints || [])].map((p) => p.replace(/^\//, ''))
);
for (const file of walk(path.join(repoRoot, 'static'))) {
  const rel = path.relative(repoRoot, file).split(path.sep).join('/');
  if (!keep.has(rel)) remove(rel);
}
if (!dryRun) removeEmptyDirs(path.join(repoRoot, 'static'));

const newPrecache = new Set(fs.readdirSync(buildDir).filter((f) => /^precache-manifest\..*\.js$/.test(f)));
for (const f of fs.readdirSync(repoRoot)) {
  if (/^precache-manifest\..*\.js$/.test(f) && !newPrecache.has(f)) remove(f);
}

const readList = (file) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []);
const newPages = new Set(readList(path.join(buildDir, 'prerender-manifest.json')));
for (const rel of readList(path.join(repoRoot, 'prerender-manifest.json'))) {
  if (!newPages.has(rel)) remove(rel);
}

// 2) build -> 루트 복사
const entries = fs.readdirSync(buildDir);

for (const entry of entries) {
  // build/build 가 있으면 루트의 build/(=출력 폴더 자신)를 덮어쓰게 된다
  if (entry === 'build') continue;
  const src = path.join(buildDir, entry);
  const dest = path.join(repoRoot, entry);
  if (dryRun) {
    console.log(`[dry-run] would copy ${entry}`);
    continue;
  }
  fs.cpSync(src, dest, { recursive: true, force: true });
  console.log(`copied ${entry}`);
}

if (dryRun) process.exit(0);

console.log('build -> repo root 복사 완료');

// 옛 판이 등록한 service worker 가 옛 화면을 계속 보여 주던 문제 — 스스로 캐시를 지우고 등록을 해제하는 판으로 덮는다
const killSwitch = `self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});
`;
fs.writeFileSync(path.join(repoRoot, 'service-worker.js'), killSwitch);
console.log('service-worker.js -> kill switch');
