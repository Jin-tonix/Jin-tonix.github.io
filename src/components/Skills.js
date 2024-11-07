import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaJava, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGit, FaDatabase } from 'react-icons/fa';
import { SiSpring, SiMysql, SiVuedotjs, SiFlutter, SiPython } from 'react-icons/si';

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
  height: 100vh;
  overflow: hidden;
  background-color: #222; /* 사이드바와 어울리게 어두운 배경색 추가 */
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  animation: ${fadeInUp} 1s ease;
  color: #fff; /* 텍스트 색상을 흰색으로 변경 */
  @media (max-width: 768px) {
    width: calc(100vw - 180px);
    margin-left: 180px;
    padding: 10vh 20px;
  }
`;

const SkillSection = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 15px;
    margin-left: 30px;
    color: #ffd700;
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }

  p {
    line-height: 1.6;
    font-size: 0.8em;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    font-size: 1.5em;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7em;
    color: #fff;
  }

  .skill-icon {
    font-size: 2em;
    margin-bottom: 10px;
  }
`;

const Skills = () => (
  <Container>
    <Content>
      <SkillSection id="backend-skills">
        <h2>Backend</h2>
        <div className="skills">
          <div className="skill-item">
            <FaJava className="skill-icon" color="#007396" />
            <span style={{ color: '#fff' }}>Java</span>
          </div>
          <div className="skill-item">
            <SiSpring className="skill-icon" color="#6DB33F" />
            <span style={{ color: '#fff' }}>Spring</span>
          </div>
          <div className="skill-item">
            <SiMysql className="skill-icon" color="#4479A1" />
            <span style={{ color: '#fff' }}>MySQL</span>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" color="#f29111" />
            <span style={{ color: '#fff' }}>JPA</span>
          </div>
          <div className="skill-item">
            <SiPython className="skill-icon" color="#3776AB" />
            <span style={{ color: '#fff' }}>Python</span>
          </div>
        </div>
      </SkillSection><br/><br/>

      <SkillSection id="frontend-skills">
        <h2>Frontend</h2>
        <div className="skills">
          <div className="skill-item">
            <FaHtml5 className="skill-icon" color="#E34F26" />
            <span style={{ color: '#fff' }}>HTML</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" color="#1572B6" />
            <span style={{ color: '#fff' }}>CSS</span>
          </div>
          <div className="skill-item">
            <FaJs className="skill-icon" color="#F7DF1E" />
            <span style={{ color: '#fff' }}>JavaScript</span>
          </div>
          <div className="skill-item">
            <SiVuedotjs className="skill-icon" color="#4FC08D" />
            <span style={{ color: '#fff' }}>Vue.js</span>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" color="#61DAFB" />
            <span style={{ color: '#fff' }}>React</span>
          </div>
          <div className="skill-item">
            <SiFlutter className="skill-icon" color="#02569B" />
            <span style={{ color: '#fff' }}>Flutter</span>
          </div>
        </div>
      </SkillSection><br/><br/>

      <SkillSection id="devops-skills">
        <h2>DevOps</h2>
        <div className="skills">
          <div className="skill-item">
            <FaDocker className="skill-icon" color="#2496ED" />
            <span style={{ color: '#fff' }}>Docker</span>
          </div>
          <div className="skill-item">
            <FaGit className="skill-icon" color="#F05032" />
            <span style={{ color: '#fff' }}>Git</span>
          </div>
          <div className="skill-item">
            <FaGithub className="skill-icon" color="#181717" />
            <span style={{ color: '#fff' }}>GitHub</span>
          </div>
        </div>
      </SkillSection>
    </Content>
  </Container>
);

export default Skills;
