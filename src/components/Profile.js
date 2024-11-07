// src/components/Profile.js
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

const ProfileContainer = styled.div`
  background-image: url('/images/img2.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  overflow: hidden;

  .intro, .name-wrapper, .description {
    max-width: 70%;
  }

  .intro {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2.3em;
    font-weight: 800;
    color: #ddd;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;

    .name-highlight {
      font-size: 2em;
      font-weight: 900;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #ffd700;
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
    text-shadow: 1px 1px 5px #333;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6); /* 배경색 추가 */
    padding: 10px; /* 텍스트와 배경 경계 사이 여백 추가 */
    border-radius: 10px; /* 경계선 둥글게 처리 */
  }

  @media (max-width: 768px) {
    width: calc(100vw - 180px); /* 작은 화면에서는 더 작은 사이드바 공간 제외 */
    margin-left: 180px;
    padding: 10vh 20px;

    .intro {
      font-size: 2em;
    }

    .name-wrapper {
      font-size: 1.2em;

      .name-highlight {
        font-size: 2em;
      }
    }

    .description {
      font-size: 1em;
    }
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
        법학을 공부하며 얻은 분석력과 영어교육을 하며 다진 소통 능력은<br/> 
        복잡한 개발 문제 해결과 클라이언트 협업에서 큰 강점입니다. <br />
        개발자로서 단순히 코딩에 그치지 않고, 문제를 구조적으로 해결하고<br/> 
        시스템 효율성을 높이며 가치를 창출하는 데 기여하고자 합니다.
      </div>
    </ProfileContainer>
  );
}
