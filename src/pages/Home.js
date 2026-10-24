// Home — 첫 화면 쇼릴과 그 아래 사례 7개 한눈에 보기 목록
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import HeroShowreel from '../components/HeroShowreel';
import { color, font, layout } from '../components/ui/tokens';

const Page = styled.div`
  width: 100%;
  height: 100%;
`;

const Glance = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${color.bg};
  color: ${color.text};

  .inner {
    width: 100%;
    max-width: ${layout.maxWidth};
    padding: 48px 48px 64px;
    box-sizing: border-box;
  }

  h2 {
    margin: 0 0 12px;
    color: ${color.gold};
    font-size: ${font.size.xl};
    font-weight: ${font.weight.title};
  }

  .intro {
    margin: 0 0 24px;
    max-width: ${font.proseMaxWidth};
    color: ${color.muted};
    font-size: ${font.size.sm};
    line-height: ${font.bodyLineHeight};
    word-break: keep-all;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid ${color.line};
  }

  li {
    border-bottom: 1px solid ${color.line};
  }

  a {
    display: grid;
    grid-template-columns: 28px minmax(0, 15rem) minmax(0, 1fr);
    gap: 4px 16px;
    align-items: baseline;
    padding: 14px 4px;
    color: inherit;
    text-decoration: none;
  }

  a:hover .name,
  a:focus-visible .name {
    color: ${color.gold};
  }

  .num {
    color: ${color.gold};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.title};
  }

  .name {
    font-size: ${font.size.md};
    font-weight: ${font.weight.subhead};
    word-break: keep-all;
  }

  .line {
    color: ${color.muted};
    font-size: ${font.size.sm};
    line-height: 1.6;
    word-break: keep-all;
  }

  @media (max-width: 768px) {
    .inner {
      padding: 36px 16px 48px;
    }

    a {
      grid-template-columns: 24px minmax(0, 1fr);
    }

    .line {
      grid-column: 2;
    }
  }
`;

export default function Home() {
  const { content, withPrefix, lang } = useLang();
  const { hero, cases } = content;

  return (
    <Page>
      <HeroShowreel hero={hero} content={content} lang={lang} withPrefix={withPrefix} />
      <Glance aria-labelledby="glance-title">
        <div className="inner">
          <h2 id="glance-title">{hero.glanceTitle}</h2>
          {hero.glanceIntro && <p className="intro">{hero.glanceIntro}</p>}
          <ol>
            {cases.map((c, i) => (
              <li key={c.slug}>
                <Link to={withPrefix(`/projects/${c.slug}`)}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="name">{c.shortTitle}</span>
                  <span className="line">{c.subtitle}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Glance>
    </Page>
  );
}
