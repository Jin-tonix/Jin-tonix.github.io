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
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 설정 */
  width: calc(100vw - 15vw); /* 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바의 최대 너비를 고려한 최대 너비 */
  overflow: hidden;

  .intro, .name-wrapper, .description {
    max-width: 70%;
  }

  .intro {
    font-size: 1.8em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;

    .name-highlight {
      font-size: 1.8em;
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
    font-size: 1.1em;
    font-weight: 700;
    color: #ddd;
    max-width: 800px;
    line-height: 1.5;
    text-shadow: 1px 1px 5px #333;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-left: 180px;
    width: calc(100vw - 180px);

    .intro {
      font-size: 1.5em;
    }

    .name-wrapper {
      font-size: 1.5em;
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
