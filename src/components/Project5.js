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
  gap: 20px;
  flex: 1;

  img {
    width: 100%;
    max-width: 550px;
    border: 3px solid #333;
    border-radius: 5px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 250px;
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

const FloatingImage = styled.img`
  float: right;
  width: 300px;
  max-width: 40%;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 50px;
  border: 3px solid #333;
  border-radius: 5px;
  object-fit: contain;

  @media (max-width: 768px) {
    float: none;
    width: 100%;
    max-width: 250px;
    margin: 10px auto;
    display: block;
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

const Project5 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo5.png" alt="Project Logo" />
          <div>
            <h1>We:Review - 영수증 검증 자동화 시스템 (OCR + LLM 기반)</h1>
            <SubHeader>- Solo Project (2024.08 ~ 2024.10): Backend/AI 개발 (1인 프로젝트)</SubHeader>
          </div>
        </Header>

        <HorizontalSection>
          <Section>
            <h3>개발 주요 사항</h3>
            <ul>
              <li>OCR + LLM 기반 영수증 자동 검수</li>
              <li>DBSCAN 이미지 영역 필터링</li>
              <li>처리 시간 85% 단축, 정확도 95% 달성</li>
              <li>DDD + Clean Architecture 적용</li>
            </ul>
          </Section>

          <Section>
            <h3>기술 스택</h3>
            <SkillsList>
              <li>Python 3.10</li>
              <li>FastAPI</li>
              <li>PaddleOCR</li>
              <li>Qwen2.5-7B</li>
              <li>PyTorch</li>
              <li>OpenCV</li>
              <li>DBSCAN</li>
              <li>Pydantic</li>
            </SkillsList>
          </Section>
        </HorizontalSection>

        <ContentSection>
          <ImagesSection>
            <img src="/images/proj5-1.png" alt="System Architecture" />
            <img src="/images/proj5-2.png" alt="Processing Pipeline" />
          </ImagesSection>

          <TextSection>
            <Section>
              <h3>프로젝트 배경</h3>
              <p>
                WeReview는 크리에이터-브랜드 연결 숏폼 리뷰 광고 플랫폼으로, 사용자가 영수증 제출 시 리워드를 지급합니다.
                기존에는 모든 영수증을 수작업으로 검수(1건당 1분)하여 인력 비용과 확장성 한계가 있었습니다.
                본 프로젝트는 영수증 이미지에서 JSON 자동 추출로 처리 시간 85% 단축, 정확도 95% 이상, 무한 확장 가능한 시스템 구축을 목표로 하였습니다.
              </p>
            </Section>

            <Section>
              <h3>핵심 트러블슈팅</h3>
              <p>
                <strong>1. 이미지 영역 필터링 - "2GB ML vs 100줄 DBSCAN"</strong><br/>
                영수증 내 상품 썸네일/로고 텍스트까지 인식되어 LLM 혼란 발생, 정확도 70%에 그쳤습니다.
                PPStructure(정확도 85%, 처리 +5초, 메모리 +1GB)와 ML Classifier(정확도 96%, 로딩 +3초, 메모리 +2GB)를 시도했으나 성능 문제로 제거했습니다.
                최종적으로 DBSCAN 클러스터링 기반 이미지 영역 감지를 적용하여 오인식률 15%에서 2%로, 속도 +50%, 메모리 -3GB, 코드 -30% 달성했습니다.
              </p>
              <p>
                <strong>2. 다양한 영수증 케이스 처리</strong><br/>
                - 세로 긴 영수증(3000x9000px): 슬라이딩 윈도우(tile_h=1800, overlap=240)로 누락률 30%에서 5%로 개선<br/>
                - 다중 페이지 중복: Head-Tail(SequenceMatcher 95%) + DBSCAN 좌표 클러스터링으로 중복 제거율 99%<br/>
                - 온라인+카드 영수증: OCR 레벨 통합 + 3단계 중복 제거(페이지 간/블록 간)로 중복 인식 99%
              </p>
              <p>
                <strong>3. COORDS 포맷 - 토큰 40% 절감</strong><br/>
                LLM에 불필요한 데이터 80% 전송(bbox, confidence 등) 문제를 해결하기 위해 4개 필드만 남긴 COORDS 포맷을 개발했습니다.
                기존 약 800토큰에서 약 480토큰으로 줄여 토큰 -40%, API 비용 -40%, 응답속도 +30% 달성했습니다.
              </p>
              <p>
                <strong>4. DDD + Clean Architecture</strong><br/>
                인수인계 용이, 도메인 확장 가능, 모델 교체 시 최소 수정을 목표로 app(HTTP) / core(비즈니스 로직) / infra(OCR/LLM) 계층을 분리했습니다.
                모델 교체 시 infra/llm/model_loader.py 10여 줄만 수정하면 되며, 리뷰 이미지 검수 기능 추가 시 OCR/LLM 모듈 100% 재사용 가능합니다.
              </p>
            </Section>
          </TextSection>
        </ContentSection>

        <ContentSection>
          <Section>
            <h3>주요 학습 및 성장</h3>
            <p>
              본 프로젝트를 통해 복잡한 솔루션보다 효율적인 알고리즘 선택이 더 중요하다는 것을 확인했습니다.
              2GB ML 모델을 100줄 DBSCAN 코드로 대체하여 메모리 -3GB, 처리 속도 +50%를 달성한 사례가 이를 입증합니다.
            </p>
            <p>
              또한, 설계 단계부터 확장성과 유지보수성을 고려한 결과 모델 교체 30분, 도메인 확장 시 모듈 100% 재사용이 가능했으며,
              이는 초기 설계가 장기적 개발 효율성에 직접적인 영향을 준다는 것을 보여주었습니다.
            </p>
            <p>
              AI/ML 파이프라인 전체를 처음부터 설계하고 구현하며(이미지 전처리 - OCR - 노이즈 필터링(DBSCAN) - 라인 정렬(DBSCAN) - LLM(Few-shot) - 후처리),
              DBSCAN 클러스터링과 같은 알고리즘이 문제 정의에 따라 다양한 용도로 활용될 수 있다는 것을 배웠습니다.
            </p>
          </Section>

          <FloatingImage src="/images/proj5-3.png" alt="Result Screen" style={{ width: '400px', maxWidth: '45%', marginTop: '0' }} />
        </ContentSection>

        <Footer>
          <a href="https://www.wereview.fun/" target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '5px' }} />
            We:Review - 공식 웹사이트
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project5;
