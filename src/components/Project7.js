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

const Project7 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo7.png" alt="Project Logo" />
          <div>
            <h1>brand-tool — 사내 영업 운영 플랫폼</h1>
            <SubHeader>- Solo Project (2026.03 ~ 현재): 풀스택 개발·인프라·운영 (1인, 커밋 전부 본인)</SubHeader>
          </div>
        </Header>

        <HorizontalSection>
          <Section>
            <h3>개발 주요 사항</h3>
            <ul>
              <li>셀러찾기: 인스타그램 셀러 자동 발굴 (직원 PC 분산 워커 + 서버 잡 큐)</li>
              <li>맞춤카톡: 셀러별 판매 이력에 맞춘 상품 카드를 카카오톡으로 대량·예약 발송</li>
              <li>AI 벤더 매칭: RAG + 카테고리 후보 → LLM 판정 → 성사 추적</li>
              <li>제안서 PDF·엑셀 자동 생성, 사내 AI 비서 Spark 화면</li>
            </ul>
          </Section>

          <Section>
            <h3>기술 스택</h3>
            <SkillsList>
              <li>Next.js 16</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS 4</li>
              <li>PostgreSQL 16 + PostgREST</li>
              <li>Vertex AI Gemini 2.5</li>
              <li>n8n</li>
              <li>Playwright</li>
              <li>Vitest</li>
              <li>Docker</li>
              <li>GitHub Actions</li>
              <li>GCP</li>
            </SkillsList>
          </Section>
        </HorizontalSection>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj7-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj7-1.png" alt="brand-tool 시스템 아키텍처 다이어그램" />
            </a>
            <a href="/images/proj7-2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj7-2.png" alt="brand-tool 화면 스크린샷" />
            </a>
          </ImagesSection>

          <TextSection>
            <Section>
              <h3>프로젝트 배경</h3>
              <p>
                영업 직원이 제안서 한 장을 만들려면 구글 시트, 외부 CRM, 노션을 오가며 가격을 손으로 계산했다.
                인스타그램 셀러 발굴도 사람이 해시태그를 하나씩 눌러 리스트를 만들었다.
                이 흩어진 데이터를 한 DB 로 모으는 것에서 시작해, 셀러 발굴·벤더 매칭·카톡 발송까지 한 앱에서 끝나도록 넓혔다.
              </p>
            </Section>

            <Section>
              <h3>규모 (git 실측)</h3>
              <ul>
                <li>커밋 1,502개 · API 라우트 134개 · 화면 33개</li>
                <li>DB 마이그레이션 130개 · 테스트 파일 205개</li>
              </ul>
            </Section>

            <Section>
              <h3>핵심 트러블슈팅</h3>
              <p>
                <strong>1. 인스타가 서버 IP 를 막아 수집이 불가능했던 문제</strong><br/>
                데이터센터 IP 는 차단되니 직원 PC 에서 도는 분산 워커로 설계했다. 화면을 클릭하지 않고 브라우저 안에서 내부 API 를 호출해 직원 작업을 방해하지 않게 했다.
                서버는 잡 큐, 기기 등록, 한 계정 한 PC 규칙, 멈춘 회차 진단·재배치를 맡았고, 직원 PC 에는 DB 키를 주지 않았다.
              </p>
              <p>
                <strong>2. 서버가 살아나자마자 진행 중 작업을 모두 취소한 버그</strong><br/>
                "3분간 안 보인 워커의 작업 취소" 규칙이 서버가 꺼져 있던 시간까지 워커 부재로 셌다.
                정리 함수가 자기 실행 간격을 기록하게 해, 간격이 비면 서버가 없었던 것으로 보고 서버가 3분 연속 살아 있은 뒤에만 취소하도록 고쳤다.
                재현 테스트로 옛 함수 2/2 취소 → 새 함수 0 을 확인했다.
              </p>
              <p>
                <strong>3. 사원 인증 쿠키를 손으로 만들 수 있던 보안 구멍</strong><br/>
                고정 문자열 쿠키 한 줄이면 사원 영역 전체가 열렸다.
                엣지 미들웨어에서 Web Crypto HMAC 서명 + 만료로 교체했다. 비밀값이 없으면 거부하되, 배포 순간 전원이 잠기지 않도록 기존 비밀로 폴백했다.
              </p>
              <p>
                <strong>4. 클라우드 DB 정지 → 코드 수정 없이 자체 호스팅으로 이전</strong><br/>
                클라우드 DB 가 전송량 한도를 넘어 모든 API 가 멈췄다.
                앱이 REST 프로토콜만 쓴다는 것을 코드 전수 검색으로 확인하고, VM 에 같은 모양의 자체 호스팅 스택을 세워 환경변수 교체만으로 당일 복구했다.
                한 달 뒤 호스팅 무료 한도 정지 때도 무중단 교체로 이틀 만에 옮겼다.
              </p>
              <p>
                <strong>5. LLM 벤더 매칭 결과가 요청마다 달라지던 문제</strong><br/>
                30개씩 나눈 청크마다 같은 벤더가 다른 점수를 받고 마지막 값으로 덮였고, 모델이 가끔 항목을 빠뜨렸다.
                최고 점수만 유지하고, 빠진 항목만 좁혀 재질의하도록 고쳤다.
              </p>
            </Section>

            <Section>
              <h3>AI 협업 방식</h3>
              <ul>
                <li>기능마다 설계 문서 → 계획 → 테스트 먼저 → 구현 → 리뷰 순서로 진행했다 (설계·계획 문서 67개).</li>
                <li>"테스트가 초록이어도 배선은 틀릴 수 있다"는 원칙으로, 배포 후 도는 코드의 해시와 실제 화면으로 다시 확인했다.</li>
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

export default Project7;
