import React from 'react';

import styled from 'styled-components';

const PageWrapper = styled.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 15vw;
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.6em, 1vw, 1em);
  max-height: 100vh;
  overflow: auto;
  padding-left: 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px);
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em);
    font-weight: bold;
    color: #ffd700;
  }
`;

const SubHeader = styled.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`;

const ContentSection = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  a {
    display: block;
  }

  img {
    width: 100%;
    max-width: 640px;
    border: 3px solid #333;
    border-radius: 5px;
    object-fit: contain;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 280px;
    }
  }
`;

const TextSection = styled.div`
  flex: 2.5;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HorizontalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Section = styled.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul {
      font-size: 0.8em;
    }
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Footer = styled.footer`
  width: 100%;
  text-align: left;
  font-size: 0.9em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Project6 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo6.png" alt="Project Logo" />
          <div>
            <h1>StyleSeller AI Company OS — 사내 AI 에이전트 플랫폼</h1>
            <SubHeader>- Solo Project (2026.05 ~ 현재): 설계·개발·인프라·운영 (1인)</SubHeader>
          </div>
        </Header>

        <HorizontalSection>
          <Section>
            <h3>개발 주요 사항</h3>
            <ul>
              <li>AI 에이전트 조직 구성: CEO 에이전트 아래 CS·콘텐츠·광고·캠페인 팀 에이전트 20여 개</li>
              <li>사내 AI 비서 Spark: 전사 지식 질의, 출처 인용, 승인 기반 실행 제안</li>
              <li>MCP 서버 3종 직접 개발 (지식 검색 RAG, Google Workspace, 플랫폼 제어)</li>
              <li>Python 에이전트 서비스 46개 + Docker Compose 로 GCP VM 한 대에서 운영</li>
            </ul>
          </Section>

          <Section>
            <h3>기술 스택</h3>
            <SkillsList>
              <li>TypeScript</li>
              <li>Node.js/Express</li>
              <li>React</li>
              <li>PostgreSQL(Drizzle)</li>
              <li>Python/FastAPI</li>
              <li>MCP</li>
              <li>LiteLLM</li>
              <li>Gemini 2.5</li>
              <li>Claude(Claude Code)</li>
              <li>LightRAG + Neo4j</li>
              <li>Langfuse</li>
              <li>n8n</li>
              <li>Docker Compose</li>
              <li>GitHub Actions</li>
              <li>GCP</li>
            </SkillsList>
          </Section>
        </HorizontalSection>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj6-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj6-1.png" alt="AI Company OS 시스템 아키텍처 다이어그램" />
            </a>
            <a href="/images/proj6-2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj6-2.png" alt="AI 에이전트 조직도 다이어그램" />
            </a>
          </ImagesSection>

          <TextSection>
            <Section>
              <h3>프로젝트 배경</h3>
              <p>
                StyleSeller 는 인력 20명 규모의 패션 커머스 회사다. CS, 벤더 응대, 콘텐츠 제작, 광고 운영이 모두 사람 손으로 돌아갔다.
                처음 계획은 Temporal·LangGraph·LiteLLM·MCP 를 모두 갖춘 5계층 스택이었다. 하지만 인프라만 깔리고 실제로 일하는 에이전트는 0개였다.
                그래서 방향을 "이미 있는 자산(이메일 에이전트, 인스타 DM 봇, n8n)을 먼저 연결한다"로 바꿨다.
                오픈소스 에이전트 조직 플랫폼 Paperclip 을 fork 해 업무 추적·예산·승인을 그대로 쓰고, 그 위에 회사 전용 에이전트와 도구를 얹었다.
              </p>
            </Section>

            <Section>
              <h3>규모 (git 실측)</h3>
              <ul>
                <li>본인 커밋 4,316개 (merge 제외, 2026.05~09)</li>
                <li>에이전트 서비스 46개, MCP 서버 3개, 플러그인 2개 (email-agent 대시보드, IG DM 관제)</li>
                <li>설계 문서 56개 · 실행 계획 100개 · 테스트 파일 약 500개</li>
              </ul>
            </Section>

            <Section>
              <h3>핵심 트러블슈팅</h3>
              <p>
                <strong>1. 과설계를 버리고 동작하는 구조로 전환</strong><br/>
                계획한 5계층 스택은 구축 비용이 컸고, 5월 시점 실제 에이전트는 0개였다.
                Temporal 은 n8n 트리거 + Paperclip 이슈로, LangGraph 는 Claude Code 에이전트로 대체했다.
                새로 만들기보다 이미 돌아가는 자산을 연결하는 순서로 바꿔, 넉 달 사이 에이전트 20여 개가 조직도에 올라갔다.
              </p>
              <p>
                <strong>2. 벤더 CS 챗봇이 다른 벤더의 거래 조건을 답한 문제 (RAG 교차 누출)</strong><br/>
                30문항 스모크 테스트에서 A 벤더 질문에 B 벤더 개별 조건을 회사 정책처럼 인용했다.
                원인은 대화 기록이 아니라 지식 그래프 구조였다 — 개별 거래가 공용 지식으로 섞여 있었다.
                RAG 워크스페이스 분리, 답변 범위 게이트, 도구 범위 제한을 겹겹이 두어 해결했다.
              </p>
              <p>
                <strong>3. 키워드 필터를 LLM 판정으로 교체</strong><br/>
                정규식 게이트가 메시지를 조용히 막고 LLM 을 건너뛰었고, 막힌 줄도 아무도 몰랐다.
                싼 1차 트리거 뒤에 temperature 0, 5초 제한 LLM 판정을 두고, 실패하면 닫히게(fail-closed) 하고 직원 화면에 이유가 보이게 했다.
              </p>
              <p>
                <strong>4. Claude 장애 시 Gemini 폴백이 빈 답을 내던 문제</strong><br/>
                Gemini 프록시의 멀티턴 function calling 을 복원했다 (tool_calls 복원, tool_call_id 매핑, 타임아웃 정렬).
              </p>
              <p>
                <strong>5. 여러 AI 세션이 동시에 배포할 때의 안전장치</strong><br/>
                VM 전역 배포 락, 커밋 안 된 트리 배포 거부, 마지막 빌드 커밋 기록, 배포 대상 판정 함수 테스트를 갖췄다.
              </p>
            </Section>

            <Section>
              <h3>AI 협업 방식</h3>
              <ul>
                <li>위임: 구현, 테스트 작성, 반복 수정은 Claude Code 세션 여러 개에 나눠 맡겼다.</li>
                <li>직접 판단: 아키텍처 전환, 권한 경계, HITL 기준(환불·VIP·대외 계약은 사람 승인)은 직접 정했다.</li>
                <li>검증: 설계 문서 → 계획 → 테스트 → 적대적 리뷰 → 실기기 확인 순서로 검증했다.</li>
              </ul>
            </Section>
          </TextSection>
        </ContentSection>

        <Footer>
          회사 비공개 저장소 · 수치는 git 기록 기준
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project6;
