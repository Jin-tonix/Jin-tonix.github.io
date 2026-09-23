import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useLang } from '../lang/LangContext';
import Timeline from './ui/Timeline';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222;
  padding: 30px 20px 20px calc(17vw + 20px);  /* ✅ 데스크탑 - 위쪽 패딩 증가 */
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: calc(17vw + 20px);  /* ✅ 동일 여백 */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: calc(23vw + 20px);  /* ✅ 태블릿 이상 보장 */
  }

  @media (max-width: 480px) {
    padding-left: calc(23vw + 20px);  /* ✅ 모바일에서 겹침 방지 */
  }
`;


const Content = styled.div`
  padding: 0px 30px;
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
`;

const LeftContent = styled(Content)`
  width: 47%;
  border-right: 1px solid #444;
  padding-left: 40px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-left: 40px; /* ✅ 모바일에선 Container가 이미 여백 줌 */
  }
`;


const RightContent = styled(Content)`
  width: 53%;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #ffd700;
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  }

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: clamp(0.85rem, 1.1vw, 1.1rem);
    line-height: 1.6;
  }

  li span {
    font-size: clamp(0.8rem, 0.95vw, 0.95rem);
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
    font-size: clamp(0.8rem, 0.95vw, 0.95rem);
  }
`;

const ProfileImage = styled.img`
  width: 8vw;
  max-width: 120px;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 0 auto 20px;
  }
`;

const About = () => {
  const { content } = useLang();
  const { about } = content;

  return (
    <Container>
      <LeftContent>
        <Section id="about">
          <h2>{about.title}</h2>
          <ProfileImage src={about.photo} alt="Jinhee Mok" />
          <p><strong style={{ color: '#ffd700' }}>{about.tagline}</strong></p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Section>

        <Section id="timeline">
          <h2 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)' }}>{about.timelineTitle}</h2>
          <Timeline items={content.timeline} nowLabel={about.nowTitle} nowText={about.nowText} />
        </Section>
      </LeftContent>
      <RightContent>
        <Section id="resume">
          <h2>{about.experienceTitle}</h2>
          <ul>
            {about.experience.map((exp) => (
              <li key={exp.org + exp.period}>
                <strong style={{ color: '#ffd700' }}>{exp.org}</strong> ({exp.period})<br />
                {exp.bullets.map((b) => (
                  <span key={b.slice(0, 20)}>- {b}<br /></span>
                ))}
              </li>
            ))}
          </ul>
        </Section>
      </RightContent>
    </Container>
  );
};

export default About;
