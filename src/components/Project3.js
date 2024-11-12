import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';

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
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
    }
  }
`;

const TextSection = styled.div`
  flex: 2.5;

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

const SideBySideSection = styled.div`
  margin-top: 20px;

  img {
    width: 45%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
    float: right; /* 이미지가 오른쪽에 위치하도록 설정 */
    margin-left: 20px; /* 텍스트와 이미지 사이의 간격 조정 */
    margin-bottom: 10px; /* 이미지 아래 여백을 최소화 */
  }

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p {
    font-size: 0.9em;
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
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

  a {
    color: #ffd700;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Project3 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo3.png" alt="Project Logo" />
          <div>
            <h1>Briefify - 이미지 문서나 텍스트 문서의 번역 및 요약을 지원하는 AI 기반의 웹 서비스 개발</h1>
            <SubHeader>- Team Project (2024.10.25 ~ 11.04): 프론트 MyPage 및 AI 모델 검색</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <img src="/images/proj3-2.png" alt="홈" />
            <img src="/images/proj3-1.png" alt="요약하기" />
            <img src="/images/proj3-6.png" alt="마이페이지" />
            <img src="/images/proj3-5.png" alt="마이페이지" />
          </ImagesSection>

          <TextSection>
            <HorizontalSection>
              <Section>
                <h3>개발 주요 사항</h3>
                <ul>
                  <li>React를 이용한 프론트엔드 서버 개발</li>
                  <li>Python을 이용한 백엔드 서버 개발</li>
                  <li>FastAPI를 이용해 프론트와 백 연결</li>
                  <li>다양한 AI모델의 적용</li>
                </ul>
              </Section>

              <Section>
                <h3>기술 스택</h3>
                <SkillsList>
                  <li>FastAPI</li>
                  <li>Pytorch</li>
                  <li>Python</li>
                  <li>Nginx</li>
                  <li>React</li>
                  <li>Docker</li>
                </SkillsList>
              </Section>
            </HorizontalSection>

            <Section>
              <h3>살펴보기</h3>
              <p>
                Briefify는 필요한 정보만 빠르게 요약하여 제공함으로써 업무 효율을 극대화하는 AI 기반 요약 서비스입니다. 개발자, 연구원, 비즈니스 전문가 등 방대한 정보를 다루는 직군을 위해 설계된 Briefify는 이미지나 텍스트 자료를 분석하여 핵심만 뽑아냅니다.
              </p>
            </Section>

            <SideBySideSection>
              <img src="/images/proj3-4.png" alt="AI 모델" />
              <div>
                <h3>개발 관련 설명</h3>
                <p>
                  프로젝트에서 프론트 마이페이지와 AI 모델 검색 기능을 구현하였습니다. 요약본을 저장할 때는 제목과 함께 저장하여 사용자가 후에 쉽게 찾을 수 있도록 하였고, 여러 AI 모델을 테스트하며 최적의 모델을 선정하였습니다.
                </p>
                <p>
                  이미지 파일의 텍스트 추출에는 OCR 기반으로 웹 프레임워크와의 연동이 간편한 pytesseract를 활용하였으며, 텍스트 번역에는 빠른 속도와 언어 간 문맥 이해력이 뛰어난 facebook/nllb-200-distilled-600M을 적용했습니다. 텍스트 요약에는 한국어에 특화되고 Transformer 아키텍처로 전후 관계를 파악하는 eenzeenee/t5-base-korean-summarization을, 음성 지원에는 빠르게 음성 파일을 생성하는 gtts를 사용했습니다.
                </p>
                <p>
                  이번 프로젝트에서 다양한 AI 모델을 탐색하고 직접 연동해 볼 수 있었던 좋은 경험이었습니다. 다만, 프로젝트 종료 후에는 LLM 모델을 사용했더라면 더 가볍고 빠르게 구현할 수 있었을 것이라는 아쉬움이 남습니다.
                </p>
              </div>
            </SideBySideSection>
          </TextSection>
        </ContentSection>

        <Footer>
          <a href="https://github.com/AI-X-min-projext-ITOWE" target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '5px' }} />
            <FaGithub style={{ marginRight: '5px' }} /> Briefify - GitHub Repository
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project3;
