// src/components/Profile.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션 정의
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

const ProfileContainer = styled.div`
  background-image: url('/images/img2.jpg'); /* 절대 경로로 수정 */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 10vh 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 15vw; /* 사이드바 공간을 확보 */

  .intro {
    font-size: 3em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${fadeInUp} 1s ease forwards; /* 첫 번째 애니메이션 */
    animation-delay: 0.5s; /* 지연 시간 */
    opacity: 0; /* 시작 시 숨김 */
  }

  .name-wrapper {
    font-size: 1.5em;
    font-weight: 800;
    color: #ddd;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;

    .name-highlight {
      font-size: 2.5em;
      font-weight: 900;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #ffd700; /* 노란 밑줄 */
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
  }

  .description {
    margin-top: 40px;
    font-size: 1.2em;
    font-weight: 700;
    color: #ddd;
    max-width: 800px;
    line-height: 1.6;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    
    /* 배경과 패딩 추가 */
    background-color: rgba(51, 51, 51, 0.8); /* 약간 투명한 어두운 배경 */
    padding: 10px;
    border-radius: 5px; /* 모서리 둥글게 */
  }

  @media (max-width: 768px) {
    .intro {
      font-size: 1.8em;
    }

    .name-wrapper {
      font-size: 1.8em;

      .name-highlight {
        font-size: 2.5em;
      }
    }

    .description {
      font-size: 1em;
    }
    margin-left: 20vw;
  }
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <div className="intro">소통과 문제 해결, 두 마리 토끼를 잡는 개발자</div>
      <div className="name-wrapper">
        <span className="name-highlight">목진희</span>입니다.
      </div>
      <div className="description">
        법학을 통해 얻은 분석력과 영어교육을 통해 다진 소통 능력은 복잡한 개발 문제 해결과 클라이언트 협업에서 큰 강점입니다. <br />
        개발자로서 단순히 코딩에 그치지 않고, 문제를 구조적으로 해결하고 시스템 효율성을 높이며 가치를 창출하는 데 기여하고자 합니다.
      </div>
    </ProfileContainer>
  );
}
