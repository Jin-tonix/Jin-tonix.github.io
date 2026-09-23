// 데이터 기반 케이스 스터디 페이지. content.cases 안의 어떤 케이스도 slug 로 렌더링한다.
// 옛 /projects/project6~9 링크는 새 slug 로 리다이렉트하고, project1~5 는 기존 한국어 전용 페이지를 그대로 보여준다.
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import { useLang } from '../lang/LangContext';
import KoreanOnlyNote from '../components/ui/KoreanOnlyNote';
import {
  PageWrapper,
  Container,
  Header,
  SubHeader,
  OneLiner,
  Repos,
  ContentSection,
  ImagesSection,
  TextSection,
  HorizontalSection,
  Section,
  SkillsList,
  TroubleshootItem,
  AiCollabBox,
  Footer,
} from '../components/ui/CaseStudyKit';

import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';
import Project5 from '../components/Project5';

const LEGACY_PAGES = {
  project1: Project1,
  project2: Project2,
  project3: Project3,
  project4: Project4,
  project5: Project5,
};

// 옛 /projects/project6~9 URL 이 가리키던 새 case slug
const LEGACY_SLUG_REDIRECT = {
  project6: 'company-os',
  project7: 'sales-pipeline',
  project8: 'email-agent',
  project9: 'field-fleet',
};

const LABELS = {
  ko: {
    highlights: '개발 주요 사항',
    stack: '기술 스택',
    scale: '규모 (git 실측)',
    background: '프로젝트 배경',
    troubleshooting: '핵심 트러블슈팅',
    aiCollab: '평가 · 운영 · AI 협업',
    flow: '어떻게 동작하나',
    repos: '관련 저장소',
    problem: 'Problem',
    cause: 'Cause',
    action: 'Action',
    result: 'Result',
  },
  en: {
    highlights: 'Highlights',
    stack: 'Stack',
    scale: 'Scale (measured from git)',
    background: 'Background',
    troubleshooting: 'Troubleshooting',
    aiCollab: 'Evals · Ops · AI collaboration',
    flow: 'How it works',
    repos: 'Repos',
    problem: 'Problem',
    cause: 'Cause',
    action: 'Action',
    result: 'Result',
  },
};

export default function CaseStudy() {
  const { slug } = useParams();
  const { lang, content, withPrefix } = useLang();

  if (LEGACY_SLUG_REDIRECT[slug]) {
    return <Navigate to={withPrefix(`/projects/${LEGACY_SLUG_REDIRECT[slug]}`)} replace />;
  }

  const LegacyPage = LEGACY_PAGES[slug];
  if (LegacyPage) {
    return (
      <>
        {lang === 'en' && <KoreanOnlyNote text={content.nav.koOnlyNote} />}
        <LegacyPage />
      </>
    );
  }

  const caseData = content.cases.find((c) => c.slug === slug);
  if (!caseData) {
    return <Navigate to={withPrefix('/projects')} replace />;
  }

  const t = LABELS[lang];

  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src={caseData.logo} alt={caseData.title} />
          <div>
            <h1>{caseData.title}</h1>
            <SubHeader>- {caseData.period} &middot; {caseData.role}</SubHeader>
          </div>
        </Header>
        <OneLiner>{caseData.oneLiner}</OneLiner>
        {caseData.repos && (
          <Repos>
            <span>{t.repos}</span> {caseData.repos}
          </Repos>
        )}

        <HorizontalSection>
          <Section>
            <h3>{t.highlights}</h3>
            <ul>
              {caseData.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <h3>{t.stack}</h3>
            <SkillsList>
              {caseData.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </SkillsList>
          </Section>
        </HorizontalSection>

        <ContentSection>
          <ImagesSection>
            {caseData.architectureImages.map((img) => (
              <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={img.alt} />
              </a>
            ))}
          </ImagesSection>

          <TextSection>
            <Section>
              <h3>{t.background}</h3>
              <p>{caseData.background}</p>
            </Section>

            {caseData.flow && (
              <Section>
                <h3>{t.flow}</h3>
                <ol>
                  {caseData.flow.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ol>
              </Section>
            )}

            <Section>
              <h3>{t.scale}</h3>
              <ul>
                {caseData.scale.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Section>

            <Section>
              <h3>{t.troubleshooting}</h3>
              {caseData.troubleshooting.map((item) => (
                <TroubleshootItem key={item.title}>
                  <strong>{item.title}</strong>
                  {item.problem && (
                    <span className="field">
                      <span className="field-label">{t.problem}</span>
                      {item.problem}
                    </span>
                  )}
                  {item.cause && (
                    <span className="field">
                      <span className="field-label">{t.cause}</span>
                      {item.cause}
                    </span>
                  )}
                  {item.action && (
                    <span className="field">
                      <span className="field-label">{t.action}</span>
                      {item.action}
                    </span>
                  )}
                  {item.result && (
                    <span className="field">
                      <span className="field-label">{t.result}</span>
                      {item.result}
                    </span>
                  )}
                </TroubleshootItem>
              ))}
            </Section>

            <AiCollabBox>
              <h3>{t.aiCollab}</h3>
              <ul>
                {caseData.aiCollab.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </AiCollabBox>
          </TextSection>
        </ContentSection>

        <Footer>
          <span>
            <FaLink style={{ marginRight: '5px' }} />
            {lang === 'ko' ? '회사 비공개 저장소 · 수치는 git 기록 기준' : 'Private company repo · figures measured from git history'}
          </span>
        </Footer>
      </Container>
    </PageWrapper>
  );
}
