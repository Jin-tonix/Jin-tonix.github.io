// 케이스 스터디 레이아웃 — 사례 페이지(CaseStudy)가 쓰는 머리·메타·구조도·하이라이트 카드 스타일.
import styled from 'styled-components';
import { color, font, layout } from './tokens';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${color.bg};
  box-sizing: border-box;
`;

export const Container = styled.article`
  width: 100%;
  min-width: 0;
  max-width: ${layout.maxWidth};
  padding: ${layout.paddingDesktop};
  box-sizing: border-box;
  color: ${color.text};

  @media (max-width: 768px) {
    padding: 24px 16px 40px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
    margin-top: 4px;
  }

  h1 {
    font-size: ${font.size.xl};
    font-weight: ${font.weight.title};
    color: ${color.gold};
    margin: 0 0 8px;
    line-height: 1.3;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
`;

export const Subtitle = styled.p`
  font-size: ${font.size.md};
  line-height: ${font.bodyLineHeight};
  color: ${color.text};
  max-width: ${font.proseMaxWidth};
  margin: 0 0 20px;
  word-break: keep-all;
`;

// 기간·역할·저장소 줄
export const MetaList = styled.dl`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 8px 16px;
  margin: 0 0 8px;
  padding: 16px 18px;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  font-size: ${font.size.sm};
  line-height: 1.6;

  dt {
    color: ${color.gold};
    font-weight: ${font.weight.subhead};
  }

  dd {
    margin: 0;
    color: ${color.text};
    overflow-wrap: anywhere;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;

    dd + dt {
      margin-top: 10px;
    }
  }
`;

export const Block = styled.section`
  margin-top: 40px;
  min-width: 0;

  h2 {
    font-size: ${font.size.lg};
    font-weight: ${font.weight.subhead};
    color: ${color.gold};
    margin: 0 0 12px;
  }

  p,
  ul,
  ol {
    line-height: ${font.bodyLineHeight};
    font-size: ${font.size.sm};
    color: ${color.text};
    max-width: ${font.proseMaxWidth};
    margin: 0;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  ul,
  ol {
    padding-left: 20px;
  }

  li + li {
    margin-top: 6px;
  }

  code {
    font-size: 0.9em;
    padding: 1px 5px;
    border-radius: 4px;
    background-color: ${color.surface};
    border: 1px solid ${color.line};
    word-break: break-all;
  }

  strong {
    color: ${color.text};
    font-weight: ${font.weight.subhead};
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding-left: 0 !important;
  margin: 0;

  li {
    font-size: ${font.size.xs};
    color: ${color.text};
    border: 1px solid ${color.line};
    border-radius: 999px;
    padding: 4px 12px;
    line-height: 1.4;
  }

  li + li {
    margin-top: 0;
  }
`;

// 구조도 — 폭이 좁은 화면에서는 틀 안에서만 옆으로 밀어 본다 (페이지 전체는 가로로 넘치지 않는다)
export const Figure = styled.figure`
  margin: 0;
  min-width: 0;

  .scroll {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid ${color.line};
    border-radius: ${layout.radius};
    background-color: #fff;
  }

  .scroll a {
    display: block;
    cursor: zoom-in;
  }

  .scroll img {
    display: block;
    width: 100%;
    height: auto;
  }

  figcaption {
    margin-top: 8px;
    font-size: ${font.size.xs};
    line-height: 1.6;
    color: ${color.muted};
    word-break: keep-all;
  }

  .open {
    display: inline-block;
    margin-top: 6px;
    font-size: ${font.size.xs};
    color: ${color.gold};
    text-decoration: none;
  }

  .hint {
    display: none;
  }

  @media (max-width: 600px) {
    .scroll.wide img {
      width: 760px;
      max-width: none;
    }

    .hint {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      color: ${color.muted};
    }
  }
`;

// 화면 캡처 두 장은 넓은 화면에서 나란히
export const ScreenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

// 기술 하이라이트 — 번호 카드. 제목만 훑어도 요지가 보이게
export const HighlightGrid = styled.ol`
  list-style: none;
  padding-left: 0 !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  max-width: none !important;

  li + li {
    margin-top: 0;
  }

  @media (max-width: 860px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const HighlightCard = styled.li`
  min-width: 0;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-top: 3px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 16px 18px;

  .num {
    display: block;
    color: ${color.gold};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.title};
    letter-spacing: 0.06em;
    margin-bottom: 4px;
  }

  .title {
    display: block;
    color: ${color.text};
    font-size: ${font.size.md};
    font-weight: ${font.weight.title};
    line-height: 1.45;
    margin-bottom: 6px;
    word-break: keep-all;
  }

  .text {
    display: block;
    color: ${color.text};
    opacity: 0.88;
  }
`;

// 사고와 수정 — 굵은 제목 + 본문
export const IncidentList = styled.ol`
  li {
    padding-left: 4px;
  }

  strong {
    display: block;
    color: ${color.gold};
  }
`;

// 영문 페이지 — 대표 수치 하나
export const Headline = styled.p`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 24px !important;

  strong {
    font-size: ${font.size.xxl};
    font-weight: ${font.weight.title};
    color: ${color.gold};
    line-height: 1;
  }

  span {
    color: ${color.muted};
    font-size: ${font.size.md};
  }
`;

export const KoNote = styled.p`
  margin-top: 24px !important;
  padding: 14px 18px;
  border: 1px solid ${color.line};
  border-left: 3px solid ${color.gold};
  border-radius: ${layout.radius};
  background-color: ${color.surface};

  a {
    color: ${color.gold};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  font-size: ${font.size.sm};
  color: ${color.muted};
  border-top: 1px solid ${color.line};
  margin-top: 48px;
  padding-top: 16px;
  line-height: 1.6;
`;
