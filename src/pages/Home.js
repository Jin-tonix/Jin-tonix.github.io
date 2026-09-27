// Home — 쇼릴 히어로(이름·직함·소개·운영 지표) 아래에 용어 · System Map · 사례 카드 5개를 둔다
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLang } from '../lang/LangContext';
import HeroShowreel from '../components/HeroShowreel';
import SystemMap from '../components/ui/SystemMap';
import StatusBadge from '../components/ui/StatusBadge';
import { color, font, layout } from '../components/ui/tokens';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
      <HeroShowreel hero={hero} content={content} lang={lang} withPrefix={withPrefix} />

      <Below>
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
      </Below>
    </Page>
  );
}
