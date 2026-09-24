// Home — 배경 히어로(이름·직함·소개·회사 한 줄·지표) 아래에 용어 · System Map · 사례 카드 5개를 둔다
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useLang } from '../lang/LangContext';
import Metrics from '../components/ui/Metrics';
import SystemMap from '../components/ui/SystemMap';
import StatusBadge from '../components/ui/StatusBadge';
import { color, font, layout } from '../components/ui/tokens';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeroContainer = styled.div`
  background-image: linear-gradient(rgba(20, 20, 20, 0.15), rgba(20, 20, 20, 0.35)),
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: ${color.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 56px 20px;
  box-sizing: border-box;
  line-height: 1.5;
  text-shadow: 1.5px 1.5px 5.5px #000;
  background-color: rgba(0, 0, 0, 0.6);

  .name,
  .role,
  .intro,
  .company,
  .note {
    max-width: 760px;
    text-align: center;
    word-break: keep-all;
    animation: ${fadeInUp} 0.8s ease forwards;
    opacity: 0;
  }

  .name {
    font-size: ${font.size.xxl};
    font-weight: ${font.weight.title};
    line-height: 1.2;
    margin: 0;
    animation-delay: 0.1s;
  }

  .role {
    display: block;
    margin-top: 8px;
    color: ${color.gold};
    font-size: ${font.size.lg};
    font-weight: ${font.weight.subhead};
    animation-delay: 0.2s;
  }

  .intro {
    font-size: ${font.size.md};
    font-weight: ${font.weight.subhead};
    margin: 20px 0 0;
    animation-delay: 0.35s;
  }

  .company {
    color: ${color.muted};
    font-size: ${font.size.xs};
    margin: 10px 0 0;
    animation-delay: 0.45s;
  }

  .note {
    color: ${color.muted};
    font-size: 12px;
    margin: 12px 0 0;
    animation-delay: 0.55s;
  }

  @media (max-width: 600px) {
    min-height: calc(100vh - var(--topbar-height));
    padding: 36px 16px;

    .name {
      font-size: 2rem;
    }

    .role {
      font-size: ${font.size.md};
    }

    .intro {
      font-size: ${font.size.sm};
      font-weight: ${font.weight.body};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .name,
    .role,
    .intro,
    .company,
    .note {
      animation: none;
      opacity: 1;
    }
  }
`;

// 첫 화면에서 바로 연락·이력서로 가는 버튼 줄
const Cta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 16px;
    border: 1px solid ${color.gold};
    border-radius: 6px;
    color: ${color.gold};
    font-weight: 600;
    text-decoration: none;
  }

  a.primary {
    background: ${color.gold};
    color: #222;
  }

  a:focus-visible {
    outline: 2px solid ${color.gold};
    outline-offset: 2px;
  }
`;

const Below = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: ${layout.paddingDesktop};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: ${layout.paddingMobile};
  }
`;

const BlockTitle = styled.h2`
  color: ${color.gold};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.subhead};
  margin: 0 0 14px;
`;

const Glossary = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
  margin: 0;

  div {
    background-color: ${color.surface};
    border: 1px solid ${color.line};
    border-radius: ${layout.radius};
    padding: 10px 14px;
  }

  dt {
    color: ${color.gold};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.subhead};
  }

  dd {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.5;
    margin: 2px 0 0;
    word-break: keep-all;
  }
`;

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
`;

const CaseCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 16px;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${color.gold};
    transform: translateY(-2px);
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .num {
    color: ${color.gold};
    font-weight: ${font.weight.title};
  }

  .title {
    color: ${color.text};
    font-size: ${font.size.md};
    font-weight: ${font.weight.subhead};
    line-height: 1.35;
  }

  .tldr {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.55;
    margin: 0;
    word-break: keep-all;
  }
`;

// System Map 노드 번호와 같은 표기
const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥'];

const firstTldr = (tldr) => (Array.isArray(tldr) ? tldr[0] : tldr);

export default function Home() {
  const { content, withPrefix, lang } = useLang();
  const { hero, systemMap, cases } = content;

  return (
    <Page>
      <HeroContainer>
        <h1 className="name">
          {hero.name}
          <span className="role">{hero.title}</span>
        </h1>
        <p className="intro">{hero.intro}</p>
        <p className="company">{hero.company}</p>
        <Metrics metrics={hero.metrics} />
        {hero.metricsNote && <p className="note">{hero.metricsNote}</p>}
        <Cta>
          <a className="primary" href="mailto:jinheemok815@gmail.com">{lang === 'en' ? 'Email me' : '메일 보내기'}</a>
          <a href={content.nav.resume.href} target="_blank" rel="noopener noreferrer">{content.nav.resume.label} (PDF)</a>
          <a href="https://github.com/Jin-tonix" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Cta>
      </HeroContainer>

      <Below>
        <section>
          <BlockTitle>{hero.glossaryTitle}</BlockTitle>
          <Glossary>
            {hero.glossary.map((g) => (
              <div key={g.term}>
                <dt>{g.term}</dt>
                <dd>{g.desc}</dd>
              </div>
            ))}
          </Glossary>
        </section>

        <section>
          <SystemMap systemMap={systemMap} withPrefix={withPrefix} />
        </section>

        <section>
          <BlockTitle>{hero.casesTitle}</BlockTitle>
          <CaseGrid>
            {cases.map((c, i) => (
              <CaseCard key={c.id} to={withPrefix(`/projects/${c.slug}`)}>
                <div className="head">
                  <span className="num">{CIRCLED[i]}</span>
                  <StatusBadge status={c.status} lang={lang} />
                </div>
                <span className="title">{c.shortTitle}</span>
                <p className="tldr">{firstTldr(c.tldr)}</p>
              </CaseCard>
            ))}
          </CaseGrid>
        </section>
      </Below>
    </Page>
  );
}
