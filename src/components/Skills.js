import React from 'react';
import styled from 'styled-components';
import { FaJava, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGit, FaDatabase, FaNodeJs, FaRobot, FaProjectDiagram, FaChartLine, FaUserCheck, FaCode, FaChrome, FaSync } from 'react-icons/fa';
import { SiSpring, SiMysql, SiVuedotjs, SiFlutter, SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiSupabase, SiN8N, SiPlaywright, SiSwift, SiGooglecloud, SiNginx, SiGithubactions } from 'react-icons/si';
import { useLang } from '../lang/LangContext';
import PageShell, { Section, SectionTitle } from './ui/PageShell';
import { color, font, layout } from './ui/tokens';

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 10px 14px;
  color: ${color.text};
  font-size: ${font.size.sm};
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
    <PageShell title={skills.title}>
      {skills.groups.map((group) => (
        <Section key={group.id} id={`${group.id}-skills`}>
          <SectionTitle>{group.title}</SectionTitle>
          <SkillGrid>
            {group.items.map((item) => {
              const [Icon, iconColor] = ICONS[item.id] || [FaCode, color.text];
              return (
                <SkillItem key={item.id}>
                  <Icon size="1.2em" color={iconColor} />
                  <span>{item.label}</span>
                </SkillItem>
              );
            })}
          </SkillGrid>
        </Section>
      ))}
    </PageShell>
  );
};

export default Skills;
