import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import {
  PageWrapper,
  Container,
  Header,
  SubHeader,
  ContentSection,
  ImagesSection,
  TextSection,
  HorizontalSection,
  Section,
  SkillsList,
  Footer,
} from './ui/CaseStudyKit';
import imgAttrs from './ui/imgAttrs';

const Project4 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo4.png" {...imgAttrs('/images/logo4.png', { eager: true })} alt="Project Logo" />
          <div>
            <h1> FitChecker - 대화를 통해 필요한 운동을 추천해주고, 자세를 잡아주는 AI 기반의 홈트레이닝 앱</h1>
            <SubHeader>- Team Project (2024.11.05 ~ 12.20) : 백앤드 개발 및 Langchain을 이용한 AI agent 개발 및 프론트/백 연결</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj4-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj4-1.png" {...imgAttrs('/images/proj4-1.png')} alt="" />
            </a>
            <a href="/images/proj4-2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj4-2.png" {...imgAttrs('/images/proj4-2.png')} alt="" />
            </a>
            <a href="/images/proj4-3.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj4-3.png" {...imgAttrs('/images/proj4-3.png')} alt="" />
            </a>
          </ImagesSection>

          <TextSection>
            <HorizontalSection>
              <Section>
                <h3>개발 주요 사항</h3>
                <ul>
                  <li>Spring Boot 기반 백엔드 서버 개발</li>
                  <li>FastAPI를 활용한 프론트/백 엔드 연결</li>
                  <li>Langchain을 이용한 AI agent 개발</li>
                  <li>LLM과 RAG를 이용한 추천기능</li>

                </ul>
              </Section>

              <Section>
                <h3>기술 스택</h3>
                <SkillsList>
                  <li>Flutter</li>
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>Firebase</li>
                  <li>Docker</li>
                  <li>Elasticsearch</li>
                  <li>Langchain</li>
                  <li>Mediapipe</li>
                  <li>Gpt 4o-mini</li>
                </SkillsList>
              </Section>
            </HorizontalSection>

            <Section>
              <h3>살펴보기</h3>
              <p>
              FitChecker는 AI 기반 체형 평가와 운동 자세 교정을 통해 혼자 운동할 때 발생하는 자세 교정의 어려움을 해결하고, 사용자 데이터를 분석하여 맞춤형 운동 계획과 식단 추천을 제공합니다. 또한, Agent 기능으로 운동 스케줄 관리와 실시간 자세 감지 화면 자동 실행을 지원하여 스마트한 운동 경험을 제공합니다
              </p>
            </Section>

            <Section>
              <h3>개발 관련 설명</h3>
              <p>
              본 프로젝트에서 LLLM을 활용하여 프롬프트 설정 및 에이전트 설계를 수행하였으며, 이를 통해 챗봇과 음성 기능을 구현하고, 에이전트를 활용한 명령 처리로 사용자가 요청 시 운동 자세 교정 페이지로 자동 연결되는 기능을 개발하였습니다.
              </p>
              <p>
              - AI 기반 모션 감지 모델로 운동 자세를 실시간 분석하며, 교정 정확도 85% 이상 달성.<br/>
              - YouTube API와 RAG를 활용해 질문 연관 영상 추천 정확도를 50% 개선.<br/>
              - 광고와 노이즈 제거 및 코사인 유사도 적용으로 RAG 검색 정확도를 개선.<br/>
              - 챗봇 에이전트를 활용하여 알람 설정 및 페이지 재생 기능으로 사용자 접근성 향상.<br/>
              - 도메인 중심 설계로 의존성을 낮추고, 가독성, 유지보수성을 개선해 협업 효율성 증대.<br/>
              </p>
              <p>
              FitChecker는 RAG 기술을 성공적으로 통합하여, 사용자 맞춤형 운동 분석 및 추천 기능을 제공하며 협업 효율성과 유지보수성을 높였습니다. 다만, WebSocket 기반 실시간 데이터 전송 미구현은 아쉬움으로 남습니다.
              </p>
            </Section>
          </TextSection>
        </ContentSection>

        <Footer>
          <a href="https://github.com/AI-X-main-projext-ITOWE" target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '5px' }} />
            <FaGithub style={{ marginRight: '5px' }} /> FitChecker - GitHub Repository
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project4;
