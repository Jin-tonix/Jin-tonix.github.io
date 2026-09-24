// 빌드 뒤 경로별 정적 index.html·sitemap.xml 생성 — 크롤러·링크 미리보기가 JS 없이도 경로마다 제목·설명·og·hreflang·본문 요약을 읽게 한다 (SPA 는 그대로 뜬다)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(repoRoot, 'build');
const load = async (rel) => (await import(pathToFileURL(path.join(repoRoot, rel)).href)).default;

const ko = await load('src/content/ko.js');
const en = await load('src/content/en.js');
const seo = await import(pathToFileURL(path.join(repoRoot, 'src/seo/routeMeta.js')).href);
const { SITE_ORIGIN, SITE_NAME, LEGACY_SLUG_REDIRECT, LEGACY_ROUTE_REDIRECT, allRoutes, routeMeta, canonicalUrl } = seo;

const templatePath = path.join(buildDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('build/index.html 이 없습니다. 먼저 react-scripts build 를 실행하세요.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const contentOf = (lang) => (lang === 'en' ? en : ko);
const sitePath = (koPath, lang) => new URL(canonicalUrl(koPath, lang)).pathname;

// JS 없이 읽히는 본문 요약 (noscript). 사례는 한 줄 소개·TL;DR·주요 사항까지
function noscriptBody(content, koPath, lang, meta) {
  const parts = [`<h1>${esc(meta.heading)}</h1>`, `<p>${esc(meta.description)}</p>`];
  const m = koPath.match(/^\/projects\/([^/]+)$/);
  const c = m && content.cases.find((x) => x.slug === m[1]);
  if (c) {
    // TL;DR 첫 줄이 한 줄 소개라 oneLiner 는 따로 넣지 않는다
    const lines = [].concat(c.tldr || [], c.highlights || []);
    if (lines.length) parts.push(`<ul>${lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>`);
  }
  const links = allRoutes(content).map((p) => {
    const t = routeMeta(content, p).heading;
    return `<li><a href="${sitePath(p, lang)}">${esc(t)}</a></li>`;
  });
  parts.push(`<nav><ul>${links.join('')}</ul></nav>`);
  return `<main>${parts.join('')}</main>`;
}

function render(lang, koPath, redirectTo) {
  const content = contentOf(lang);
  const target = redirectTo || koPath;
  const meta = routeMeta(content, target);
  const url = canonicalUrl(target, lang);
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}"/>`,
    `<meta property="og:type" content="${meta.type || 'website'}"/>`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}"/>`,
    `<meta property="og:url" content="${url}"/>`,
    `<meta property="og:title" content="${esc(meta.title)}"/>`,
    `<meta property="og:description" content="${esc(meta.description)}"/>`,
    `<meta property="og:image" content="${SITE_ORIGIN}${meta.image}"/>`,
    `<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'ko_KR'}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<link rel="canonical" href="${url}"/>`,
    `<link rel="alternate" hreflang="ko" href="${canonicalUrl(target, 'ko')}"/>`,
    `<link rel="alternate" hreflang="en" href="${canonicalUrl(target, 'en')}"/>`,
    `<link rel="alternate" hreflang="x-default" href="${canonicalUrl(target, 'ko')}"/>`,
    redirectTo ? `<meta http-equiv="refresh" content="0; url=${sitePath(target, lang)}"/>` : '',
  ].join('');

  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="og:[^"]*"[^>]*>/g, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*>/g, '')
    .replace('</head>', `${head}</head>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>${noscriptBody(content, target, lang, meta)}</noscript>`);
}

// 루트의 build/ 는 CRA 출력 폴더라 한국어 /build 는 정적 파일로 둘 수 없다 (404.html → SPA 가 /how-i-build 로 넘긴다)
const servedStatically = (lang, koPath) => !(lang === 'ko' && koPath === '/build');

const written = [];
function write(lang, koPath, redirectTo) {
  if (!servedStatically(lang, koPath)) return;
  const rel = path.join(lang === 'en' ? 'en' : '', koPath === '/' ? '' : koPath.slice(1), 'index.html');
  const out = path.join(buildDir, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(lang, koPath, redirectTo));
  written.push(rel.split(path.sep).join('/'));
}

for (const lang of ['ko', 'en']) {
  for (const koPath of allRoutes(contentOf(lang))) write(lang, koPath);
  // 옛 slug 는 새 주소로 넘기는 스텁 (SPA 도 같은 리다이렉트를 한다)
  for (const [oldSlug, newSlug] of Object.entries(LEGACY_SLUG_REDIRECT)) {
    write(lang, `/projects/${oldSlug}`, `/projects/${newSlug}`);
  }
  for (const [oldPath, newPath] of Object.entries(LEGACY_ROUTE_REDIRECT)) write(lang, oldPath, newPath);
}

// sitemap.xml — 언어쌍을 hreflang 으로 묶는다
const today = new Date().toISOString().slice(0, 10);
const urls = ['ko', 'en'].flatMap((lang) =>
  allRoutes(contentOf(lang)).filter((p) => servedStatically(lang, p)).map(
    (p) =>
      `  <url>\n    <loc>${canonicalUrl(p, lang)}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <xhtml:link rel="alternate" hreflang="ko" href="${canonicalUrl(p, 'ko')}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="en" href="${canonicalUrl(p, 'en')}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${canonicalUrl(p, 'ko')}"/>\n  </url>`
  )
);
fs.writeFileSync(
  path.join(buildDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
);
written.push('sitemap.xml');

// copy-build.js 가 다음 배포 때 옛 생성물을 지우는 데 쓴다
fs.writeFileSync(path.join(buildDir, 'prerender-manifest.json'), `${JSON.stringify(written, null, 2)}\n`);
console.log(`prerender: ${written.length} files (${urls.length} sitemap urls)`);
