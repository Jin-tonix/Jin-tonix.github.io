// <html lang>·title·description·og·canonical·hreflang 을 경로마다 갱신 (별도 의존성 없이 순수 effect). 값은 seo/routeMeta 와 정적 HTML 이 공유한다
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../lang/LangContext';
import { SITE_ORIGIN, basePath, canonicalUrl, routeMeta } from '../seo/routeMeta';

// 없으면 만들고 있으면 고쳐 쓴다
function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr, key, value) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute('content', value);
}

function setLink(rel, hrefLang, href) {
  const selector = hrefLang ? `link[rel="${rel}"][hreflang="${hrefLang}"]` : `link[rel="${rel}"]`;
  const el = upsert(selector, () => {
    const l = document.createElement('link');
    l.setAttribute('rel', rel);
    if (hrefLang) l.setAttribute('hreflang', hrefLang);
    return l;
  });
  el.setAttribute('href', href);
}

export default function HeadTags() {
  const location = useLocation();
  const { lang, content } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;

    const koPath = basePath(location.pathname);
    const meta = routeMeta(content, koPath);
    const url = canonicalUrl(koPath, lang);

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:type', meta.type || 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:image', `${SITE_ORIGIN}${meta.image}`);
    setMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'ko_KR');
    setLink('canonical', null, url);
    setLink('alternate', 'ko', canonicalUrl(koPath, 'ko'));
    setLink('alternate', 'en', canonicalUrl(koPath, 'en'));
    setLink('alternate', 'x-default', canonicalUrl(koPath, 'ko'));
  }, [lang, content, location.pathname]);

  return null;
}
