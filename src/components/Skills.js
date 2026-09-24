import React from 'react';
import styled from 'styled-components';
import { FaJava, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGit, FaDatabase, FaNodeJs, FaRobot, FaProjectDiagram, FaUserCheck, FaCode, FaChrome, FaSync, FaTerminal, FaApple, FaLink, FaImage } from 'react-icons/fa';
import { SiSpring, SiMysql, SiVuedotjs, SiFlutter, SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiSupabase, SiN8N, SiPlaywright, SiSwift, SiGooglecloud, SiNginx, SiGithubactions, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useLang } from '../lang/LangContext';
import PageShell, { SectionTitle } from './ui/PageShell';
import { color, font, layout } from './ui/tokens';

// About 과 같은 한 화면 배치 — 세로 가운데, 넓은 칼럼
const CompactShell = styled(PageShell)`
  align-items: center;

  & > div {
    max-width: 1200px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  header {
    margin-bottom: 36px;
  }
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 96px;
  row-gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: 8px 13px;
  color: ${color.text};
  font-size: ${font.size.sm};
`;

// id 는 언어와 무관한 구조 키 — 아이콘/색은 시각 언어이므로 콘텐츠 파일에 두지 않고 여기서 관리한다.
const ICONS = {
  'llm-agent': [FaRobot, '#ffd700'],
  mcp: [FaProjectDiagram, '#61DAFB'],
  rag: [FaDatabase, '#f29111'],
  litellm: [FaProjectDiagram, '#6DB33F'],
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
  github: [FaGithub, '#E8E8E8'],
  'docker-compose': [FaDocker, '#2496ED'],
  'gh-actions': [SiGithubactions, '#2088FF'],
  gcp: [SiGooglecloud, '#4285F4'],
  nginx: [SiNginx, '#009639'],
  'zero-downtime': [FaSync, '#ffd700'],
  n8n: [SiN8N, '#EA4B71'],
  'chrome-ext': [FaChrome, '#4285F4'],
  playwright: [SiPlaywright, '#2EAD33'],
  swift: [SiSwift, '#F05138'],
  ts: [SiTypescript, '#3178C6'],
  tailwind: [SiTailwindcss, '#38BDF8'],
  powershell: [FaTerminal, '#5391FE'],
  launchd: [FaApple, '#E8E8E8'],
  'docker-swarm': [FaDocker, '#2496ED'],
  langchain: [FaLink, '#1FB8A3'],
  'rag-course': [FaDatabase, '#f29111'],
  'model-pipeline': [FaImage, '#A0A0A0'],
};

const SectionHead = styled.h2`
  color: ${color.text};
  font-size: ${font.size.md};
  font-weight: ${font.weight.subhead};
  border-bottom: 1px solid ${color.line};
  padding-bottom: 8px;
  margin: 0 0 20px;
`;

const SectionBlock = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Skills = () => {
  const { content } = useLang();
  const { skills } = content;

  return (
    <CompactShell title={skills.title} lead={skills.lead}>
      {skills.sections.map((sec) => (
        <SectionBlock key={sec.id}>
          <SectionHead>{sec.title}</SectionHead>
          <GroupGrid>
            {sec.groups.map((group) => (
              <section key={group.id} id={`${group.id}-skills`}>
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
              </section>
            ))}
          </GroupGrid>
        </SectionBlock>
      ))}
    </CompactShell>
  );
};

export default Skills;
