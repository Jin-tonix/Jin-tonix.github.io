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

const Project8 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo8.png" alt="Project Logo" />
          <div>
            <h1>Email AI Agent — 대표 메일 답장 초안 에이전트</h1>
            <SubHeader>- Solo Project (2026.03 ~ 2026.07, 이후 AI Company OS 플러그인으로 연결): 설계·개발·배포 (1인)</SubHeader>
          </div>
        </Header>

        <HorizontalSection>
          <Section>
            <h3>개발 주요 사항</h3>
            <ul>
              <li>Gmail → n8n → FastAPI 파이프라인 (파싱 → 분류 → 초안 → 검증 → 학습)</li>
              <li>LightRAG 지식 그래프(Neo4j + pgvector) 기반 근거 검색</li>
              <li>LLM-as-Judge 품질 검증 + 아첨·앵무새 답변 검사</li>
              <li>사람이 고친 초안을 다시 학습하는 스타일북 (HITL)</li>
            </ul>
          </Section>

          <Section>
            <h3>기술 스택</h3>
            <SkillsList>
              <li>Python</li>
              <li>FastAPI</li>
              <li>asyncio</li>
              <li>LightRAG</li>
              <li>Neo4j</li>
              <li>PostgreSQL + pgvector</li>
              <li>Vertex AI Gemini 2.5</li>
              <li>Claude</li>
              <li>LiteLLM</li>
              <li>n8n</li>
              <li>Slack</li>
              <li>Docker</li>
              <li>pytest</li>
              <li>Pyright</li>
            </SkillsList>
          </Section>
        </HorizontalSection>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj8-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj8-1.png" alt="Email AI Agent 파이프라인 아키텍처 다이어그램" />
            </a>
          </ImagesSection>

          <TextSection>
            <Section>
              <h3>프로젝트 배경</h3>
              <p>
                대표 메일함에는 브랜드 제휴, 셀러 입점 문의, 협업 제안이 섞여 들어왔다.
                답장은 과거 거래 맥락을 알아야 쓸 수 있어서 대표 한 사람에게 몰렸다.
                목표는 "근거 있는 초안을 먼저 만들어 두고, 대표는 확인만 한다"였다.
              </p>
            </Section>

            <Section>
              <h3>규모 (git 실측)</h3>
              <ul>
                <li>커밋 923개 (2026.03~07)</li>
                <li>Python 약 3.6만 줄</li>
                <li>API 라우터 25개</li>
              </ul>
            </Section>

            <Section>
              <h3>핵심 트러블슈팅</h3>
              <p>
                <strong>1. 평면 벡터 검색으로는 "이 회사가 전에 무엇을 물었나"를 못 찾던 문제</strong><br/>
                v2 에서 LightRAG 지식 그래프를 도입해 회사·담당자·과거 요청을 관계로 묶었다.
                커버리지가 부족하면 질의를 한 번 다시 쓰는 에이전트형 검색을 더했다.
              </p>
              <p>
                <strong>2. 리랭커가 서버 자원을 과하게 쓰던 문제</strong><br/>
                2.2GB 로컬 ONNX 리랭커를 Vertex AI Gemini 리랭킹으로 바꿔 VM 메모리 부담을 없앴다.
              </p>
              <p>
                <strong>3. 행정·물류 확인 메일을 "앵무새 답변"으로 오탐하던 문제</strong><br/>
                검증 프롬프트에 업무 맥락 예외를 넣고, 콜드 메일에도 같은 자가 검증을 적용했다.
              </p>
              <p>
                <strong>4. 외부 폼 구조가 바뀌면 리드 가져오기가 조용히 틀리던 문제</strong><br/>
                원본 필드 JSON 과 CSV 헤더를 대조해 슬롯 이름 불일치를 잡았다.
              </p>
            </Section>

            <Section>
              <h3>AI 협업 방식</h3>
              <ul>
                <li>모든 함수에 타입 힌트, Pyright 에러 0 을 완료 조건으로 두었다.</li>
                <li>보안 교차 검증에서 나온 지적 6건을 배포 전에 모두 반영했다.</li>
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

export default Project8;
