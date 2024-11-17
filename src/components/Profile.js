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
  margin-left: 15vw; /* 사이드바와의 간격 */
  width: calc(100vw - 15vw); /* 화면 전체에서 사이드바 너비를 제외한 나머지 사용 */
  overflow: hidden;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #ddd;
  line-height: 1.5;
  text-shadow: 1.5px 1.5px 5.5px #333;
  background-color: rgba(0, 0, 0, 0.6);

  .intro, .name-wrapper, .description {
    max-width: 70%;
    text-align: center;
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
    margin-bottom: 20px;

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

 
  /* 반응형 조정 */
  @media (max-width: 1024px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);

    .intro {
      font-size: 1.5em;
    }

    .name-wrapper {
      font-size: 1.7em;

      .name-highlight {
        font-size: 1.6em;
      }
    }

   
  }

  @media (max-width: 768px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);

    .intro {
      font-size: 1.3em;
    }

    .name-wrapper {
      font-size: 1.5em;

      .name-highlight {
        font-size: 1.4em;
      }
    }

  
  }

  @media (max-width: 480px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);


    .intro {
      font-size: 1.1em;
    }

    .name-wrapper {
      font-size: 1.5em;

      .name-highlight {
        font-size: 1.5em;
      }
    }

  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <div className="intro">소통과 문제 해결, 두 마리 토끼를 잡는 개발자</div>
      <div className="name-wrapper">
        <span className="name-highlight">목진희</span>입니다.
      </div>
    </ProfileContainer>
  );
}
