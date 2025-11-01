import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222;
  padding: 30px 20px 20px calc(17vw + 20px);  /* ✅ 데스크탑 - 위쪽 패딩 증가 */
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: calc(17vw + 20px);  /* ✅ 동일 여백 */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: calc(23vw + 20px);  /* ✅ 태블릿 이상 보장 */
  }

  @media (max-width: 480px) {
    padding-left: calc(23vw + 20px);  /* ✅ 모바일에서 겹침 방지 */
  }
`;


const Content = styled.div`
  padding: 0px 30px;
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
`;

const LeftContent = styled(Content)`
  width: 47%;
  border-right: 1px solid #444;
  padding-left: 40px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-left: 40px; /* ✅ 모바일에선 Container가 이미 여백 줌 */
  }
`;


const RightContent = styled(Content)`
  width: 53%;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #ffd700;
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  }

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: clamp(0.85rem, 1.1vw, 1.1rem);
    line-height: 1.6;
  }

  li span {
    font-size: clamp(0.8rem, 0.95vw, 0.95rem);
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
    font-size: clamp(0.8rem, 0.95vw, 0.95rem);
  }
`;

const ProfileImage = styled.img`
  width: 8vw;
  max-width: 120px;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 0 auto 20px;
  }
`;

const About = () => (
  <Container>
    <LeftContent>
      <Section id="about">
        <h2>About Me</h2>
        <ProfileImage src="/images/img.jpg" alt="Jinhee Mok" />
        <p><strong style={{ color: '#ffd700' }}>열정을 불태울 준비가 된 목진희입니다.</strong></p>
        <p>법학 전공과 영어 강사 경력을 통해 사용자 관점에서 문제를 이해하고 맞춤형 해결책을 제시하는 역량을 키웠습니다. 사람들의 문제를 기술로 해결하고자 개발 분야로 전향하여 K-Digital Training과 생성형 AI 개발자 맞춤형 인재 양성과정을 통해 실무 역량을 쌓았습니다.</p>
        <p>FitChecker 프로젝트에서 LLM 기반 <strong style={{ color: '#ffd700' }}>AI 챗봇</strong>을 개발하며 RAG로 영상 추천 정확도를 50% 향상시켰고, WeReview 인턴십에서 <strong style={{ color: '#ffd700' }}>OCR+LLM 파이프라인</strong>을 구축해 <strong style={{ color: '#ffd700' }}>영수증 검수 자동화</strong>를 달성했습니다.</p>
        <p><strong style={{ color: '#ffd700' }}>강점</strong>은 한 번 문제에 빠져들면 해결될 때까지 깊이 파고드는 <strong style={{ color: '#ffd700' }}>집중력</strong>과, 영어 강사로서 키운 <strong style={{ color: '#ffd700' }}>사용자 관점의 개발 철학</strong>입니다. 다만 간혹 모든 경우의 수를 생각하는 경향 때문에 오버엔지니어링을 할 때가 있어, <strong style={{ color: '#ffd700' }}>Simplicity over Complexity</strong>를 항상 마음에 새기고 팀원의 솔직한 의견에 늘 귀 기울이며 균형 잡힌 개발자로 성장하려고 노력하고 있습니다.</p>
        <p>인턴으로써 첫 실무 3개월 만에 비즈니스 성과를 냈고, 복잡한 기술보다 효율적인 알고리즘이 중요하다는 것을 배웠습니다. 사용자의 진짜 문제를 끝까지 해결하는 개발자로서, 성장과 기여를 동시에 실현하며 발전하겠습니다.</p>
      </Section>
    </LeftContent>
    <RightContent>
      <Section id="resume">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong style={{ color: '#ffd700' }}>위리뷰(WeReview) 인턴</strong> (2024.08–2024.10)<br />
            <span>- OCR+LLM 파이프라인 구축: 영수증 처리 자동화 핵심 모듈 개발</span><br />
            <span>- 기술 스택 리서치 및 의사결정: 오픈소스 라이선스·성능 비교 분석</span><br />
            <span>- 프롬프트 엔지니어링: LLM 기반 구조화된 데이터 추출(JSON)</span><br />
          </li>
          <li>
            <strong style={{ color: '#ffd700' }}>(사)한국IT비즈니스진흥협회</strong> (2024.10–2024.12)<br />
            <span>- 인공지능에 관한 이론교육 및 생성형 AI를 이용한 실습</span>
          </li>
          <li>
            <strong style={{ color: '#ffd700' }}>하이미디어아카데미</strong> (2024.10–2024.12)<br />
            <span>- AI 프로젝트 실행 능력: 팀과 협력하여 AI 애플리케이션 설계·개발.</span><br />
            <span>- 팀 협업 및 문제 해결: 다양한 문제를 해결하고 최적 결과 도출.</span>
          </li>
          <li>
            <strong style={{ color: '#ffd700' }}>하이미디어아카데미</strong> (2024.03–2024.09)<br />
            <span>- 풀스택 개발 능력: Spring Boot·Vue.js 기반 프로젝트 진행 및 API 개발.</span><br />
            <span>- 협업 및 버전 관리: GitHub 협업·코드 리뷰 경험 강화.</span>
          </li>
          <li>
            <strong>몬테키즈 영어 강사</strong> (2022.06–2024.02)<br />
            <span>- 개인 맞춤형 교육·자기주도 학습 유도</span>
          </li>
          <li>
            <strong>Pots&amp;pans 영어 강사</strong> (2021.03–2022.05)<br />
            <span>- 몰입 교육 및 학습 성과 관리</span>
          </li>
          <li>
            <strong>JLS (정상어학원) 강사</strong> (2018.08–2020.09)<br />
            <span>- 참여형 수업 설계 및 학부모 소통</span>
          </li>
          <li>
            <strong>전원 어린이집 운영실장</strong> (2015.03–2018.02)<br />
            <span>- 조직 관리·리더십·효율적 운영</span>
          </li>
        </ul>
      </Section>
    </RightContent>
  </Container>
);

export default About;
