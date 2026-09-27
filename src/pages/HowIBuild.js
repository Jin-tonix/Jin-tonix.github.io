// How I Build — 작업 루프(번호 카드) + 하네스 목록 + AI 가 틀렸고 잡은 사례 + 사고에서 배운 원칙
import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, SectionTitle } from '../components/ui/PageShell';
import { color, font, layout } from '../components/ui/tokens';

const LoopGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  counter-reset: step;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.li`
  counter-increment: step;
  min-height: 126px;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 20px;

  strong {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${color.gold};
    font-size: 17px;
    font-weight: ${font.weight.subhead};
    line-height: 1.35;
    margin-bottom: 10px;

    &::before {
      content: counter(step, decimal-leading-zero);
      color: ${color.muted};
      font-size: 11px;
      font-weight: ${font.weight.body};
      letter-spacing: 0.06em;
    }
  }

  p {
    color: ${color.muted};
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
    word-break: keep-all;
  }
`;

const HarnessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const HarnessCard = styled.article`
  padding: 18px 20px;
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  background: ${color.surface};

  h3 {
    color: ${color.gold};
    font-size: 16px;
    font-weight: ${font.weight.subhead};
    line-height: 1.45;
    margin: 0 0 6px;
    overflow-wrap: anywhere;
  }

  p {
    color: ${color.muted};
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
    word-break: keep-all;
  }
`;

const CaughtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Caught = styled.article`
  position: relative;
  min-width: 0;
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 22px 20px 20px;
  background: linear-gradient(145deg, rgba(255, 215, 0, 0.035), transparent 55%);

  &::before {
    position: absolute;
    top: -1px;
    left: 20px;
    width: 42px;
    height: 2px;
    background: ${color.gold};
    content: '';
  }

  h3 {
    color: ${color.text};
    font-size: 18px;
    font-weight: ${font.weight.subhead};
    line-height: 1.5;
    margin: 0 0 12px;
  }

  ul {
    color: ${color.muted};
    font-size: 15px;
    line-height: 1.7;
    padding-left: 16px;
    margin: 0;

    li {
      padding-left: 2px;
      margin-top: 7px;
      overflow-wrap: anywhere;
    }

    li::marker {
      color: ${color.gold};
    }
  }
`;

const Lessons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 28px;
  border-top: 1px solid ${color.line};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Lesson = styled.article`
  padding: 16px 0;
  border-bottom: 1px solid ${color.line};

  h4 {
    color: ${color.gold};
    font-size: 16px;
    font-weight: ${font.weight.subhead};
    line-height: 1.5;
    margin: 0 0 6px;
  }

  p {
    color: ${color.muted};
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
    word-break: keep-all;
  }
`;

const Shell = styled(PageShell)`
  & > div {
    max-width: 1120px;
    padding: clamp(36px, 5vw, 64px) clamp(24px, 4vw, 52px);
  }

  header {
    margin-bottom: 48px;

    & > h1 {
      margin-bottom: 16px;
    }

    & > p {
      max-width: 68ch;
      font-size: 16px;
      line-height: 1.8;
    }

    .page-lead-primary {
      display: block;
      color: ${color.text};
      font-size: clamp(18px, 1.4vw, 21px);
      font-weight: ${font.weight.subhead};
      line-height: 1.55;
      margin-bottom: 10px;
    }

    .page-lead-detail {
      display: block;
      color: ${color.muted};
      font-size: 14px;
      line-height: 1.75;
    }
  }

  section {
    counter-increment: build-section;
    margin-bottom: 56px;
  }

  section > h2 {
    display: flex;
    align-items: baseline;
    gap: 12px;
    font-size: 23px;
    line-height: 1.35;
    margin-bottom: 20px;

    &::before {
      content: counter(build-section, decimal-leading-zero);
      color: ${color.muted};
      font-size: 11px;
      font-weight: ${font.weight.body};
      letter-spacing: 0.08em;
    }
  }

  @media (max-width: 700px) {
    & > div {
      padding: 32px 20px 48px;
    }

    header {
      margin-bottom: 36px;
    }

    section {
      margin-bottom: 42px;
    }
  }
`;

const splitHarnessItem = (text) => {
  const separator = text.indexOf(':');
  return separator === -1
    ? { title: text, description: '' }
    : { title: text.slice(0, separator), description: text.slice(separator + 1).trim() };
};

export default function HowIBuild() {
  const { content } = useLang();
  const { howIBuild } = content;

  return (
    <Shell
      title={howIBuild.title}
      lead={(
        <>
          <span className="page-lead-primary">{howIBuild.intro}</span>
          <span className="page-lead-detail">{howIBuild.introDetail}</span>
        </>
      )}
    >
      <Section>
        <SectionTitle>{howIBuild.loopTitle}</SectionTitle>
        <LoopGrid>
          {howIBuild.loop.map((item) => (
            <Step key={item.step}>
              <strong>{item.step}</strong>
              <p>{item.desc}</p>
            </Step>
          ))}
        </LoopGrid>
      </Section>

      <Section>
        <SectionTitle>{howIBuild.harnessTitle}</SectionTitle>
        <HarnessGrid className="harness-grid">
          {howIBuild.harness.map((item) => {
            const { title, description } = splitHarnessItem(item);
            return (
              <HarnessCard key={item}>
                <h3>{title}</h3>
                {description && <p>{description}</p>}
              </HarnessCard>
            );
          })}
        </HarnessGrid>
      </Section>

      {howIBuild.aiWrong && (
        <Section>
          <SectionTitle>{howIBuild.aiWrongTitle}</SectionTitle>
          <CaughtGrid className="caught-grid">
            {howIBuild.aiWrong.map((item) => (
              <Caught key={item.title}>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Caught>
            ))}
          </CaughtGrid>
        </Section>
      )}

      <Section>
        <SectionTitle>{howIBuild.incidentsTitle}</SectionTitle>
        <Lessons className="lessons-grid">
          {howIBuild.incidents.map((inc) => (
            <Lesson key={inc.title}>
              <h4>{inc.title}</h4>
              <p>{inc.lesson}</p>
            </Lesson>
          ))}
        </Lessons>
      </Section>
    </Shell>
  );
}
