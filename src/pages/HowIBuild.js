// How I Build — 루프 다이어그램(단순 styled steps) + 하네스 목록 + incident lessons
import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import { PageContainer, Title, GroupTitle, GroupIntro } from '../components/ui/GridKit';

const LoopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: 80%;
  margin-bottom: 20px;
`;

const Step = styled.div`
  background-color: #333;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 10px 14px;
  color: #eee;
  font-size: clamp(0.75em, 1.1vw, 0.9em);
`;

const Arrow = styled.span`
  color: #ffd700;
  font-size: 1.1em;
`;

const List = styled.ul`
  width: 80%;
  color: #ccc;
  font-size: clamp(0.8em, 1.1vw, 0.95em);
  line-height: 1.8;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const IncidentGrid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
`;

const IncidentCard = styled.div`
  background-color: #262626;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 12px 16px;

  h4 {
    color: #ffd700;
    font-size: 0.95em;
    margin: 0 0 6px;
  }

  p {
    color: #ccc;
    font-size: 0.85em;
    line-height: 1.6;
    margin: 0;
  }
`;

export default function HowIBuild() {
  const { content } = useLang();
  const { howIBuild } = content;

  return (
    <PageContainer>
      <Title>{howIBuild.title}</Title>
      <GroupIntro style={{ textAlign: 'center' }}>{howIBuild.intro}</GroupIntro>

      <GroupTitle>{howIBuild.loopTitle}</GroupTitle>
      <LoopRow>
        {howIBuild.loop.map((step, i) => (
          <React.Fragment key={step}>
            <Step>{step}</Step>
            {i < howIBuild.loop.length - 1 && <Arrow>&rarr;</Arrow>}
          </React.Fragment>
        ))}
      </LoopRow>

      <GroupTitle>{howIBuild.harnessTitle}</GroupTitle>
      <List>
        {howIBuild.harness.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </List>

      <GroupTitle>{howIBuild.incidentsTitle}</GroupTitle>
      <IncidentGrid>
        {howIBuild.incidents.map((inc) => (
          <IncidentCard key={inc.title}>
            <h4>{inc.title}</h4>
            <p>{inc.lesson}</p>
          </IncidentCard>
        ))}
      </IncidentGrid>
    </PageContainer>
  );
}
