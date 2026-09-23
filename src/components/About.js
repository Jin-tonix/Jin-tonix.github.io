import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, SectionTitle } from './ui/PageShell';
import { color, font, layout } from './ui/tokens';

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
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
  font-size: ${font.size.md};
  line-height: ${font.bodyLineHeight};
  max-width: ${font.proseMaxWidth};
  margin: 0 0 14px;
`;

const NowBox = styled.div`
  border: 1px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 12px 16px;
  margin-bottom: 20px;
  background-color: rgba(255, 215, 0, 0.06);

  .now-label {
    color: ${color.gold};
    font-weight: ${font.weight.subhead};
    font-size: ${font.size.xs};
  }

  .now-text {
    color: ${color.text};
    font-size: ${font.size.sm};
    line-height: 1.6;
    margin-top: 4px;
  }
`;

// 최신 경력이 위, 오래된 경력이 아래로 쌓이는 세로 타임라인
const ExperienceList = styled.ul`
  position: relative;
  list-style: none;
  padding: 0 0 0 26px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background-color: ${color.line};
  }
`;

const ExperienceItem = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -26px;
    top: 5px;
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${({ $current }) => ($current ? color.gold : color.bg)};
    border: 2px solid ${({ $current }) => ($current ? color.gold : color.muted)};
  }

  .period {
    display: block;
    color: ${color.gold};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.subhead};
  }

  strong {
    display: block;
    color: ${color.text};
    font-size: ${font.size.md};
    font-weight: ${font.weight.subhead};
    margin-top: 2px;
  }

  .bullets {
    margin-top: 6px;
    color: ${color.muted};
    font-size: ${font.size.sm};
    line-height: 1.65;
  }

  .bullets span {
    display: block;
  }
`;

const About = () => {
  const { content } = useLang();
  const { about } = content;

  return (
    <PageShell title={about.title} lead={about.tagline}>
      <TwoColumn>
        <div>
          <Section>
            <ProfileImage src={about.photo} alt="Jinhee Mok" />
            {about.paragraphs.map((p) => (
              <Paragraph key={p.slice(0, 20)}>{p}</Paragraph>
            ))}
          </Section>

        </div>

        <div>
          <Section>
            <SectionTitle>{about.experienceTitle}</SectionTitle>
            <NowBox>
              <div className="now-label">{about.nowTitle}</div>
              <div className="now-text">{about.nowText}</div>
            </NowBox>
            <ExperienceList>
              {about.experience.map((exp, i) => (
                <ExperienceItem key={exp.org + exp.period} $current={i === 0}>
                  <span className="period">{exp.period}</span>
                  <strong>{exp.org}</strong>
                  <div className="bullets">
                    {exp.bullets.map((b) => (
                      <span key={b.slice(0, 20)}>{b}</span>
                    ))}
                  </div>
                </ExperienceItem>
              ))}
            </ExperienceList>
          </Section>
        </div>
      </TwoColumn>
    </PageShell>
  );
};

export default About;
