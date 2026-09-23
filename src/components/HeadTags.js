// <html lang> 갱신 + hreflang <link> 태그 삽입 (별도 의존성 없이 순수 effect)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../lang/LangContext';

const SITE_ORIGIN = 'https://jin-tonix.github.io';

export default function HeadTags() {
  const location = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;

    const koPath = location.pathname.replace(/^\/en/, '') || '/';
    const enPath = `/en${koPath === '/' ? '' : koPath}`;

    const alternates = [
      { hrefLang: 'ko', href: `${SITE_ORIGIN}${koPath}` },
      { hrefLang: 'en', href: `${SITE_ORIGIN}${enPath}` },
      { hrefLang: 'x-default', href: `${SITE_ORIGIN}${koPath}` },
    ];

    const managedLinks = alternates.map(({ hrefLang, href }) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hrefLang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hrefLang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
      return link;
    });

    return () => {
      managedLinks.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, [lang, location.pathname]);

  return null;
}
