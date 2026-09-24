// 경로별 title·description·og 값 — 브라우저(HeadTags)와 빌드 뒤 정적 HTML 생성(scripts/prerender.mjs)이 함께 쓴다
export const SITE_ORIGIN = 'https://jin-tonix.github.io';
export const SITE_NAME = 'Jinhee Mok · AI Builder';
const OWNER = 'Jinhee Mok';
const DEFAULT_IMAGE = '/images/hero-bg.jpg';

// 옛 slug·옛 /projects/project6~9 → 새 case slug
export const LEGACY_SLUG_REDIRECT = {
  project6: 'company-os',
  project7: 'ss-worktool',
  project8: 'email-agent',
  project9: 'field-fleet',
  'sales-pipeline': 'ss-worktool',
};

// 옛 한국어 전용 프로젝트 페이지
export const LEGACY_PAGE_SLUGS = ['project1', 'project2', 'project3', 'project4', 'project5'];

const clip = (text, max = 160) => {
  const flat = String(text || '').replace(/\s+/g, ' ').trim();
  return flat.length > max ? `${flat.slice(0, max - 1).trimEnd()}…` : flat;
};

const withOwner = (title) => `${title} · ${OWNER}`;

// /en 접두사를 뗀 경로, 끝 슬래시 없이
export function basePath(pathname) {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return stripped.length > 1 ? stripped.replace(/\/+$/, '') : '/';
}

// GitHub Pages 가 폴더 index.html 을 서빙하는 실제 주소 (끝 슬래시)
export function canonicalUrl(koPath, lang) {
  const prefix = lang === 'en' ? '/en' : '';
  const path = koPath === '/' ? '/' : `${koPath}/`;
  return `${SITE_ORIGIN}${prefix}${path}`;
}

// 사이트의 모든 한국어 기준 경로 (영문은 /en 을 붙인다)
export function allRoutes(content) {
  return [
    '/',
    '/about',
    '/skills',
    '/build',
    '/projects',
    ...content.cases.map((c) => `/projects/${c.slug}`),
    ...LEGACY_PAGE_SLUGS.map((s) => `/projects/${s}`),
  ];
}

export function routeMeta(content, koPath) {
  const base = { title: SITE_NAME, description: clip(content.hero.sub), image: DEFAULT_IMAGE, heading: content.hero.headline };
  if (koPath === '/') return base;

  const pages = {
    '/about': { title: content.about.title, description: content.about.tagline || content.about.paragraphs[0] },
    '/skills': { title: content.skills.title, description: content.skills.lead },
    '/build': { title: content.howIBuild.title, description: content.howIBuild.intro, image: content.howIBuild.image },
    '/projects': { title: content.nav.projects, description: content.systemMap.intro, image: content.systemMap.image },
  };
  if (pages[koPath]) {
    const p = pages[koPath];
    return { ...base, ...p, title: withOwner(p.title), description: clip(p.description), image: p.image || base.image, heading: p.title };
  }

  const m = koPath.match(/^\/projects\/([^/]+)$/);
  if (!m) return base;
  const slug = m[1];

  const c = content.cases.find((x) => x.slug === slug);
  if (c) {
    const tldr = Array.isArray(c.tldr) ? c.tldr.join(' ') : c.tldr;
    const firstImage = c.architectureImages && c.architectureImages[0] && c.architectureImages[0].src;
    return {
      title: withOwner(c.shortTitle),
      description: clip(tldr || c.oneLiner),
      image: firstImage || base.image,
      heading: c.title,
      type: 'article',
    };
  }

  const legacy = content.legacyProjects && content.legacyProjects[slug];
  if (legacy) {
    const card = (content.before.projects || []).find((p) => p.route === `/projects/${slug}`);
    return {
      ...base,
      title: withOwner(legacy.title),
      description: clip(card ? card.oneLiner : legacy.title),
      heading: legacy.title,
    };
  }
  return base;
}
