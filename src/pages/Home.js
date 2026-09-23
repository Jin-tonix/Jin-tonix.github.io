// Home — 기존 Profile.js 의 배경 히어로 느낌을 유지하면서 헤드라인 + 서브 + 골드 메트릭 strip 추가
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useLang } from '../lang/LangContext';
import Metrics from '../components/ui/Metrics';

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

const HeroContainer = styled.div`
  background-image: url('/images/img6.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-left: 0;
  width: 100%;
  overflow: hidden;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #ddd;
  line-height: 1.5;
  text-shadow: 1.5px 1.5px 5.5px #333;
  background-color: rgba(0, 0, 0, 0.6);

  .headline, .sub {
    max-width: 70%;
    text-align: center;
  }

  .headline {
    font-size: 1.8em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }

  .sub {
    font-size: 1.2em;
    font-weight: 600;
    color: #ddd;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.9s;
    opacity: 0;
    margin-bottom: 10px;

    .name-highlight {
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

  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;

    .headline {
      font-size: 1.5em;
    }

    .sub {
      font-size: 1.1em;
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;

    .headline {
      font-size: 1.3em;
    }

    .sub {
      font-size: 1em;
    }
  }

  @media (max-width: 480px) {
    margin-left: 0;
    width: 100%;

    .headline {
      font-size: 1.1em;
    }

    .sub {
      font-size: 0.95em;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Home() {
  const { content } = useLang();
  const { hero } = content;

  return (
    <HeroContainer>
      <div className="headline">{hero.headline}</div>
      <div className="sub">{hero.sub}</div>
      <Metrics metrics={hero.metrics} />
    </HeroContainer>
  );
}
