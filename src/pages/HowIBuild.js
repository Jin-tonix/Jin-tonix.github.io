// How I Build — 작업 루프(번호 카드) + 하네스 목록 + AI 가 틀렸고 잡은 사례 + 사고에서 배운 원칙
import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, SectionTitle } from '../components/ui/PageShell';
import { color, font, layout } from '../components/ui/tokens';

const LoopGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
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
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 12px 14px;

  strong {
    display: block;
    color: ${color.gold};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.subhead};
    margin-bottom: 4px;

    &::before {
      content: counter(step) '. ';
    }
  }

  p {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.55;
    margin: 0;
    word-break: keep-all;
  }
`;

const List = styled.ul`
  color: ${color.text};
  font-size: ${font.size.sm};
  line-height: ${font.bodyLineHeight};
  padding-left: 20px;
  margin: 0;
  max-width: ${font.proseMaxWidth};

  li {
    margin-bottom: 4px;
  }
`;

const CaughtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Caught = styled.article`
  border: 1px solid ${color.line};
  border-left: 3px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 12px 14px;

  h3 {
    color: ${color.text};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.subhead};
    line-height: 1.45;
    margin: 0 0 6px;
  }

  ul {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.55;
    padding-left: 18px;
    margin: 0;
  }
`;

const Lessons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  border-top: 1px solid ${color.line};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Lesson = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${color.line};

  h4 {
    color: ${color.gold};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.subhead};
    line-height: 1.45;
    margin: 0 0 2px;
  }

  p {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.55;
    margin: 0;
  }
`;

const Shell = styled(PageShell)`
  & > div {
    max-width: 1200px;
  }

  header {
    margin-bottom: 32px;
  }

  section {
    margin-bottom: 36px;
  }
`;

export default function HowIBuild() {
  const { content } = useLang();
  const { howIBuild } = content;

  return (
    <Shell title={howIBuild.title} lead={howIBuild.intro}>
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
        <List>
          {howIBuild.harness.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </List>
      </Section>

      {howIBuild.aiWrong && (
        <Section>
          <SectionTitle>{howIBuild.aiWrongTitle}</SectionTitle>
          <CaughtGrid>
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
        <Lessons>
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
