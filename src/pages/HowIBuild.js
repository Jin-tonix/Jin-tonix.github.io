// How I Build — 루프 다이어그램(단순 styled steps) + 하네스 목록 + 사고에서 배운 원칙 (제목·설명 두 칸 목록)
import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, SectionTitle } from '../components/ui/PageShell';
import { ZoomImage } from '../components/ui/primitives';
import { color, font } from '../components/ui/tokens';

const LoopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

const Step = styled.div`
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: 8px;
  padding: 10px 14px;
  color: ${color.text};
  font-size: ${font.size.sm};
  max-width: 190px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${color.gold};
  }

  small {
    color: ${color.muted};
    font-size: 0.85em;
    line-height: 1.4;
  }
`;

const Arrow = styled.span`
  color: ${color.gold};
  font-size: 1.1em;
`;

const List = styled.ul`
  color: ${color.text};
  font-size: ${font.size.sm};
  line-height: ${font.bodyLineHeight};
  padding-left: 20px;
  margin: 0;
  max-width: ${font.proseMaxWidth};
`;

// About·Skills 와 같은 한 화면 배치 — 세로 가운데, 1200px 칼럼
const CompactShell = styled(PageShell)`
  align-items: center;

  & > div {
    max-width: 1200px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  header {
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 20px;
  }
`;

// 그림 자체에 제목이 있어 섹션 제목 없이 둔다. 폭으로 높이를 제한해 한 화면에 들어가게 한다.
const Diagram = styled(ZoomImage)`
  max-width: 800px;

  @media (max-height: 760px) and (min-width: 900px) {
    max-width: 680px;
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

export default function HowIBuild() {
  const { content } = useLang();
  const { howIBuild } = content;

  return (
    <CompactShell title={howIBuild.title} lead={howIBuild.intro}>
      <Section>
        {!howIBuild.image && <SectionTitle>{howIBuild.loopTitle}</SectionTitle>}
        {howIBuild.image && (
          <Diagram href={howIBuild.image} target="_blank" rel="noopener noreferrer">
            <img src={howIBuild.image} alt={howIBuild.loopTitle} />
          </Diagram>
        )}
        {!howIBuild.image && (
          <>
            <LoopRow>
              {howIBuild.loop.map((item, i) => (
                <React.Fragment key={item.step}>
                  <Step title={item.desc}>
                    <strong>{item.step}</strong>
                    <small>{item.desc}</small>
                  </Step>
                  {i < howIBuild.loop.length - 1 && <Arrow>&rarr;</Arrow>}
                </React.Fragment>
              ))}
            </LoopRow>
          </>
        )}
      </Section>

      {!howIBuild.image && (
        <Section>
          <SectionTitle>{howIBuild.harnessTitle}</SectionTitle>
          <List>
            {howIBuild.harness.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </List>
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
    </CompactShell>
  );
}
