// 데이터 기반 케이스 스터디 페이지. content.cases 안의 어떤 케이스도 slug 로 렌더링한다.
// v3 필드(status·chain·tldr·problem·constraints·judgments·systemSteps·results·limits·incidents)는 있을 때만 그린다. 옛 필드도 그대로 동작한다.
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
  DiagramRow,
  TextSection,
  HorizontalSection,
  Section,
  SkillsList,
  TroubleshootItem,
  AiCollabBox,
  Footer,
  TldrBox,
  Collapsible,
  ChoiceItem,
  CaseMeta,
  ZoomHint,
} from '../components/ui/CaseStudyKit';
import StatusBadge from '../components/ui/StatusBadge';
import imgAttrs from '../components/ui/imgAttrs';
// 옛 /projects/project6~9 URL 과 바뀐 slug 의 리다이렉트 표 (정적 HTML 생성과 공유)
import { LEGACY_SLUG_REDIRECT } from '../seo/routeMeta';

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
    chain: '저장소 사슬',
    tldr: 'TL;DR',
    v3Problem: '문제',
    constraints: '제약',
    judgments: '판단',
    systemSteps: '시스템',
    results: '결과',
    limits: '한계 · 현재 상태',
    incidents: '사고와 가드',
    stackScale: '기술 스택 · 규모',
    why: '이유',
    symptom: '증상',
    incidentCause: '원인',
    fix: '조치',
    guard: '가드',
    count: (n) => `${n}개`,
    zoomHint: '탭하면 크게 보기',
    zoomLabel: '새 탭에서 원본 크기로 보기',
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
    chain: 'Repo chain',
    tldr: 'TL;DR',
    v3Problem: 'Problem',
    constraints: 'Constraints',
    judgments: 'Judgment calls',
    systemSteps: 'System',
    results: 'Results',
    limits: 'Limits · current status',
    incidents: 'Incidents and guards',
    stackScale: 'Stack · Scale',
    why: 'Why',
    symptom: 'Symptom',
    incidentCause: 'Cause',
    fix: 'Fix',
    guard: 'Guard',
    count: (n) => `${n}`,
    zoomHint: 'Tap to enlarge',
    zoomLabel: 'Open full size in a new tab',
  },
};

// 문자열 하나 또는 배열을 배열로
const asList = (v) => (Array.isArray(v) ? v : v ? [v] : []);

// 접히는 칸 하나. 짧은 칸은 펼친 채로 시작한다
function Fold({ title, count, open, children }) {
  return (
    <Collapsible open={open}>
      <summary>
        <h3>{title}</h3>
        {count ? <span className="count">{count}</span> : null}
      </summary>
      <div className="body">{children}</div>
    </Collapsible>
  );
}

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
  const isV3 = Boolean(caseData.tldr);
  const tldr = asList(caseData.tldr);
  const problem = asList(caseData.problem);
  const constraints = asList(caseData.constraints);
  const judgments = asList(caseData.judgments);
  const systemSteps = asList(caseData.systemSteps);
  const results = asList(caseData.results);
  const limits = asList(caseData.limits);
  const incidents = asList(caseData.incidents);
  const stack = asList(caseData.stack);
  const scale = asList(caseData.scale);
  const highlights = asList(caseData.highlights);
  const images = asList(caseData.architectureImages);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src={caseData.logo} {...imgAttrs(caseData.logo, { eager: true })} alt="" />
          <div>
            <h1>{caseData.title}</h1>
            <CaseMeta>
              <StatusBadge status={caseData.status} lang={lang} />
              {caseData.statusNote && <span className="status-note">{caseData.statusNote}</span>}
            </CaseMeta>
            <SubHeader>{caseData.period} &middot; {caseData.role}</SubHeader>
          </div>
        </Header>
        {!isV3 && caseData.oneLiner && <OneLiner>{caseData.oneLiner}</OneLiner>}
        {caseData.chain ? (
          <Repos>
            <span>{t.chain}</span> {caseData.chain}
          </Repos>
        ) : (
          caseData.repos && (
            <Repos>
              <span>{t.repos}</span> {caseData.repos}
            </Repos>
          )
        )}

        {tldr.length > 0 && (
          <TldrBox>
            <span className="tldr-label">{t.tldr}</span>
            <ul>
              {tldr.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </TldrBox>
        )}

        {!isV3 && (
          <HorizontalSection>
            {highlights.length > 0 && (
              <Section>
                <h3>{t.highlights}</h3>
                <ul>
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Section>
            )}

            {stack.length > 0 && (
              <Section>
                <h3>{t.stack}</h3>
                <SkillsList>
                  {stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </SkillsList>
              </Section>
            )}
          </HorizontalSection>
        )}

        {images.length > 0 && (
          <DiagramRow>
            {images.map((img, i) => (
              <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer" title={t.zoomLabel}>
                <img src={img.src} {...imgAttrs(img.src, { eager: i === 0 })} alt={img.alt} />
                <ZoomHint aria-hidden="true">{t.zoomHint}</ZoomHint>
              </a>
            ))}
          </DiagramRow>
        )}

        {isV3 && (
          <Section>
            {/* v3 에서는 주요 사항이 그림 아래로 간다 (첫 화면 = 메타 + TL;DR + 그림) */}
            {highlights.length > 0 && (
              <Fold title={t.highlights} open>
                <ul>
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Fold>
            )}
            {problem.length > 0 && (
              <Fold title={t.v3Problem} open>
                {problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Fold>
            )}
            {constraints.length > 0 && (
              <Fold title={t.constraints} open>
                <ul>
                  {constraints.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Fold>
            )}
            {judgments.length > 0 && (
              <Fold title={t.judgments} count={t.count(judgments.length)}>
                <ul>
                  {judgments.map((j) => (
                    <ChoiceItem key={j.choice}>
                      <strong>{j.choice}</strong>
                      {j.why && <span className="why">{j.why}</span>}
                    </ChoiceItem>
                  ))}
                </ul>
              </Fold>
            )}
            {systemSteps.length > 0 && (
              <Fold title={t.systemSteps} count={t.count(systemSteps.length)}>
                <ol>
                  {systemSteps.map((step) => (
                    <ChoiceItem key={step.title}>
                      <strong>{step.title}</strong>
                      {asList(step.points).length > 0 && (
                        <ul>
                          {asList(step.points).map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      )}
                      {step.chain && (
                        <span className="chain">
                          <span>{t.chain}</span>
                          {step.chain}
                        </span>
                      )}
                    </ChoiceItem>
                  ))}
                </ol>
              </Fold>
            )}
            {results.length > 0 && (
              <Fold title={t.results} open>
                <ul>
                  {results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Fold>
            )}
            {limits.length > 0 && (
              <Fold title={t.limits} open>
                <ul>
                  {limits.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Fold>
            )}
            {incidents.length > 0 && (
              <Fold title={t.incidents} count={t.count(incidents.length)}>
                {incidents.map((item) => (
                  <TroubleshootItem key={item.title}>
                    <strong>{item.title}</strong>
                    {[
                      ['symptom', t.symptom],
                      ['cause', t.incidentCause],
                      ['fix', t.fix],
                      ['guard', t.guard],
                    ].map(([key, label]) =>
                      item[key] ? (
                        <span className="field" key={key}>
                          <span className="field-label">{label}</span>
                          {item[key]}
                        </span>
                      ) : null
                    )}
                  </TroubleshootItem>
                ))}
              </Fold>
            )}
            {(stack.length > 0 || scale.length > 0) && (
              <Fold title={t.stackScale}>
                {stack.length > 0 && (
                  <SkillsList>
                    {stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </SkillsList>
                )}
                {scale.length > 0 && (
                  <ul>
                    {scale.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </Fold>
            )}
          </Section>
        )}

        <ContentSection>

          <TextSection>
            {caseData.background && (
              <Section>
                <h3>{t.background}</h3>
                <p>{caseData.background}</p>
              </Section>
            )}

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

            {!isV3 && scale.length > 0 && (
              <Section>
                <h3>{t.scale}</h3>
                <ul>
                  {scale.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Section>
            )}

            {asList(caseData.troubleshooting).length > 0 && (
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
            )}

            {asList(caseData.aiCollab).length > 0 && (
              <AiCollabBox>
                <h3>{t.aiCollab}</h3>
                <ul>
                  {caseData.aiCollab.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </AiCollabBox>
            )}
          </TextSection>
        </ContentSection>

        <Footer>
          <span>
            <FaLink style={{ marginRight: '5px' }} />
            {lang === 'ko' ? '회사 비공개 저장소 · 수치는 git 기록·운영 기록 기준(측정일 표기)' : 'Private company repo · figures from git history and ops records (dated)'}
          </span>
        </Footer>
      </Container>
    </PageWrapper>
  );
}
