// public/images 의 PNG·JPEG 가로·세로 픽셀을 읽어 src/content/imageSizes.json 에 쓴다 (<img width height> 용, 의존성 없음)
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const imagesDir = path.join(publicDir, 'images');
const outFile = path.join(repoRoot, 'src', 'content', 'imageSizes.json');

function pngSize(buf) {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null;
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    // SOF0~SOF15 (DHT·JPG·DAC 제외)
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
    }
    i += 2 + len;
  }
  return null;
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    return d.isDirectory() ? walk(full) : [full];
  });
}

const sizes = {};
for (const file of walk(imagesDir).sort()) {
  const ext = path.extname(file).toLowerCase();
  const buf = fs.readFileSync(file);
  let size = null;
  if (ext === '.png') size = pngSize(buf);
  else if (ext === '.jpg' || ext === '.jpeg') size = jpegSize(buf);
  if (size) sizes[`/${path.relative(publicDir, file).split(path.sep).join('/')}`] = [size.width, size.height];
}

const lines = Object.entries(sizes).map(([src, wh]) => `  ${JSON.stringify(src)}: ${JSON.stringify(wh)}`);
fs.writeFileSync(outFile, `{\n${lines.join(',\n')}\n}\n`);
console.log(`imageSizes.json: ${Object.keys(sizes).length} images`);
