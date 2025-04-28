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
  min-height: 100vh;
  background-color: #222;
  padding: 20px 40px;
  box-sizing: border-box;
  margin-left: 15vw;
  width: calc(100vw - 15vw);

  @media (max-width: 1024px) {
    flex-direction: column;
    width: calc(100vw - 15vw);
    margin-left: 15vw;
    padding: 15px 10px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 10px 8px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  padding: 8px 15px;
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftContent = styled(Content)`
  width: 47%;
  border-right: 1px solid #444;
  padding-left: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    padding: 10px;
  }
`;

const RightContent = styled(Content)`
  width: 53%;
  padding-right: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;

const Section = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #ffd700;
    font-size: 1.6rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    line-height: 1.7;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  li {
    margin-bottom: 8px;
  }

  li span {
    font-size: 0.85rem;
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
  }
`;

const ProfileImage = styled.img`
  width: 7vw;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 70px;
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
        <p>
          법학 전공을 통해 논리적 사고력과 문제 해결 능력을 갖추었고, 영어 교육 경험으로 소통과 협업 역량을 쌓았습니다.<br /><br />
          이를 바탕으로 사용자 중심의 기능을 개발하며 성장하고자 합니다.<br /><br />
          K-Digital 프로그램에서는 Spring Boot와 Vue.js를 활용해 백엔드 로직과 사용자 인터페이스를 구현하고, RESTful API 개발 및 데이터베이스 연동을 담당했습니다.<br /><br />
          AI 심화 과정에서는 LLM과 RAG 기술을 활용하여 FastAPI 기반 모델 API와 Elasticsearch 검색 기능을 개발했습니다.<br /><br />
          주어진 문제를 해결하고, 사용자와 팀의 요구를 반영하는 개발자로 꾸준히 성장하겠습니다.
        </p>
      </Section>
    </LeftContent>

    <RightContent>
      <Section id="resume">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>하이미디어아카데미</strong> (2024년 10월 – 2024년 12월)<br />
            <span>- <span className="highlight">AI 프로젝트 실행 능력</span> : 팀과 협력하여 AI 애플리케이션을 설계하고 개발.</span><br />
            <span>- <span className="highlight">팀 협업 및 문제 해결</span> : 다양한 문제를 해결하고 목표에 맞춘 최적 결과를 도출.</span>
          </li>

          <li>
            <strong>하이미디어아카데미</strong> (2024년 3월 - 2024년 9월)<br />
            <span>- <span className="highlight">풀스택 개발 능력</span> : Spring Boot, Vue.js 기반 프로젝트 진행 및 API 개발.</span><br />
            <span>- <span className="highlight">협업 및 버전 관리</span> : GitHub를 통한 협업, 코드 리뷰 경험 강화.</span>
          </li>

          <li>
            <strong>몬테키즈 영어 강사</strong> (2022년 6월 - 2024년 2월)<br />
            <span>- <span className="highlight">개인 맞춤형 교육, 자기주도 학습 유도</span></span>
          </li>

          <li>
            <strong>Pots&pans 영어 강사</strong> (2021년 3월 - 2022년 5월)<br />
            <span>- <span className="highlight">몰입 교육 및 학습 성과 관리</span></span>
          </li>

          <li>
            <strong>JLS (정상어학원) 강사</strong> (2018년 8월 - 2020년 9월)<br />
            <span>- <span className="highlight">참여형 수업 설계 및 학부모 소통</span></span>
          </li>

          <li>
            <strong>전원 어린이집 운영실장</strong> (2015년 3월 - 2018년 2월)<br />
            <span>- <span className="highlight">조직 관리, 리더십, 효율적 운영</span></span>
          </li>
        </ul>
      </Section>
    </RightContent>
  </Container>
);

export default About;
