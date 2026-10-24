// 데이터 기반 케이스 스터디 페이지. content.cases 안의 사례를 slug 로 찾아 그린다.
// 한국어는 전체 원고(배경·흐름·구조도·사고·기술 하이라이트·판단)를, 영어는 요약(제목·한 줄·대표 수치·구조도)과 한국어 원문 링크를 보여준다.
// 옛 slug·/projects/project6~9 링크는 새 slug 로, 옛 /projects/project5 는 첫 화면으로 리다이렉트한다.
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLang } from '../lang/LangContext';
import {
  PageWrapper,
  Container,
  Header,
  Subtitle,
  MetaList,
  Block,
  SkillsList,
  Figure,
  ScreenGrid,
  HighlightGrid,
  HighlightCard,
  IncidentList,
  Headline,
  KoNote,
  Footer,
} from '../components/ui/CaseStudyKit';
import StatusBadge from '../components/ui/StatusBadge';
import imgAttrs from '../components/ui/imgAttrs';
// 옛 URL 과 바뀐 slug 의 리다이렉트 표 (정적 HTML 생성과 공유)
import { LEGACY_SLUG_REDIRECT, LEGACY_ROUTE_REDIRECT } from '../seo/routeMeta';

const LABELS = {
  ko: {
    background: '배경',
    stack: '기술 스택',
    scale: '규모',
    flow: '어떻게 동작하나',
    architecture: '아키텍처',
    screens: '화면',
    highlights: '기술 하이라이트',
    status: '상태·판단·한계',
    decisions: '내가 정한 것',
    openFull: '원본 크기로 보기 ↗',
    swipeHint: '그림을 옆으로 밀어 보거나, 눌러서 원본 크기로 엽니다.',
    footer: '회사 비공개 저장소 · 수치는 git 기록·운영 기록 기준(측정일 표기)',
  },
  en: {
    background: 'Background',
    stack: 'Tech stack',
    scale: 'Scale',
    flow: 'How it works',
    architecture: 'Architecture',
    screens: 'Screens',
    highlights: 'Technical highlights',
    status: 'Status, judgment, limits',
    decisions: 'What I decided',
    openFull: 'Open full size ↗',
    swipeHint: 'Swipe the diagram sideways, or tap to open it at full size.',
    koNote: 'Full write-up is in Korean.',
    koLink: 'Read the Korean case study',
    footer: 'Private company repos · figures from git history and ops records (dated)',
  },
};

// **굵게**·`코드` 표시만 마크업으로 바꾼다 (원고 문장은 그대로)
function Rich({ text }) {
  if (!text) return null;
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function Diagram({ diagram, caption, t, eager }) {
  return (
    <Figure>
      <div className="scroll wide">
        <a href={diagram.src} target="_blank" rel="noopener noreferrer" title={t.openFull}>
          <img src={diagram.src} {...imgAttrs(diagram.src, { eager })} alt={diagram.alt} />
        </a>
      </div>
      <span className="hint">{t.swipeHint}</span>
      {caption && <figcaption>{caption}</figcaption>}
      <a className="open" href={diagram.src} target="_blank" rel="noopener noreferrer">
        {t.openFull}
      </a>
    </Figure>
  );
}

function CaseHeader({ c, lang }) {
  return (
    <>
      <Header>
        <img src={c.logo} {...imgAttrs(c.logo, { eager: true })} alt="" />
        <div>
          <h1>{c.title}</h1>
          <StatusBadge status={c.status} lang={lang} />
        </div>
      </Header>
      <Subtitle>{c.subtitle}</Subtitle>
    </>
  );
}

// 영문: 요약만 두고 전체 원고는 한국어 페이지로
function EnglishSummary({ c, t }) {
  return (
    <PageWrapper>
      <Container>
        <CaseHeader c={c} lang="en" />
        {c.headline && (
          <Headline>
            <strong>{c.headline.value}</strong>
            <span>{c.headline.label}</span>
          </Headline>
        )}
        <Block>
          <h2>{t.architecture}</h2>
          <Diagram diagram={c.diagram} t={t} eager />
          <KoNote>
            {t.koNote} <Link to={`/projects/${c.slug}`}>{t.koLink} →</Link>
          </KoNote>
        </Block>
        <Footer>{t.footer}</Footer>
      </Container>
    </PageWrapper>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const { lang, content, withPrefix } = useLang();

  if (LEGACY_SLUG_REDIRECT[slug]) {
    return <Navigate to={withPrefix(`/projects/${LEGACY_SLUG_REDIRECT[slug]}`)} replace />;
  }
  if (LEGACY_ROUTE_REDIRECT[`/projects/${slug}`]) {
    return <Navigate to={withPrefix(LEGACY_ROUTE_REDIRECT[`/projects/${slug}`])} replace />;
  }

  const c = content.cases.find((x) => x.slug === slug);
  if (!c) {
    return <Navigate to={withPrefix('/projects')} replace />;
  }

  const t = LABELS[lang] || LABELS.ko;
  if (c.koOnly) return <EnglishSummary c={c} t={t} />;

  return (
    <PageWrapper>
      <Container>
        <CaseHeader c={c} lang={lang} />
        <MetaList>
          {c.meta.map((row) => (
            <React.Fragment key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </React.Fragment>
          ))}
        </MetaList>

        <Block>
          <h2>{t.background}</h2>
          <p>{c.background}</p>
        </Block>

        <Block>
          <h2>{t.stack}</h2>
          <SkillsList>
            {c.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </SkillsList>
        </Block>

        {c.scale.length > 0 && (
          <Block>
            <h2>{t.scale}</h2>
            <ul>
              {c.scale.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Block>
        )}

        <Block>
          <h2>{t.flow}</h2>
          <ol>
            {c.flow.map((f) => (
              <li key={f}>
                <Rich text={f} />
              </li>
            ))}
          </ol>
        </Block>

        <Block>
          <h2>{t.architecture}</h2>
          <Diagram diagram={c.diagram} caption={c.diagramCaption} t={t} />
        </Block>

        {c.screens.length > 0 && (
          <Block>
            <h2>{t.screens}</h2>
            <ScreenGrid>
              {c.screens
                .filter((s) => s.image)
                .map((s) => (
                  <Figure key={s.label}>
                    <div className="scroll">
                      <a href={s.image} target="_blank" rel="noopener noreferrer" title={t.openFull}>
                        <img src={s.image} {...imgAttrs(s.image)} alt={lang === 'en' ? `${s.label} screenshot` : `${s.label} 캡처`} />
                      </a>
                    </div>
                    <figcaption>
                      <strong>{s.label}</strong> {s.text}
                    </figcaption>
                  </Figure>
                ))}
            </ScreenGrid>
            {c.screens.some((s) => !s.image) && (
              <ul>
                {c.screens
                  .filter((s) => !s.image)
                  .map((s) => (
                    <li key={s.label}>
                      <strong>{s.label}:</strong> {s.text}
                    </li>
                  ))}
              </ul>
            )}
          </Block>
        )}

        <Block>
          <h2>{c.incidentsTitle}</h2>
          <IncidentList>
            {c.incidents.map((item) => (
              <li key={item.title}>
                <strong>
                  <Rich text={item.title} />
                </strong>
                <Rich text={item.text} />
              </li>
            ))}
          </IncidentList>
        </Block>

        <Block>
          <h2>{t.highlights}</h2>
          <HighlightGrid>
            {c.highlights.map((h, i) => (
              <HighlightCard key={h.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="title">
                  <Rich text={h.title} />
                </span>
                <span className="text">
                  <Rich text={h.text} />
                </span>
              </HighlightCard>
            ))}
          </HighlightGrid>
        </Block>

        {c.status3.length > 0 && (
          <Block>
            <h2>{t.status}</h2>
            <ul>
              {c.status3.map((s) => (
                <li key={s}>
                  <Rich text={s} />
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block>
          <h2>{t.decisions}</h2>
          <ul>
            {c.decisions.map((d) => (
              <li key={d}>
                <Rich text={d} />
              </li>
            ))}
          </ul>
        </Block>

        <Footer>{t.footer}</Footer>
      </Container>
    </PageWrapper>
  );
}
