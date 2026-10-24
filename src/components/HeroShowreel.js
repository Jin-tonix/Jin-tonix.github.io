import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { color, font } from './ui/tokens';

// 쇼릴 — 사례 7개를 4초씩 차례로 보여준다
const SLIDE_COUNT = 7;
const SLIDE_SECONDS = 4;
const REEL_SECONDS = SLIDE_COUNT * SLIDE_SECONDS;

// i 번째 장면이 제 구간에서만 보이게 하는 keyframes (마지막 장면은 끝까지 남는다)
const revealAt = (i) => {
  const step = 100 / SLIDE_COUNT;
  const start = +(i * step).toFixed(2);
  const end = +((i + 1) * step).toFixed(2);
  if (i === 0) {
    return keyframes`
      0% { opacity: 0; transform: translateY(12px); }
      1%, ${end - 2}% { opacity: 1; transform: translateY(0); }
      ${end}%, 100% { opacity: 0; transform: translateY(-10px); }
    `;
  }
  if (i === SLIDE_COUNT - 1) {
    return keyframes`
      0%, ${start}% { opacity: 0; transform: translateY(12px); }
      ${start + 2}%, 100% { opacity: 1; transform: translateY(0); }
    `;
  }
  return keyframes`
    0%, ${start}% { opacity: 0; transform: translateY(12px); }
    ${start + 2}%, ${end - 2}% { opacity: 1; transform: translateY(0); }
    ${end}%, 100% { opacity: 0; transform: translateY(-10px); }
  `;
};
const REVEALS = Array.from({ length: SLIDE_COUNT }, (_, i) => revealAt(i));

const moveProgress = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const Hero = styled.section`
  --reel-ink: #f2f0e7;
  --reel-muted: #a8a69a;
  --reel-line: rgba(242, 240, 231, 0.16);
  --reel-gold: ${color.gold};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: 100svh;
  box-sizing: border-box;
  overflow: hidden;
  isolation: isolate;
  color: var(--reel-ink);
  background:
    radial-gradient(ellipse at 76% 43%, rgba(109, 94, 31, 0.18), transparent 36rem),
    linear-gradient(135deg, #1d1d1a 0%, #25241f 55%, #1b1c1a 100%);

  &::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    content: '';
    opacity: 0.14;
    pointer-events: none;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(255, 255, 255, 0.025) 4px
    );
  }

  .hero-inner {
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: clamp(16px, 2.4vh, 30px) clamp(24px, 5vw, 76px) 14px;
  }

  .topline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    margin-bottom: clamp(10px, 1.7vh, 20px);
    color: var(--reel-muted);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .topline-mark {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .topline-mark::before {
    width: 8px;
    height: 8px;
    border: 1px solid var(--reel-gold);
    border-radius: 50%;
    content: '';
    box-shadow: 0 0 14px rgba(255, 215, 0, 0.45);
  }

  .hero-main {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(430px, 1.18fr);
    align-items: center;
    gap: clamp(20px, 3vw, 44px);
  }

  .hero-copy {
    min-width: 0;
    padding: 0 0 16px;
  }

  .hook {
    max-width: 650px;
    margin: 0 0 12px;
    color: var(--reel-gold);
    font-size: clamp(1.65rem, 2.55vw, 2.5rem);
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.055em;
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 5.2vw, 5rem);
    font-weight: 650;
    line-height: 0.98;
    letter-spacing: -0.065em;
  }

  .role {
    display: block;
    margin-top: 15px;
    color: #cfcdc2;
    font-size: clamp(0.95rem, 1.55vw, 1.2rem);
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.02em;
  }

  .solo {
    margin: 15px 0 0;
    color: var(--reel-gold);
    font-size: 12px;
    font-weight: 650;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .intro {
    max-width: 620px;
    margin: 10px 0 0;
    color: #e1dfd5;
    font-size: clamp(0.9rem, 1.02vw, 1rem);
    line-height: 1.58;
    word-break: keep-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .company {
    max-width: 590px;
    margin: 8px 0 0;
    color: var(--reel-muted);
    font-size: 10px;
    line-height: 1.45;
    word-break: keep-all;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
  }

  .actions a.projects {
    border-color: var(--reel-gold);
    color: var(--reel-gold);
  }

  .actions a {
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    justify-content: flex-start;
    padding: 0 13px;
    border: 1px solid rgba(242, 240, 231, 0.32);
    border-radius: 3px;
    color: var(--reel-ink);
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
  }

  .actions a:hover {
    border-color: var(--reel-gold);
    color: var(--reel-gold);
  }

  .actions a.primary {
    border-color: var(--reel-gold);
    background: var(--reel-gold);
    color: #1d1d1a;
  }

  .actions a.primary:hover {
    background: #ffe64a;
    color: #1d1d1a;
  }

  .film {
    min-width: 0;
    border: 1px solid rgba(242, 240, 231, 0.22);
    background: rgba(16, 17, 16, 0.68);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.3);
  }

  .film-head,
  .film-foot {
    display: flex;
    min-height: 47px;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0 17px;
    color: var(--reel-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .film-head {
    border-bottom: 1px solid var(--reel-line);
  }

  .film-index {
    color: var(--reel-gold);
  }

  .film-stage {
    position: relative;
    height: clamp(300px, 38vh, 390px);
    min-height: 0;
    overflow: hidden;
    background:
      linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      radial-gradient(ellipse at 50% 48%, rgba(255, 215, 0, 0.07), transparent 60%);
    background-size: 36px 36px, 36px 36px, auto;
  }

  .film-stage.is-paused * {
    animation-play-state: paused !important;
  }

  .scene {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(16px, 2vw, 25px);
    animation-duration: ${REEL_SECONDS}s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }

  .scene--0 {
    animation-name: ${REVEALS[0]};
  }

  .scene--1 {
    animation-name: ${REVEALS[1]};
  }

  .scene--2 {
    animation-name: ${REVEALS[2]};
  }

  .scene--3 {
    animation-name: ${REVEALS[3]};
  }

  .scene--4 {
    animation-name: ${REVEALS[4]};
  }

  .scene--5 {
    animation-name: ${REVEALS[5]};
  }

  .scene--6 {
    animation-name: ${REVEALS[6]};
  }

  .scene-caption {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    margin-bottom: 12px;
    color: var(--reel-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .scene-caption strong {
    color: var(--reel-ink);
    font-weight: 600;
  }

  .caption-state {
    color: var(--reel-gold);
  }

  .project-overline {
    margin: 0 0 7px;
    color: var(--reel-gold);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .project-title {
    max-width: 620px;
    margin: 0;
    color: var(--reel-ink);
    font-size: clamp(1.1rem, 1.65vw, 1.55rem);
    font-weight: 650;
    line-height: 1.3;
    letter-spacing: -0.03em;
    text-wrap: balance;
    word-break: keep-all;
  }

  .project-visual {
    position: relative;
    display: grid;
    flex: 1;
    min-height: 168px;
    align-items: center;
    overflow: hidden;
    margin-top: 6px;
    padding: clamp(12px, 2vw, 22px);
    border: 1px solid rgba(242, 240, 231, 0.16);
    background:
      radial-gradient(ellipse at 50% 50%, rgba(255, 215, 0, 0.1), transparent 65%),
      linear-gradient(135deg, rgba(242, 240, 231, 0.07), rgba(16, 17, 16, 0.54));
  }

  .project-visual::before {
    position: absolute;
    inset: 0;
    content: '';
    opacity: 0.2;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(242, 240, 231, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(242, 240, 231, 0.1) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: linear-gradient(90deg, transparent, black 25%, black 75%, transparent);
  }

  .visual-track {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 34px minmax(0, 1fr) 34px minmax(0, 1fr);
    align-items: center;
    gap: 7px;
  }

  .visual-card {
    position: relative;
    display: flex;
    min-width: 0;
    min-height: 106px;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    border: 1px solid rgba(242, 240, 231, 0.24);
    background: linear-gradient(145deg, rgba(42, 43, 39, 0.96), rgba(25, 26, 24, 0.96));
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
  }

  .visual-card::before {
    width: 18px;
    height: 3px;
    content: '';
    background: rgba(242, 240, 231, 0.35);
  }

  .visual-card strong {
    color: var(--reel-ink);
    font-size: clamp(10px, 1vw, 13px);
    line-height: 1.35;
    word-break: keep-all;
  }

  .visual-card small {
    color: var(--reel-muted);
    font-size: 9px;
    line-height: 1.35;
    word-break: keep-all;
  }

  .visual-card.accent {
    border-color: rgba(255, 215, 0, 0.55);
  }

  .visual-card.accent::before {
    background: var(--reel-gold);
    box-shadow: 0 0 13px rgba(255, 215, 0, 0.45);
  }

  .visual-card.accent strong {
    color: var(--reel-gold);
  }

  .visual-arrow {
    color: var(--reel-gold);
    font-size: 21px;
    text-align: center;
    animation: ${moveProgress} 2s ease-in-out infinite alternate;
  }

  .timeline {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: rgba(242, 240, 231, 0.13);
  }

  .timeline-fill {
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left center;
    background: var(--reel-gold);
    animation: ${moveProgress} ${REEL_SECONDS}s linear both;
  }

  .film-foot {
    min-height: 43px;
    border-top: 1px solid var(--reel-line);
    font-size: 9px;
  }

  .chapter-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .chapter-list span {
    white-space: nowrap;
  }

  .controls {
    display: flex;
    gap: 7px;
  }

  .controls button {
    min-height: 30px;
    padding: 0 9px;
    border: 1px solid var(--reel-line);
    border-radius: 2px;
    background: transparent;
    color: var(--reel-ink);
    cursor: pointer;
    font: inherit;
    letter-spacing: 0.04em;
    transition: border-color 160ms ease, color 160ms ease;
  }

  .controls button:hover {
    border-color: var(--reel-gold);
    color: var(--reel-gold);
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: clamp(12px, 1.8vh, 20px) 0 0;
    border-top: 1px solid var(--reel-line);
  }

  .metric {
    min-width: 0;
    display: grid;
    grid-template-rows: auto auto;
    padding: 9px 16px 2px 0;
  }

  .metric dt {
    grid-row: 2;
  }

  .metric + .metric {
    padding-left: 20px;
    border-left: 1px solid var(--reel-line);
  }

  .metric dd {
    grid-row: 1;
    margin: 0;
  }

  .metric-value {
    display: block;
    color: var(--reel-gold);
    font-family: ${font.family};
    font-size: clamp(1.8rem, 3.3vw, 2.7rem);
    line-height: 1;
  }

  .metric-label {
    display: block;
    min-height: 2.7em;
    margin-top: 8px;
    color: var(--reel-ink);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    word-break: keep-all;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 900px) {
    min-height: 0;

    .hero-inner {
      padding-right: clamp(24px, 5vw, 48px);
      padding-left: clamp(24px, 5vw, 48px);
    }

    .hero-main {
      grid-template-columns: minmax(0, 0.88fr) minmax(340px, 1.12fr);
      gap: 20px;
    }

    h1 {
      font-size: clamp(2.55rem, 5vw, 3.4rem);
    }

    .company {
      font-size: 11px;
    }

    .metric + .metric {
      padding-left: 12px;
    }
  }

  @media (max-width: 760px) {
    height: calc(100vh - var(--topbar-height));
    height: calc(100svh - var(--topbar-height));
    align-items: center;

    .hero-inner {
      padding: 12px 16px 10px;
    }

    .topline {
      margin-bottom: 12px;
      font-size: 9px;
      letter-spacing: 0.1em;
    }

    .topline span:last-child {
      text-align: right;
    }

    .hero-main {
      grid-template-columns: minmax(0, 1fr);
      gap: 12px;
    }

    .hero-copy {
      padding-bottom: 0;
    }

    .hook {
      max-width: 450px;
      margin-bottom: 7px;
      font-size: clamp(1.05rem, 4.8vw, 1.38rem);
    }

    h1 {
      font-size: clamp(2.5rem, 11vw, 3.6rem);
    }

    .role {
      margin-top: 6px;
      font-size: 0.85rem;
    }

    .solo {
      margin-top: 8px;
      font-size: 9px;
    }

    .intro {
      margin-top: 7px;
      font-size: 0.82rem;
      line-height: 1.4;
    }

    .company {
      display: none;
    }

    .actions {
      gap: 6px;
      margin-top: 10px;
    }

    .actions a {
      min-height: 34px;
      padding: 0 9px;
      font-size: 10px;
    }

    .film-stage {
      height: clamp(170px, 27vh, 220px);
      min-height: 0;
    }

    .film-head {
      min-height: 42px;
      padding: 0 12px;
      font-size: 9px;
    }

    .film-foot {
      min-height: 41px;
      padding: 0 10px;
      font-size: 8px;
    }

    .chapter-list {
      gap: 8px;
    }

    .controls {
      gap: 4px;
    }

    .controls button {
      min-height: 29px;
      padding: 0 6px;
      font-size: 8px;
    }

    .project-title {
      font-size: clamp(0.95rem, 4.2vw, 1.15rem);
    }

    .scene {
      padding: 11px;
    }

    .scene-caption {
      margin-bottom: 6px;
      font-size: 8px;
    }

    .project-visual {
      min-height: 85px;
      margin-top: 3px;
      padding: 7px;
    }

    .visual-track {
      grid-template-columns: minmax(0, 1fr) 18px minmax(0, 1fr) 18px minmax(0, 1fr);
      gap: 3px;
    }

    .visual-card {
      min-height: 68px;
      gap: 5px;
      padding: 6px;
    }

    .visual-card strong {
      font-size: 8px;
    }

    .visual-card small {
      font-size: 7px;
    }

    .visual-arrow {
      font-size: 15px;
    }

    .film-head {
      min-height: 34px;
      padding: 0 10px;
      font-size: 8px;
    }

    .film-foot {
      min-height: 34px;
      gap: 6px;
      padding: 0 8px;
      font-size: 7px;
    }

    .chapter-list {
      gap: 5px;
      overflow: hidden;
    }

    .chapter-list span {
      font-size: 7px;
    }

    .controls {
      gap: 3px;
    }

    .controls button {
      min-height: 25px;
      padding: 0 5px;
      font-size: 7px;
    }

    .metrics {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 9px;
    }

    .metric {
      min-height: 53px;
      padding: 7px 8px 6px 0;
    }

    .metric + .metric {
      padding-left: 12px;
    }

    .metric:nth-child(3) {
      padding-left: 0;
      border-left: 0;
    }

    .metric:nth-child(n + 3) {
      border-top: 1px solid var(--reel-line);
    }

    .metric-label {
      min-height: 0;
      margin-top: 4px;
      font-size: 9px;
    }
  }

  @media (max-width: 760px) and (max-height: 720px) {
    .hero-inner {
      padding-top: 7px;
      padding-bottom: 6px;
    }

    .topline {
      margin-bottom: 7px;
    }

    .hero-main {
      gap: 7px;
    }

    .film-stage {
      height: 160px;
    }

    .project-visual {
      min-height: 72px;
    }

    .metric {
      min-height: 46px;
    }
  }

  @media (max-width: 360px) and (max-height: 720px) {
    .hero-inner {
      padding: 4px 12px 6px;
    }

    .topline {
      margin-bottom: 5px;
    }

    .topline span:last-child {
      display: none;
    }

    .hook {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 4px;
      font-size: 11px;
      line-height: 1.2;
    }

    .hero-main {
      gap: 6px;
    }

    .solo {
      margin-top: 5px;
    }

    .intro {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-top: 5px;
      overflow: hidden;
      font-size: 0.76rem;
      line-height: 1.3;
    }

    .actions {
      margin-top: 7px;
    }

    .actions a {
      min-height: 29px;
      padding: 0 7px;
      font-size: 9px;
    }

    .film-stage {
      height: 120px;
    }

    .film-head,
    .film-foot {
      min-height: 28px;
    }

    .chapter-list {
      display: none;
    }

    .film-foot {
      justify-content: flex-end;
    }

    .scene {
      padding: 7px;
    }

    .scene-caption {
      margin-bottom: 3px;
    }

    .project-title {
      font-size: 13px;
    }

    .hook {
      font-size: 13px;
    }

    .project-visual {
      min-height: 56px;
      margin-top: 2px;
      padding: 4px;
    }

    .visual-track {
      grid-template-columns: minmax(0, 1fr) 14px minmax(0, 1fr) 14px minmax(0, 1fr);
      gap: 2px;
    }

    .visual-card {
      min-height: 50px;
      gap: 4px;
      padding: 4px;
    }

    .visual-card strong {
      font-size: 7px;
    }

    .visual-card small {
      padding: 4px;
    }

    .metrics {
      margin-top: 5px;
    }

    .metric {
      min-height: 38px;
      padding-top: 4px;
      padding-bottom: 3px;
    }

    .metric-value {
      font-size: 1.45rem;
    }

    .metric-label {
      font-size: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .scene,
    .timeline-fill {
      animation: none !important;
    }

    .scene {
      opacity: 0;
      transform: none;
    }

    .scene--0 {
      opacity: 1;
    }

    .timeline-fill {
      transform: scaleX(1);
    }

    .visual-arrow {
      animation: none !important;
    }

    .controls {
      display: none;
    }
  }
`;

const copy = {
  en: {
    top: 'AI Engineer · from workflow to production',
    chapter: 'Seven AI systems in daily use',
    solo: 'AI ENGINEER · DESIGN → BUILD → OPERATE',
    company: 'StyleSeller · commerce operations for influencer-led brand sales',
    live: 'IN USE EVERY DAY',
    projects: 'Explore projects',
    pause: 'Pause',
    resume: 'Resume',
    replay: 'Replay',
    paused: 'Showreel paused.',
    resumed: 'Showreel resumed.',
    replayed: 'Showreel replayed.',
    completed: 'Showreel complete.',
    email: 'Email me',
  },
  ko: {
    top: 'AI 엔지니어 · 업무 흐름부터 운영까지',
    chapter: '매일 쓰는 사내 AI 시스템 7개',
    solo: 'StyleSeller · 설계 → 개발 → 배포·운영',
    company: 'StyleSeller · 크리에이터 셀러와 브랜드의 판매를 운영하는 커머스 플랫폼',
    live: '매일 사용 중',
    projects: '프로젝트 자세히 보기',
    pause: '일시정지',
    resume: '재생',
    replay: '다시보기',
    paused: '쇼릴을 일시정지했습니다.',
    resumed: '쇼릴을 다시 재생합니다.',
    replayed: '쇼릴을 처음부터 재생합니다.',
    completed: '쇼릴 재생이 끝났습니다.',
    email: '메일 보내기',
  },
};

// 괄호 밖 첫 쉼표 앞까지만 (뒤는 덧붙임 설명)
const beforeOuterComma = (text) => {
  let depth = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '(') depth += 1;
    if (text[i] === ')') depth -= 1;
    if (text[i] === ',' && depth === 0) return text.slice(0, i).trim();
  }
  return text.trim();
};

// 사례 구조도 캡션(→·↔ 흐름)에서 상자 3개를 뽑는다. 영문은 content 의 reelFlow 를 쓴다
const flowBoxes = (c) => {
  if (c.reelFlow) return c.reelFlow;
  const caption = c.diagramCaption || '';
  // '·' 로 묶인 흐름이 여럿이면 단계가 가장 많은 흐름 하나
  const flows = caption.split(' · ').map((f) => f.split(/\s*[→↔]\s*/).filter(Boolean));
  const parts = flows.reduce((a, b) => (b.length > a.length ? b : a), []);
  if (parts.length === 0) return [];
  parts[parts.length - 1] = beforeOuterComma(parts[parts.length - 1]);
  const picked = parts.length <= 3 ? parts : [parts[0], parts[Math.floor((parts.length - 1) / 2)], parts[parts.length - 1]];
  return picked.map((part) => {
    const m = part.match(/^([^(]+)\((.*)\)$/);
    return m ? { label: m[1].trim(), note: m[2].trim() } : { label: part.trim(), note: '' };
  });
};

const pad = (n) => String(n).padStart(2, '0');

export default function HeroShowreel({ hero, content, lang, withPrefix }) {
  const text = copy[lang] || copy.ko;
  const slides = content.cases.slice(0, SLIDE_COUNT);
  const total = pad(slides.length);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const togglePlayback = () => {
    const nextPaused = !paused;
    setPaused(nextPaused);
    setAnnouncement(nextPaused ? text.paused : text.resumed);
  };

  const replay = () => {
    setReplayKey((value) => value + 1);
    setPaused(false);
    setFinished(false);
    setAnnouncement(text.replayed);
  };

  const finish = () => {
    setPaused(false);
    setFinished(true);
    setAnnouncement(text.completed);
  };

  return (
    <Hero aria-labelledby="home-title">
      <div className="hero-inner">
        <div className="topline">
          <span className="topline-mark">{text.top}</span>
          <span>{text.chapter}</span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="hook">{hero.headline}</p>
            <h1 id="home-title">
              {hero.name}
              <span className="role">{hero.title}</span>
            </h1>
            <p className="solo">{text.solo}</p>
            <p className="intro">{hero.intro}</p>
            <p className="company">{text.company}</p>
            <div className="actions">
              <a className="primary" href="mailto:jinheemok815@gmail.com">{text.email}</a>
              <a href={content.nav.resume.href} target="_blank" rel="noopener noreferrer">
                {content.nav.resume.label} (PDF)
              </a>
              <Link className="projects" to={withPrefix('/projects')}>{text.projects}</Link>
            </div>
          </div>

          <div className="film" role="group" aria-label={text.chapter}>
            <div className="film-head">
              <span className="film-index">StyleSeller · {text.live}</span>
              <span>01 — {total}</span>
            </div>
            <div
              className={`film-stage${paused ? ' is-paused' : ''}`}
              key={replayKey}
              aria-hidden="true"
            >
              {slides.map((c, i) => {
                const boxes = flowBoxes(c);
                return (
                  <div className={`scene scene--${i}`} key={c.slug}>
                    <div className="scene-caption">
                      <strong>{c.shortTitle}</strong>
                      <span className="caption-state">{pad(i + 1)} / {total}</span>
                    </div>
                    <h2 className="project-title">{c.subtitle}</h2>
                    {boxes.length > 0 && (
                      <div className="project-visual">
                        <div className="visual-track">
                          {boxes.map((box, j) => (
                            <React.Fragment key={box.label}>
                              {j > 0 && <span className="visual-arrow" aria-hidden="true">→</span>}
                              <div className={`visual-card${j === 1 ? ' accent' : ''}`}>
                                <strong>{box.label}</strong>
                                {box.note && <small>{box.note}</small>}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="timeline">
                <div className="timeline-fill" onAnimationEnd={finish} />
              </div>
            </div>
            <div className="film-foot">
              <div className="chapter-list" aria-hidden="true">
                {slides.map((c, i) => (
                  <span key={c.slug}>{pad(i + 1)} {c.shortTitle}</span>
                ))}
              </div>
              <div className="controls">
                {!finished && (
                  <button type="button" aria-pressed={paused} onClick={togglePlayback}>
                    {paused ? text.resume : text.pause}
                  </button>
                )}
                <button type="button" onClick={replay}>{text.replay}</button>
              </div>
            </div>
          </div>
        </div>

        <dl className="metrics">
          {hero.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <dt className="metric-label">{metric.label}</dt>
              <dd>
                <span className="metric-value">{metric.value}</span>
              </dd>
            </div>
          ))}
        </dl>
        <ul className="sr-only project-transcript">
          {slides.map((c, i) => (
            <li key={c.slug}>{pad(i + 1)} {c.shortTitle}: {c.subtitle}</li>
          ))}
          <li>{hero.intro} {hero.company}</li>
          {hero.metrics.map((metric) => (
            <li key={metric.label}>{metric.value} {metric.label}</li>
          ))}
        </ul>
        <span className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</span>
      </div>
    </Hero>
  );
}
