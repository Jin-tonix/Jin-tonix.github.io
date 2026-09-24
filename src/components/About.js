import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, Header, PageTitle, Lead } from './ui/PageShell';
import { color, font, layout } from './ui/tokens';

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const ProfileImage = styled.img`
  width: 96px;
  height: auto;
  margin: 0 0 16px 20px;
  float: right;
  border-radius: 10px;
  border: 1px solid ${color.line};

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 0 auto 16px;
  }
`;

const Paragraph = styled.p`
  color: ${color.text};
  font-size: ${font.size.sm};
  line-height: 1.7;
  max-width: ${font.proseMaxWidth};
  margin: 0 0 10px;
`;

const NowBox = styled.div`
  border: 1px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 8px 14px;
  margin-bottom: 14px;
  background-color: rgba(255, 215, 0, 0.06);

  .now-label {
    color: ${color.gold};
    font-weight: ${font.weight.subhead};
    font-size: ${font.size.xs};
  }

  .now-text {
    color: ${color.text};
    font-size: ${font.size.xs};
    line-height: 1.5;
    margin-top: 2px;
  }
`;

// 최신이 위로 오는 세로 여정 — 날짜 칸 · 제목 · 한 줄 요약 (Canva Journey 표와 같은 구성)
const JourneyList = styled.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background-color: ${color.line};
  }
`;

const JourneyItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 16px;
  padding: 0 0 0 26px;
  margin-bottom: ${({ $kind }) => ($kind === 'tech' ? '10px' : '4px')};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 11px;
    height: 11px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${({ $current }) => ($current ? color.gold : color.bg)};
    border: 2px solid ${({ $kind }) => ($kind === 'tech' ? color.gold : color.line)};
  }

  .period {
    color: ${({ $kind }) => ($kind === 'tech' ? color.gold : color.muted)};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.subhead};
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    padding-top: 2px;
  }

  .org {
    color: ${({ $kind }) => ($kind === 'tech' ? color.text : color.muted)};
    font-size: ${({ $kind }) => ($kind === 'tech' ? font.size.sm : font.size.xs)};
    font-weight: ${({ $kind }) => ($kind === 'tech' ? font.weight.subhead : font.weight.body)};
    line-height: 1.4;
  }

  .tag {
    display: inline-block;
    display: table;
    margin-top: 3px;
    padding: 0 7px;
    border: 1px solid ${color.gold};
    border-radius: 999px;
    color: ${color.gold};
    font-size: 11px;
    font-weight: ${font.weight.subhead};
  }

  .summary {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.45;
    margin-top: 1px;
  }

  .inline-summary {
    color: ${color.muted};
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .period {
      padding-top: 0;
    }
  }
`;

const TightHeader = styled(Header)`
  margin-bottom: 24px;
`;

const CompactShell = styled(PageShell)`
  & > div {
    padding-top: 36px;
    padding-bottom: 24px;
  }
`;

const About = () => {
  const { content } = useLang();
  const { about } = content;

  return (
    <CompactShell>
      <TwoColumn>
        <div>
          <TightHeader>
            <PageTitle>{about.title}</PageTitle>
            <Lead>{about.tagline}</Lead>
          </TightHeader>
          <Section>
            <ProfileImage src={about.photo} alt="Jinhee Mok" />
            {about.paragraphs.map((p) => (
              <Paragraph key={p.slice(0, 20)}>{p}</Paragraph>
            ))}
          </Section>

        </div>

        <div>
          <TightHeader>
            <PageTitle>{about.experienceTitle}</PageTitle>
            <Lead>{about.experienceLead}</Lead>
          </TightHeader>
          <Section>
            <NowBox>
              <div className="now-label">{about.nowTitle}</div>
              <div className="now-text">{about.nowText}</div>
            </NowBox>
            <JourneyList>
              {about.experience.map((exp, i) => (
                <JourneyItem key={exp.org + exp.period} $current={i === 0} $kind={exp.kind}>
                  <span className="period">
                    {exp.period}
                    {exp.careerChange && <span className="tag">{about.careerChangeLabel}</span>}
                  </span>
                  <div>
                    <div className="org">
                      {exp.org}
                      {exp.kind !== 'tech' && <span className="inline-summary"> · {exp.summary}</span>}
                    </div>
                    {exp.kind === 'tech' && <div className="summary">{exp.summary}</div>}
                  </div>
                </JourneyItem>
              ))}
            </JourneyList>
          </Section>
        </div>
      </TwoColumn>
    </CompactShell>
  );
};

export default About;
