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
  margin-left: 15vw; /* 사이드바의 너비 */
  width: calc(100vw - 15vw); /* 사이드바를 제외한 나머지 공간 */
  
  @media (max-width: 1024px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw); /* 화면 크기에 맞춰 너비 조정 */
  }

  @media (max-width: 768px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);
  }

  @media (max-width: 480px) {
    margin-left: 30vw;
    width: calc(100vw - 30vw);
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
  width: 50%;
  border-right: 1px solid #444;
  padding-left: 30px;

  @media (max-width: 768px) {
    width: 100%; /* 작은 화면에서는 전체 콘텐츠가 차지하도록 */
    border-right: none;
  }
`;

const RightContent = styled(Content)`
  width: 50%;
  padding-right: 10px; /* 오른쪽 여백을 적게 설정 */

  @media (max-width: 768px) {
    width: 100%; /* 작은 화면에서는 전체 콘텐츠가 차지하도록 */
    padding-right: 10px; /* 작은 화면에서 여백 설정 */
  }
`;

const Section = styled.div`
  margin-bottom: 15px;

  h2 {
    margin-bottom: 2px;
    color: #ffd700;
    font-size: 1.5em;
  }

  p {
    line-height: 1.6;
    font-size: 0.8em;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 0.8em;
  }

  li span {
    font-size: 0.9em;
    color: #ccc;
  }

  .strong-highlight {
    font-weight: bolder;
    font-size: 1.3em;
  }
`;

const About = () => (
  <Container>
    <LeftContent>
      <Section id="resume">
        <h2>Experience</h2><br />
        <ul>
          <li>
            <strong>하이미디어아카데미</strong> (2024년 10월 – 2024년 12월)
            <br />
            <span>- AI 심화 과정을 이수하고 팀 프로젝트로 AI 애플리케이션을 개발.</span>
          </li>
          <br /><br />
          <li>
            <strong>하이미디어아카데미</strong> (2024년 3월 - 2024년 9월)
            <br />
            <span>- 정부 지원 "K-Digital" 프로그램에서 풀스택 엔지니어 교육 이수.<br/> 
              - 프론트엔드와 백엔드 개발 역량을 습득하고, GitHub로 3개 프로젝트 협업 진행.</span>
          </li>
          <br /><br />
          <li>
            <strong>몬테키즈 (MonteKids) 영어 강사</strong> · (2022년 6월 - 2024년 2월)
            <br />
            <span>- 몬테소리 기반 학원에서 영어를 지도하며 자기주도 학습, 집중력, 예의 및 인내심을 기르도록 교육함. <br />
              - 학생들에게 긍정적인 롤 모델이 되어 전인적 성장을 지원함. 주 2회 학부모 상담을 통해 학생의 발전 상황을 공유하고 일관된 성장을 유도함.</span>
          </li>
          <br /><br />
          <li>
            <strong>Pots&pans (파츠앤팬스) 영어 강사</strong> · (2021년 3월 - 2022년 5월)
            <br />
            <span>- 영어유치원에서 영어를 지도하며 긍정적인 롤 모델로 학생들의 다양한 성장을 지원함. <br />
            - 주 2회 학부모 상담을 통해 학생 성과와 발전 방향을 논의하며 지속적인 성장 유도.</span>
          </li>
          <br /><br />
          <li>
            <strong>JLS (정상어학원) 강사</strong> (2018년 8월 - 2020년 9월)
            <br />
            <span>- 학생 참여를 높이는 30:70 규칙을 적용해 영어 수업을 진행하고, 흥미로운 교안 개발. <br />
            - 학생 성장을 독려하며, 매월 학부모와의 소통을 통해 성과를 공유함.</span>
          </li>
          <br /><br />
          <li>
            <strong>전원 어린이집 유치원 부원장</strong> · 정규직 (2015년 3월 - 2018년 2월)
            <br />
            <span>- 교사 채용, 연간 커리큘럼 및 행사 기획 총괄. <br />
            - 학부모 및 운영위원회 소통 창구 역할 수행, 유치원 운영 관리.</span>
          </li>
        </ul>
      </Section>
    </LeftContent>
    <RightContent>
      <Section id="about">
        <h2>About Me</h2><br />
        <img src="/images/img.jpg" alt="Jinhee Mok" style={{ width: '120px', height: '170px', marginBottom: '20px', float: 'right', marginTop: '10px', marginLeft: '20px' }} />
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
