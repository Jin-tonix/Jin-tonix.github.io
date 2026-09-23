// build 산출물을 저장소 루트로 복사 (GitHub Pages가 main 루트를 서빙, 옛 xcopy와 동일 동작)
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const buildDir = path.join(repoRoot, 'build');

if (!fs.existsSync(buildDir)) {
  console.error('build/ 폴더가 없습니다. 먼저 npm run build 를 실행하세요.');
  process.exit(1);
}

const entries = fs.readdirSync(buildDir);

for (const entry of entries) {
  const src = path.join(buildDir, entry);
  const dest = path.join(repoRoot, entry);
  fs.cpSync(src, dest, { recursive: true, force: true });
  console.log(`copied ${entry}`);
}

console.log('build -> repo root 복사 완료');
