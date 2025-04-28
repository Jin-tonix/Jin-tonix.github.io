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
  padding: 40px 60px;
  box-sizing: border-box;
  margin-left: 15vw;
  width: calc(100vw - 15vw);

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 10vw;
    width: calc(100vw - 10vw);
    padding: 30px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  overflow-y: auto;
  box-sizing: border-box;
`;

const LeftContent = styled(Content)`
  flex: 1;
  padding: 20px 40px;
  border-right: 1px solid #444;

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid #444;
    padding: 20px 0;
  }
`;

const RightContent = styled(Content)`
  flex: 1;
  padding: 20px 40px;

  @media (max-width: 1024px) {
    padding: 20px 0;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;

  h2 {
    margin-bottom: 20px;
    color: #ffd700;
    font-size: 2.2rem;
  }

  p {
    line-height: 2;
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1rem;
    line-height: 1.8;
  }

  li {
    margin-bottom: 15px;
  }

  li span {
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
  }
`;

const ProfileImage = styled.img`
  width: 140px;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 5px;
  margin-left: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100px;
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
          법학 전공과 영어 교육 경험을 바탕으로 논리적 사고력과 소통 능력을 갖춘 개발자입니다.<br /><br />
          K-Digital 프로그램을 통해 Spring Boot와 Vue.js 기반 프로젝트를 수행하며 백엔드·프론트엔드 실무 역량을 쌓았습니다.<br /><br />
          AI 심화 과정에서는 LLM과 RAG 기술을 활용한 프로젝트를 통해 FastAPI, Elasticsearch 기반 검색 기능을 개발했습니다.<br /><br />
          사용자 중심 기능 개발과 팀워크를 중시하며, 꾸준히 성장하는 개발자가 되고자 합니다.
        </p>
      </Section>
    </LeftContent>
    <RightContent>
      <Section id="resume">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>하이미디어아카데미 (2024)</strong><br />
            <span>- AI 프로젝트 설계 및 개발</span><br />
            <span>- 팀 협업 및 문제 해결 역량 강화</span>
          </li>
          <li>
            <strong>몬테키즈 영어 강사 (2022–2024)</strong><br />
            <span>- 맞춤형 교육 설계 및 자기주도 학습 지원</span>
          </li>
          <li>
            <strong>Pots&pans 영어 강사 (2021–2022)</strong><br />
            <span>- 몰입형 교육 및 학습 성과 관리</span>
          </li>
          <li>
            <strong>JLS 강사 (2018–2020)</strong><br />
            <span>- 참여형 커리큘럼 개발 및 학부모 소통</span>
          </li>
          <li>
            <strong>전원 어린이집 부원장 (2015–2018)</strong><br />
            <span>- 조직 관리 및 커뮤니케이션 역량 강화</span>
          </li>
        </ul>
      </Section>
    </RightContent>
  </Container>
);

export default About;
