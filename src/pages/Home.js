// Home — 기존 Profile.js 의 배경 히어로 느낌을 유지하면서 헤드라인 + 서브 + 골드 메트릭 strip 추가
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useLang } from '../lang/LangContext';
import Metrics from '../components/ui/Metrics';
import { color, font } from '../components/ui/tokens';

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
  background-image: linear-gradient(rgba(20, 20, 20, 0.15), rgba(20, 20, 20, 0.35)),
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: ${color.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 56px 20px;
  box-sizing: border-box;
  line-height: 1.5;
  text-shadow: 1.5px 1.5px 5.5px #000;
  background-color: rgba(0, 0, 0, 0.6);

  .headline,
  .sub {
    max-width: 640px;
    text-align: center;
    word-break: keep-all;
  }

  .sub {
    max-width: 760px;
  }

  .headline {
    font-size: ${font.size.xxl};
    font-weight: ${font.weight.title};
    color: ${color.text};
    line-height: 1.3;
    margin: 0 0 12px;
    animation: ${fadeInUp} 0.8s ease forwards;
    animation-delay: 0.15s;
    opacity: 0;
  }

  .sub {
    font-size: ${font.size.lg};
    font-weight: ${font.weight.subhead};
    color: ${color.text};
    animation: ${fadeInUp} 0.8s ease forwards;
    animation-delay: 0.4s;
    opacity: 0;
    margin: 0 0 10px;

    .name-highlight {
      font-weight: ${font.weight.title};
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: ${color.gold};
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 40px 14px;

    .headline {
      font-size: 1.6rem;
    }

    .sub {
      font-size: ${font.size.sm};
      font-weight: ${font.weight.body};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .headline,
    .sub {
      animation: none;
      opacity: 1;
    }
  }
`;

export default function Home() {
  const { content } = useLang();
  const { hero } = content;

  return (
    <HeroContainer>
      <h1 className="headline">{hero.headline}</h1>
      <p className="sub">{hero.sub}</p>
      <Metrics metrics={hero.metrics} />
    </HeroContainer>
  );
}
