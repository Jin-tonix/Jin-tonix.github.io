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
  padding: 5px 20px;
  box-sizing: border-box;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  
  @media (max-width: 1024px) {
    width: calc(100vw - 15vw);
  }

  @media (max-width: 768px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  padding: 10px 30px;
  animation: ${fadeInUp} 1s ease;
  color: #fff;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftContent = styled(Content)`
  width: 53%;
  border-right: 1px solid #444;
  padding-left: 30px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

const RightContent = styled(Content)`
  width: 47%;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 2px;
    color: #ffd700;
    font-size: 1.5vw;
  }

  p {
    line-height: 1.9;
    font-size: 1vw;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1vw;
  }

  li span {
    font-size: 0.9vw;
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
  }
`;

const ProfileImage = styled.img`
  width: 8vw;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 15vw;
  }

  @media (max-width: 480px) {
    width: 15vw;
  }
`;

const About = () => (
  <Container>
    <LeftContent>
      <Section id="resume">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>하이미디어아카데미</strong> (2024년 10월 – 2024년 12월)
            <br />
            <span>- <span className="highlight">AI 프로젝트 실행 능력</span>: AI 심화 과정에서 팀과 협력하여 AI 애플리케이션을 설계하고 개발.</span><br/>
            <span>- <span className="highlight">팀 협업 및 문제 해결</span>: 다양한 문제를 해결하고 목표에 맞춘 최적의 결과를 도출하며 협업.</span>
          </li>
          <br />
          <li>
            <strong>하이미디어아카데미</strong> (2024년 3월 - 2024년 9월)
            <br />
            <span>- <span className="highlight">풀스택 개발 능력</span>: "K-Digital" 프로그램을 통해 풀스텍 기술을 습득 및 개발 역량을 강화.</span><br/>
            <span>- <span className="highlight">협업 및 버전 관리</span>: GitHub를 통해 프로젝트를 협업하며 버전 관리, 코드 리뷰 경험을 쌓아 효율적인 팀워크를 실현.</span>
          </li>
          <br />
          <li>
            <strong>몬테키즈 (MonteKids) 영어 강사</strong> (2022년 6월 - 2024년 2월)
            <br />
            <span>- <span className="highlight">개인 맞춤형 교육 및 자기주도 학습 유도</span>: 몬테소리 교육 철학을 적용하여 학생의 자기주도 학습을 유도하고 개별 맞춤형 교육 진행.</span><br/>
            <span>- <span className="highlight">성과 관리 및 커뮤니케이션 능력</span>: 주 2회 학부모 상담을 통해 학생 성과와 발전 상황을 공유하며 학습 방향을 제시 및 신뢰 관계 구축.</span>
          </li>
          <br />
          <li>
            <strong>Pots&pans (파츠앤팬스) 영어 강사</strong> (2021년 3월 - 2022년 5월)
            <br />
            <span>- <span className="highlight">성과 피드백 및 몰입 교육 역량</span>: 영어 몰입 교육을 통해 학생들의 인지적, 사회적 성장을 지원하고 학습 성과를 강화.</span><br/>
            <span>- <span className="highlight">효율적 성과 관리</span>: 주 2회 학부모 상담으로 학습 목표와 성과를 구체화하여 학생의 성장을 체계적으로 관리.</span>
          </li>
          <br />
          <li>
            <strong>JLS (정상어학원) 강사</strong> (2018년 8월 - 2020년 9월)
            <br />
            <span>- <span className="highlight">참여 중심의 수업 설계 및 커리큘럼 개발</span>: 학생 참여를 극대화하는 30:70 수업 방식으로 교안을 개발해 교육의 효과성을 높이고, 학습 동기를 강화함.</span><br/>
            <span>- <span className="highlight">성과 공유 및 학부모 소통 역량</span>: 학부모와의 소통으로 학생 성취도와 발전 상황을 공유하며 학습 성과를 지속적으로 독려.</span>
          </li>
          <br />
          <li>
            <strong>전원 어린이집 유치원 부원장</strong> (2015년 3월 - 2018년 2월)
            <br />
            <span>- <span className="highlight">조직 관리 및 리더십 역량</span>: 교사 채용, 연간 커리큘럼 및 행사 기획을 총괄하며 팀을 이끌고 원을 운영하는 관리 역량 발휘.</span><br/>
            <span>- <span className="highlight">효율적 운영 및 커뮤니케이션 역량</span>: 학부모와 원간의 소통 창구 역할을 하며 교육 품질을 향상시키고 효율적인 운영 환경 조성.</span>
          </li>
        </ul>
      </Section>
    </LeftContent>
    <RightContent>
      <Section id="about">
        <h2>About Me</h2>
        <ProfileImage src="/images/img.jpg" alt="Jinhee Mok" />
        <p>
          안녕하세요, 열정과 끈기로 도전을 두려워하지 않는 개발자 목진희입니다.<br /><br />
          법학을 전공하며 쌓은 논리적 사고력과 문제 해결 능력은 저의 큰 자산입니다. 이 능력을 바탕으로 사람들과 소통하고 가르치는 일에 대한 열정을 느껴 영어 교육 현장에서 학생들의 성장을 도왔습니다. 이러한 경험은 저에게 소통의 중요성과 목표 달성을 위한 실행력을 길러주었습니다.<br /><br />
          빠르게 변화하는 사회 속에서 저 역시 기술 분야로 새로운 도전에 나서고자 했고, 소프트웨어 개발에 깊은 흥미를 느끼게 되었습니다. 법학을 통해 체득한 분석력과 교육 경험에서 얻은 소통 능력은 복잡한 문제를 해결하고, 클라이언트와의 협업에서 큰 강점이 될 것이라 확신합니다.<br /><br />
          단순히 코드를 작성하는 것에 그치지 않고, 문제를 구조적으로 해결하며 시스템의 효율성을 높이는 개발자가 되고자 합니다. 새로운 가치를 창출하고 더 나은 세상을 만드는 데 기여하기 위해 끊임없이 배우고 성장하겠습니다. 함께 일하며 긍정적인 변화를 만들어 나갈 준비가 되어 있습니다.
        </p>
      </Section>
    </RightContent>
  </Container>
);

export default About;
