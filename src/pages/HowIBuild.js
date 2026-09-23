// How I Build — 루프 다이어그램(단순 styled steps) + 하네스 목록 + incident lessons
import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, SectionTitle } from '../components/ui/PageShell';
import { Card, CardGrid, ZoomImage } from '../components/ui/primitives';
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

const IncidentCard = styled(Card)`
  h4 {
    color: ${color.gold};
    font-size: ${font.size.md};
    margin: 0 0 8px;
  }

  p {
    color: ${color.text};
    font-size: ${font.size.sm};
    line-height: ${font.bodyLineHeight};
    margin: 0;
  }
`;

export default function HowIBuild() {
  const { content } = useLang();
  const { howIBuild } = content;

  return (
    <PageShell title={howIBuild.title} lead={howIBuild.intro}>
      <Section>
        <SectionTitle>{howIBuild.loopTitle}</SectionTitle>
        {howIBuild.image && (
          <ZoomImage href={howIBuild.image} target="_blank" rel="noopener noreferrer">
            <img src={howIBuild.image} alt={howIBuild.loopTitle} />
          </ZoomImage>
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
        <CardGrid>
          {howIBuild.incidents.map((inc) => (
            <IncidentCard key={inc.title}>
              <h4>{inc.title}</h4>
              <p>{inc.lesson}</p>
            </IncidentCard>
          ))}
        </CardGrid>
      </Section>
    </PageShell>
  );
}
