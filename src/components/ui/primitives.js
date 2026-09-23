// 서페이스 카드 · 태그 필 · 클릭 확대 이미지 등 여러 페이지가 공유하는 기본 UI 조각.
import styled from 'styled-components';
import { color, font, layout } from './tokens';

export const Card = styled.div`
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 20px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

export const Pill = styled.span`
  display: inline-block;
  font-size: ${font.size.xs};
  color: ${color.text};
  border: 1px solid ${color.line};
  border-radius: 999px;
  padding: 4px 12px;
  line-height: 1.4;
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// 원본 크기로 열리는 클릭 가능 이미지 프레임 (다이어그램 · 스크린샷 공용)
export const ZoomImage = styled.a`
  display: block;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid ${color.line};
    border-radius: ${layout.radius};
    background: #fff;
  }
`;

export const Prose = styled.div`
  color: ${color.text};
  font-size: ${font.size.md};
  line-height: ${font.bodyLineHeight};

  p,
  ul,
  ol {
    max-width: ${font.proseMaxWidth};
    margin: 0 0 1em;
  }

  ul,
  ol {
    padding-left: 20px;
  }

  strong {
    color: ${color.gold};
  }
`;
