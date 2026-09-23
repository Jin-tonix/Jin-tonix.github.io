// 모든 라우트가 공유하는 페이지 레이아웃 셸 — 컨텐츠 컬럼 폭 · 헤더 · 섹션 간격을 통일한다.
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { color, font, layout } from './tokens';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Shell = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${color.bg};
  box-sizing: border-box;
`;

const Column = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: ${layout.paddingDesktop};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: ${layout.paddingMobile};
  }
`;

const Header = styled.header`
  margin-bottom: ${layout.sectionGap};
  animation: ${fadeInUp} 0.6s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PageTitle = styled.h1`
  color: ${color.gold};
  font-size: ${font.size.xxl};
  font-weight: ${font.weight.title};
  line-height: 1.2;
  margin: 0 0 12px;
`;

const Lead = styled.p`
  color: ${color.muted};
  font-size: ${font.size.md};
  font-weight: ${font.weight.body};
  line-height: ${font.bodyLineHeight};
  max-width: ${font.proseMaxWidth};
  margin: 0;
`;

export default function PageShell({ title, lead, children, className }) {
  return (
    <Shell className={className}>
      <Column>
        {title && (
          <Header>
            <PageTitle>{title}</PageTitle>
            {lead && <Lead>{lead}</Lead>}
          </Header>
        )}
        {children}
      </Column>
    </Shell>
  );
}

export const Section = styled.section`
  margin-bottom: ${layout.sectionGap};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  color: ${color.gold};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.subhead};
  margin: 0 0 16px;
`;

export const SectionIntro = styled.p`
  color: ${color.muted};
  font-size: ${font.size.md};
  line-height: ${font.bodyLineHeight};
  max-width: ${font.proseMaxWidth};
  margin: 0 0 16px;
`;
