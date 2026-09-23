import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaJava, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGit, FaDatabase, FaNodeJs, FaRobot, FaProjectDiagram, FaChartLine, FaUserCheck, FaCode, FaChrome, FaSync } from 'react-icons/fa';
import { SiSpring, SiMysql, SiVuedotjs, SiFlutter, SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiSupabase, SiN8N, SiPlaywright, SiSwift, SiGooglecloud, SiNginx, SiGithubactions } from 'react-icons/si';
import { useLang } from '../lang/LangContext';

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
  align-items: center;
  justify-content: center;
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
  text-align: left;

  h2 {
    color: #ffd700;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: left;
    margin-left: 0;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
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

// id 는 언어와 무관한 구조 키 — 아이콘/색은 시각 언어이므로 콘텐츠 파일에 두지 않고 여기서 관리한다.
const ICONS = {
  'llm-agent': [FaRobot, '#ffd700'],
  mcp: [FaProjectDiagram, '#61DAFB'],
  rag: [FaDatabase, '#f29111'],
  litellm: [FaProjectDiagram, '#6DB33F'],
  langfuse: [FaChartLine, '#F7DF1E'],
  hitl: [FaUserCheck, '#E34F26'],
  'claude-code': [FaCode, '#DE7356'],
  java: [FaJava, '#007396'],
  spring: [SiSpring, '#6DB33F'],
  mysql: [SiMysql, '#4479A1'],
  jpa: [FaDatabase, '#f29111'],
  python: [SiPython, '#3776AB'],
  nextjs: [SiNextdotjs, '#fff'],
  node: [FaNodeJs, '#339933'],
  fastapi: [SiFastapi, '#009688'],
  postgres: [SiPostgresql, '#4169E1'],
  supabase: [SiSupabase, '#3ECF8E'],
  html: [FaHtml5, '#E34F26'],
  css: [FaCss3Alt, '#1572B6'],
  js: [FaJs, '#F7DF1E'],
  vue: [SiVuedotjs, '#4FC08D'],
  react: [FaReact, '#61DAFB'],
  flutter: [SiFlutter, '#02569B'],
  docker: [FaDocker, '#2496ED'],
  git: [FaGit, '#F05032'],
  github: [FaGithub, '#181717'],
  'docker-compose': [FaDocker, '#2496ED'],
  'gh-actions': [SiGithubactions, '#2088FF'],
  gcp: [SiGooglecloud, '#4285F4'],
  nginx: [SiNginx, '#009639'],
  'zero-downtime': [FaSync, '#ffd700'],
  n8n: [SiN8N, '#EA4B71'],
  'chrome-ext': [FaChrome, '#4285F4'],
  playwright: [SiPlaywright, '#2EAD33'],
  swift: [SiSwift, '#F05138'],
};

const Skills = () => {
  const { content } = useLang();
  const { skills } = content;

  return (
    <Container>
      <Content>
        {skills.groups.map((group) => (
          <SkillSection key={group.id} id={`${group.id}-skills`}>
            <h2>{group.title}</h2>
            <div className="skills">
              {group.items.map((item) => {
                const [Icon, color] = ICONS[item.id] || [FaCode, '#fff'];
                return (
                  <div className="skill-item" key={item.id}>
                    <Icon className="skill-icon" color={color} />
                    <span style={{ color: '#fff' }}>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </SkillSection>
        ))}
      </Content>
    </Container>
  );
};

export default Skills;
