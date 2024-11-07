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
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-color: #222;
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 */
  width: calc(100vw - 15vw); /* 사이드바 옆 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바의 최대 너비를 고려한 최대 너비 */
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  @media (max-width: 768px) {
    width: calc(100vw - 180px);
    margin-left: 180px;
    padding: 10vh 20px;
  }
`;

const LeftContent = styled(Content)`
  width: 35%;
  border-right: 1px solid #444;
  padding-left: 50px;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-left: 20px;
  }
`;

const RightContent = styled(Content)`
  width: 65%;
  padding-left: 40px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #ffd700;
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  p {
    line-height: 1.6;
    font-size: 0.8em;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 0.8em;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }
`;

const About = () => (
  <Container>
    <LeftContent>
      <Section id="resume">
        <h2>Experience</h2><br/>
        <ul>
          <li><strong>하이미디어아카데미 </strong> (2024년 10월 – 2024년 12월)<br/>AI 심화 과정을 이수하고 팀 프로젝트로 AI 애플리케이션을 개발했습니다.</li><br/><br/>
          <li><strong>하이미디어아카데미 </strong> (2024년 3월 - 2024년 9월)<br/>풀스택 엔지니어 교육을 이수하고 3개의 프로젝트를 진행했습니다.</li><br/><br/>
          <li><strong>몬테키즈 (MonteKids) 영어 교사</strong> · (2022년 6월 - 2024년 2월)<br/>어학원에서 5세에서 13세의 어린이들에게 영어와 자기주도 학습을 지도했습니다.</li><br/><br/>
          <li><strong>Pots&pans (파츠앤팬스) 영어 교사</strong> · (2021년 3월 - 2022년 5월)<br/>영어 유치원에서 5세에서 13세의 어린이들에게 영어를 가르쳤습니다.</li><br/><br/>
          <li><strong>JLS (정상어학원) 교사</strong> (2018년 8월 - 2020년 9월)<br/>7세에서 16세 학생들을 대상으로 영어 수업을 진행하고 학부모와 소통했습니다.</li><br/><br/>
          <li><strong>전원 어린이집 유치원 코디네이터</strong> · 정규직 (2015년 3월 - 2018년 2월)<br/>교사 채용과 유치원 운영을 총괄했습니다.</li>
        </ul>
      </Section>
    </LeftContent>
    <RightContent>
      <Section id="about">
        <h2>About Me</h2><br/>
        <img src="/images/img.jpg" alt="Jinhee Mok" style={{ width: '120px', height: '170px', marginBottom: '20px', float: 'right', marginTop: '10px', marginLeft: '20px' }} />

        <p>
          안녕하세요, 열정과 끈기로 도전을 두려워하지 않는 개발자 목진희입니다.<br/><br/>
          법학을 전공하며 쌓은 논리적 사고력과 문제 해결 능력은 저의 큰 자산입니다. 이 능력을 바탕으로 사람들과 소통하고 가르치는 일에 대한 열정을 느껴 영어 교육 현장에서 학생들의 성장을 도왔습니다. 이러한 경험은 저에게 소통의 중요성과 목표 달성을 위한 실행력을 길러주었습니다.<br/><br/>
          빠르게 변화하는 사회 속에서 저 역시 기술 분야로 새로운 도전에 나서고자 했고, 소프트웨어 개발에 깊은 흥미를 느끼게 되었습니다. 법학을 통해 체득한 분석력과 교육 경험에서 얻은 소통 능력은 복잡한 문제를 해결하고, 클라이언트와의 협업에서 큰 강점이 될 것이라 확신합니다.<br/><br/>
          단순히 코드를 작성하는 것에 그치지 않고, 문제를 구조적으로 해결하며 시스템의 효율성을 높이는 개발자가 되고자 합니다. 새로운 가치를 창출하고 더 나은 세상을 만드는 데 기여하기 위해 끊임없이 배우고 성장하겠습니다. 함께 일하며 긍정적인 변화를 만들어 나갈 준비가 되어 있습니다.
        </p>
      </Section>
    </RightContent>
  </Container>
);

export default About;
