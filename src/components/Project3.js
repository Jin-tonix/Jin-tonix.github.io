import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';
import { color } from './ui/tokens';
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

const SideBySideSection = styled.div`
  margin-top: 20px;

  a {
    float: right;
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  img {
    width: 45%;
    max-width: 250px;
    border: 1px solid ${color.line};
    border-radius: 8px;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    a {
      float: none;
      display: flex;
      justify-content: center;
      margin: 0 auto 10px;
    }

    img {
      width: auto;
      max-width: 220px;
    }
  }

  h3 {
    font-size: 1em;
    color: ${color.gold};
  }

  p {
    font-size: 0.9em;
  }
`;

const Project3 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo3.png" {...imgAttrs('/images/logo3.png', { eager: true })} alt="Project Logo" />
          <div>
            <h1>Briefify - 이미지 문서나 텍스트 문서의 번역 및 요약을 지원하는 AI 기반의 웹 서비스 개발</h1>
            <SubHeader>- Team Project (2024.10.25 ~ 11.04): 프론트 MyPage 및 AI 모델 검색</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj3-2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj3-2.png" {...imgAttrs('/images/proj3-2.png')} alt="홈" />
            </a>
            <a href="/images/proj3-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj3-1.png" {...imgAttrs('/images/proj3-1.png')} alt="요약하기" />
            </a>
            <a href="/images/proj3-6.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj3-6.png" {...imgAttrs('/images/proj3-6.png')} alt="마이페이지" />
            </a>
            <a href="/images/proj3-5.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj3-5.png" {...imgAttrs('/images/proj3-5.png')} alt="마이페이지" />
            </a>
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
              <a href="/images/proj3-4.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/proj3-4.png" {...imgAttrs('/images/proj3-4.png')} alt="AI 모델" />
              </a>
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
