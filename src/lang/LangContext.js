// URL 기반 언어 감지 훅 — /en 이하면 영문, 아니면 한글 콘텐츠를 반환한다.
import { useLocation } from 'react-router-dom';
import ko from '../content/ko';
import en from '../content/en';

export function useLang() {
  const location = useLocation();
  const isEn = location.pathname === '/en' || location.pathname.startsWith('/en/');
  const lang = isEn ? 'en' : 'ko';
  const content = isEn ? en : ko;
  const prefix = isEn ? '/en' : '';

  // 같은 화면의 KO/EN 경로 쌍 (사이드바 KO|EN 스위치용)
  const koPath = location.pathname.replace(/^\/en/, '') || '/';
  const enPath = `/en${koPath === '/' ? '' : koPath}`;
  const otherPath = isEn ? koPath : enPath;

  const withPrefix = (path) => {
    if (path === '/') return prefix || '/';
    return `${prefix}${path}`;
  };

  return { lang, content, prefix, otherPath, koPath, enPath, withPrefix, isEn };
}

export default useLang;
