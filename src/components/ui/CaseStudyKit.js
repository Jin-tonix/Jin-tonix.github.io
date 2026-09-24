// 케이스 스터디 레이아웃 — 새 CaseStudy 페이지와 옛 Project1~5 페이지가 함께 쓴다.
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

export const Container = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: ${layout.paddingDesktop};
  box-sizing: border-box;
  color: ${color.text};

  @media (max-width: 768px) {
    padding: ${layout.paddingMobile};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${color.line};
  padding-bottom: 16px;
  margin-bottom: 16px;
  width: 100%;

  img {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  h1 {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: ${font.weight.title};
    color: ${color.gold};
    margin: 0;
    line-height: 1.3;
  }
`;

export const SubHeader = styled.h2`
  font-size: ${font.size.sm};
  font-weight: ${font.weight.body};
  color: ${color.muted};
  margin: 4px 0 0;
`;

export const OneLiner = styled.p`
  font-size: ${font.size.md};
  color: ${color.text};
  line-height: ${font.bodyLineHeight};
  margin: 0 0 8px;
`;

export const ContentSection = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  a {
    display: block;
  }

  img {
    width: 100%;
    max-width: 640px;
    border: 1px solid ${color.line};
    border-radius: ${layout.radius};
    object-fit: contain;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 320px;
    }
  }
`;

export const TextSection = styled.div`
  flex: 2.5;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HorizontalSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Section = styled.div`
  flex: 1;

  h3 {
    font-size: ${font.size.lg};
    font-weight: ${font.weight.subhead};
    color: ${color.gold};
    margin: 0 0 10px;
  }

  p,
  ul,
  ol {
    line-height: ${font.bodyLineHeight};
    font-size: ${font.size.sm};
    color: ${color.text};
    max-width: ${font.proseMaxWidth};
  }

  ul,
  ol {
    padding-left: 18px;
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
`;

export const TroubleshootItem = styled.div`
  margin-bottom: 18px;

  strong {
    color: ${color.text};
    font-size: ${font.size.md};
  }

  .field {
    display: block;
    margin-top: 4px;
    font-size: ${font.size.sm};
    color: ${color.text};
    max-width: ${font.proseMaxWidth};

    .field-label {
      color: ${color.gold};
      font-weight: ${font.weight.subhead};
      margin-right: 6px;
    }
  }
`;

export const AiCollabBox = styled.div`
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 16px 20px;
  margin-top: 8px;

  h3 {
    margin-top: 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: left;
  font-size: ${font.size.sm};
  color: ${color.muted};
  border-top: 1px solid ${color.line};
  margin-top: 32px;
  padding-top: 16px;

  a {
    color: ${color.gold};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  a:hover {
    color: ${color.text};
  }
`;

// 사례 머리에 관련 저장소를 한 줄로 보여준다
export const Repos = styled.p`
  margin: 0 0 16px;
  font-size: ${font.size.xs};
  color: ${color.muted};

  span {
    color: ${color.gold};
    font-weight: ${font.weight.subhead};
    margin-right: 4px;
  }
`;

// 사례 구조도를 본문 위에 넓게 보여준다 (넓은 다이어그램이 좁은 칸에서 읽히지 않아서)
export const DiagramRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 16px 0;

  a {
    display: block;
    cursor: zoom-in;
  }

  img {
    width: 100%;
    max-width: 1000px;
    background: #fff;
    border: 1px solid ${color.line};
    border-radius: ${layout.radius};
  }
`;

// v3 사례 틀 — TL;DR 3줄 상자 (첫 화면에 메타 + TL;DR + 그림이 보이게)
export const TldrBox = styled.div`
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-left: 3px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 14px 18px;
  margin: 8px 0 16px;

  .tldr-label {
    display: block;
    color: ${color.gold};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.subhead};
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }

  ul {
    margin: 0;
    padding-left: 18px;
    font-size: ${font.size.sm};
    line-height: ${font.bodyLineHeight};
    color: ${color.text};
    max-width: ${font.proseMaxWidth};
  }
`;

// 접을 수 있는 긴 칸 — 네이티브 details/summary 라 키보드·스크린리더가 그대로 쓴다
export const Collapsible = styled.details`
  border-top: 1px solid ${color.line};
  padding: 4px 0;

  &:last-of-type {
    border-bottom: 1px solid ${color.line};
  }

  summary {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    list-style: none;
    padding: 12px 0;

    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: '';
      flex-shrink: 0;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 7px solid ${color.gold};
      transition: transform 0.2s ease;
    }

    h3 {
      margin: 0;
    }

    .count {
      color: ${color.muted};
      font-size: ${font.size.xs};
    }
  }

  &[open] > summary::before {
    transform: rotate(90deg);
  }

  .body {
    padding: 0 0 16px 17px;
  }
`;

// 판단 {choice, why} 와 시스템 단계 {title, points, chain} 한 줄
export const ChoiceItem = styled.li`
  margin-bottom: 10px;

  strong {
    color: ${color.text};
    font-weight: ${font.weight.subhead};
  }

  .why {
    display: block;
    color: ${color.muted};
  }

  ul {
    margin: 4px 0 0;
  }

  .chain {
    display: block;
    margin-top: 2px;
    font-size: ${font.size.xs};
    color: ${color.muted};

    span {
      color: ${color.gold};
      margin-right: 4px;
    }
  }
`;

export const CaseMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 4px;

  ${SubHeader} {
    margin: 0;
  }
`;
