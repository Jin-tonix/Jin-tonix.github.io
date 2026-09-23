import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import Timeline from './ui/Timeline';
import PageShell, { Section, SectionTitle } from './ui/PageShell';
import { color, font } from './ui/tokens';

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
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

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ExperienceItem = styled.li`
  strong {
    color: ${color.gold};
    font-size: ${font.size.md};
  }

  .period {
    color: ${color.muted};
    font-size: ${font.size.xs};
    margin-left: 6px;
  }

  .bullets {
    margin-top: 6px;
    color: ${color.text};
    font-size: ${font.size.sm};
    line-height: ${font.bodyLineHeight};
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

          <Section>
            <SectionTitle>{about.timelineTitle}</SectionTitle>
            <Timeline items={content.timeline} nowLabel={about.nowTitle} nowText={about.nowText} />
          </Section>
        </div>

        <div>
          <Section>
            <SectionTitle>{about.experienceTitle}</SectionTitle>
            <ExperienceList>
              {about.experience.map((exp) => (
                <ExperienceItem key={exp.org + exp.period}>
                  <strong>{exp.org}</strong>
                  <span className="period">{exp.period}</span>
                  <div className="bullets">
                    {exp.bullets.map((b) => (
                      <span key={b.slice(0, 20)}>- {b}</span>
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
