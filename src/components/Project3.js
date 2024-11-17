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
    max-height: 100px; /* 이미지의 최대 높이 설정 */
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 90px; /* 작은 화면에서 높이 조정 */
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
    max-height: 180px; /* 이미지의 최대 높이 설정 */
    border: 3px solid #333;
    border-radius: 5px;
    float: right;
    margin-left: 20px;
    margin-bottom: 10px;
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
                  <li>다양한 AI모델의 적용</li>
                </ul>
              </Section>

              <Section>
                <h3>기술 스택</h3>
                <SkillsList>
                  <li>FastAPI</li>
                  <li>Pytorch</li>
                  <li>Python</li>
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
                  - EasyOCR의 민감도를 해결하고 Tesseract로 전환.<br/>
                  - Transformers 요약 모델의 한계를 eenzeenee/t5-base로 해결.<br/>
                  - mbart 모델의 번역 품질 문제를 facebook/nllb로 업그레이드.<br/>
                  - gTTS로 간단한 음성 변환 구현, 대용량 처리 한계 인지.<br/>
                </p>
                <p>
                다양한 AI 기술을 통합하며 모델 선택과 한계를 이해하는 배움의 기회를 얻었고, 사용자 경험 향상을 위한 개선 방향을 고민했습니다. 번역시 언어를 선택해야 했는데 대상 언어 자동 감지 기능을 도입하고, LLM 모델을 활용했다면 더 효율적인 결과물을 도출했을 것이라는 아쉬움이 남습니다.
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
