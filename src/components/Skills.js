import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaJava, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGit, FaDatabase, FaNodeJs, FaRobot, FaProjectDiagram, FaChartLine, FaUserCheck, FaCode, FaChrome, FaSync } from 'react-icons/fa';
import { SiSpring, SiMysql, SiVuedotjs, SiFlutter, SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiSupabase, SiN8N, SiPlaywright, SiSwift, SiGooglecloud, SiNginx, SiGithubactions } from 'react-icons/si';

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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222;
  padding: 10px 20px 10px calc(15vw + 20px); /* ✅ 사이드바 너비 + 여백 */
  box-sizing: border-box;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding-left: calc(17vw + 20px);
  }

  @media (max-width: 768px) {
    padding-left: calc(23vw + 20px);
  }

  @media (max-width: 480px) {
    padding-left: calc(23vw + 20px);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // center 정렬을 위해 변경
  justify-content: center; // center 정렬을 위해 추가
  width: 100%;
  max-width: 800px;
  padding: 40px;
  overflow-y: auto;
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  max-height: 100vh;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
  }
`;

const SkillSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
  text-align: left; // 전체 섹션을 왼쪽 정렬로 변경

  h2 {
    color: #ffd700;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: left; // 왼쪽 정렬로 변경
    margin-left: 0; // 왼쪽 마진 제거
    width: 100%; // 전체 너비 사용
    
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; // skills 아이템들은 중앙 정렬 유지
    align-items: center;
    font-size: 1.5em;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      gap: 15px;
      font-size: 1.2em;
    }
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

    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }
`;

const Skills = () => (
  <Container>
    <Content>
      <SkillSection id="ai-agent-skills">
        <h2>AI / Agent</h2>
        <div className="skills">
          <div className="skill-item">
            <FaRobot className="skill-icon" color="#ffd700" />
            <span style={{ color: '#fff' }}>LLM 에이전트 설계</span>
          </div>
          <div className="skill-item">
            <FaProjectDiagram className="skill-icon" color="#61DAFB" />
            <span style={{ color: '#fff' }}>MCP 서버</span>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" color="#f29111" />
            <span style={{ color: '#fff' }}>RAG (LightRAG, pgvector)</span>
          </div>
          <div className="skill-item">
            <FaProjectDiagram className="skill-icon" color="#6DB33F" />
            <span style={{ color: '#fff' }}>LiteLLM</span>
          </div>
          <div className="skill-item">
            <FaChartLine className="skill-icon" color="#F7DF1E" />
            <span style={{ color: '#fff' }}>Langfuse</span>
          </div>
          <div className="skill-item">
            <FaUserCheck className="skill-icon" color="#E34F26" />
            <span style={{ color: '#fff' }}>HITL 승인 설계</span>
          </div>
          <div className="skill-item">
            <FaCode className="skill-icon" color="#DE7356" />
            <span style={{ color: '#fff' }}>Claude Code</span>
          </div>
        </div>
      </SkillSection>

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
          <div className="skill-item">
            <SiNextdotjs className="skill-icon" color="#fff" />
            <span style={{ color: '#fff' }}>Next.js</span>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" color="#339933" />
            <span style={{ color: '#fff' }}>Node.js/Express</span>
          </div>
          <div className="skill-item">
            <SiFastapi className="skill-icon" color="#009688" />
            <span style={{ color: '#fff' }}>FastAPI</span>
          </div>
          <div className="skill-item">
            <SiPostgresql className="skill-icon" color="#4169E1" />
            <span style={{ color: '#fff' }}>PostgreSQL/PostgREST</span>
          </div>
          <div className="skill-item">
            <SiSupabase className="skill-icon" color="#3ECF8E" />
            <span style={{ color: '#fff' }}>Supabase</span>
          </div>
        </div>
      </SkillSection>

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
      </SkillSection>

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
          <div className="skill-item">
            <FaDocker className="skill-icon" color="#2496ED" />
            <span style={{ color: '#fff' }}>Docker Compose</span>
          </div>
          <div className="skill-item">
            <SiGithubactions className="skill-icon" color="#2088FF" />
            <span style={{ color: '#fff' }}>GitHub Actions</span>
          </div>
          <div className="skill-item">
            <SiGooglecloud className="skill-icon" color="#4285F4" />
            <span style={{ color: '#fff' }}>GCP VM</span>
          </div>
          <div className="skill-item">
            <SiNginx className="skill-icon" color="#009639" />
            <span style={{ color: '#fff' }}>nginx</span>
          </div>
          <div className="skill-item">
            <FaSync className="skill-icon" color="#ffd700" />
            <span style={{ color: '#fff' }}>무중단 배포</span>
          </div>
          <div className="skill-item">
            <SiN8N className="skill-icon" color="#EA4B71" />
            <span style={{ color: '#fff' }}>n8n</span>
          </div>
          <div className="skill-item">
            <FaChrome className="skill-icon" color="#4285F4" />
            <span style={{ color: '#fff' }}>Chrome Extension MV3</span>
          </div>
          <div className="skill-item">
            <SiPlaywright className="skill-icon" color="#2EAD33" />
            <span style={{ color: '#fff' }}>Playwright / CDP</span>
          </div>
          <div className="skill-item">
            <SiSwift className="skill-icon" color="#F05138" />
            <span style={{ color: '#fff' }}>Swift (macOS)</span>
          </div>
        </div>
      </SkillSection>
    </Content>
  </Container>
);

export default Skills;