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
  padding: 40px 20px 40px calc(17vw + 20px);  /* ✅ 데스크탑 */
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
  padding: 10px 30px;
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
-   padding-left: 0;
+   padding-left: 20px; /* ✅ Experience 섹션과 비슷한 간격 */
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
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    line-height: 1.7;
  }

  li span {
    font-size: clamp(0.85rem, 1vw, 1rem);
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
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
        <p>법학 전공을 통해 논리적 사고력과 문제 해결 능력을 갖추었고, 영어 교육 경험으로 소통과 협업 역량을 쌓았습니다.</p>
        <p>이를 바탕으로 사용자 중심의 기능을 개발하며 성장하고자 합니다.</p>
        <p>K-Digital 프로그램에서는 Spring Boot와 Vue.js를 활용해 백엔드 로직과 사용자 인터페이스를 구현하고, RESTful API 개발 및 데이터베이스 연동을 담당했습니다.</p>
        <p>AI 심화 과정에서는 LLM과 RAG 기술을 활용하여 FastAPI 기반 모델 API와 Elasticsearch 검색 기능을 개발했습니다.</p>
        <p>주어진 문제를 해결하고, 사용자와 팀의 요구를 반영하는 개발자로 꾸준히 성장하겠습니다.</p>
      </Section>
    </LeftContent>
    <RightContent>
      <Section id="resume">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>하이미디어아카데미</strong> (2024.10–2024.12)<br />
            <span>- <span className="highlight">AI 프로젝트 실행 능력</span>: 팀과 협력하여 AI 애플리케이션 설계·개발.</span><br />
            <span>- <span className="highlight">팀 협업 및 문제 해결</span>: 다양한 문제를 해결하고 최적 결과 도출.</span>
          </li>
          <li>
            <strong>하이미디어아카데미</strong> (2024.03–2024.09)<br />
            <span>- <span className="highlight">풀스택 개발 능력</span>: Spring Boot·Vue.js 기반 프로젝트 진행 및 API 개발.</span><br />
            <span>- <span className="highlight">협업 및 버전 관리</span>: GitHub 협업·코드 리뷰 경험 강화.</span>
          </li>
          <li>
            <strong>몬테키즈 영어 강사</strong> (2022.06–2024.02)<br />
            <span>- <span className="highlight">개인 맞춤형 교육·자기주도 학습 유도</span></span>
          </li>
          <li>
            <strong>Pots&amp;pans 영어 강사</strong> (2021.03–2022.05)<br />
            <span>- <span className="highlight">몰입 교육 및 학습 성과 관리</span></span>
          </li>
          <li>
            <strong>JLS 강사</strong> (2018.08–2020.09)<br />
            <span>- <span className="highlight">참여형 수업 설계 및 학부모 소통</span></span>
          </li>
          <li>
            <strong>전원 어린이집 운영실장</strong> (2015.03–2018.02)<br />
            <span>- <span className="highlight">조직 관리·리더십·효율적 운영</span></span>
          </li>
        </ul>
      </Section>
    </RightContent>
  </Container>
);

export default About;
