import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { color, font } from './ui/tokens';

const revealCatalog = keyframes`
  0% { opacity: 0; transform: translateY(12px); }
  1%, 21% { opacity: 1; transform: translateY(0); }
  23%, 100% { opacity: 0; transform: translateY(-10px); }
`;

const revealPricing = keyframes`
  0%, 23% { opacity: 0; transform: translateY(12px); }
  25%, 42% { opacity: 1; transform: translateY(0); }
  44%, 100% { opacity: 0; transform: translateY(-10px); }
`;

const revealMatching = keyframes`
  0%, 42% { opacity: 0; transform: translateY(12px); }
  44%, 61% { opacity: 1; transform: translateY(0); }
  63%, 100% { opacity: 0; transform: translateY(-10px); }
`;

const revealOutreach = keyframes`
  0%, 61% { opacity: 0; transform: translateY(12px); }
  63%, 80% { opacity: 1; transform: translateY(0); }
  82%, 100% { opacity: 0; transform: translateY(-10px); }
`;

const revealFleet = keyframes`
  0%, 80% { opacity: 0; transform: translateY(12px); }
  82%, 100% { opacity: 1; transform: translateY(0); }
`;

const moveProgress = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const interfaceEnter = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
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
    animation-duration: 20s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }

  .scene--catalog {
    animation-name: ${revealCatalog};
  }

  .scene--pricing {
    animation-name: ${revealPricing};
  }

  .scene--matching {
    animation-name: ${revealMatching};
  }

  .scene--outreach {
    animation-name: ${revealOutreach};
  }

  .scene--fleet {
    animation-name: ${revealFleet};
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
    font-size: clamp(1.35rem, 2.15vw, 2rem);
    font-weight: 650;
    line-height: 1.12;
    letter-spacing: -0.055em;
    text-wrap: balance;
  }

  .project-summary {
    max-width: 590px;
    margin: 7px 0 12px;
    color: #c6c4ba;
    font-size: 12px;
    line-height: 1.55;
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

  .project-visual--brandtool {
    display: block;
    padding: 8px;
    background:
      radial-gradient(ellipse at 75% 0%, rgba(255, 215, 0, 0.12), transparent 55%),
      #22231f;
  }

  .brandtool-window {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(92px, 0.22fr) minmax(0, 1fr);
    min-height: 156px;
    height: 100%;
    overflow: hidden;
    border: 1px solid rgba(32, 33, 29, 0.18);
    background: #f3f1e9;
    color: #282923;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.28);
    animation: ${interfaceEnter} 800ms ease-out both;
  }

  .brandtool-rail {
    padding: 12px 9px;
    background: #292b26;
    color: #f2f0e7;
  }

  .brandtool-wordmark {
    display: block;
    margin-bottom: 12px;
    color: var(--reel-gold);
    font-size: 9px;
    font-weight: 750;
    letter-spacing: 0.04em;
  }

  .brandtool-menu-label {
    display: block;
    margin: 9px 0 5px;
    color: #92938b;
    font-size: 7px;
    letter-spacing: 0.04em;
  }

  .brandtool-menu {
    display: grid;
    gap: 3px;
    color: #c9c9c0;
    font-size: 8px;
  }

  .brandtool-menu span {
    padding: 4px 5px;
  }

  .brandtool-menu .is-current {
    border-left: 2px solid var(--reel-gold);
    background: rgba(255, 215, 0, 0.12);
    color: #fff9d3;
  }

  .brandtool-main {
    min-width: 0;
    padding: 10px 14px 11px;
  }

  .brandtool-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    color: #73746c;
    font-size: 7px;
  }

  .brandtool-breadcrumb strong {
    color: #3c3d35;
  }

  .brandtool-heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
    margin-top: 7px;
    color: #282923;
    font-size: 13px;
    font-weight: 750;
    letter-spacing: -0.04em;
  }

  .brandtool-heading small {
    color: #7b7c72;
    font-size: 7px;
    font-weight: 550;
    letter-spacing: 0.02em;
  }

  .brandtool-tabs {
    display: flex;
    gap: 13px;
    margin-top: 7px;
    border-bottom: 1px solid #d9d7cd;
    color: #73746c;
    font-size: 8px;
  }

  .brandtool-tabs span {
    padding: 0 2px 5px;
  }

  .brandtool-tabs .is-current {
    border-bottom: 2px solid #8e7816;
    color: #37372e;
    font-weight: 700;
  }

  .brandtool-workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(106px, 0.65fr);
    gap: 8px;
    margin-top: 8px;
  }

  .brandtool-editor,
  .brandtool-history {
    min-width: 0;
    padding: 7px 8px;
    border: 1px solid #dedcd1;
    background: #fffef9;
  }

  .brandtool-editor > small,
  .brandtool-history > small {
    display: block;
    color: #797a71;
    font-size: 7px;
  }

  .brandtool-editor > strong {
    display: block;
    margin-top: 4px;
    color: #33342d;
    font-size: 9px;
  }

  .brandtool-calculation {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    margin-top: 6px;
    padding-top: 5px;
    border-top: 1px solid #e6e4da;
    color: #74756c;
    font-size: 7px;
  }

  .brandtool-calculation b {
    color: #766314;
    font-weight: 700;
  }

  .brandtool-history > span {
    display: block;
    margin-top: 5px;
    color: #404139;
    font-size: 7px;
  }

  .brandtool-history > span::before {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 5px;
    border-radius: 50%;
    background: #9b8321;
    content: '';
  }

  .visual-chat-bubble {
    width: fit-content;
    max-width: 100%;
    padding: 7px 9px;
    border-radius: 8px 8px 8px 2px;
    background: rgba(255, 215, 0, 0.12);
    color: var(--reel-ink);
    font-size: 9px;
  }

  .visual-chat-bubble + .visual-chat-bubble {
    margin-left: auto;
    border-radius: 8px 8px 2px 8px;
    background: rgba(242, 240, 231, 0.1);
  }

  .visual-file-stack {
    display: flex;
    gap: 5px;
  }

  .visual-file-stack i {
    width: 22px;
    height: 28px;
    border: 1px solid rgba(242, 240, 231, 0.3);
    border-top: 3px solid var(--reel-gold);
    background: rgba(242, 240, 231, 0.06);
    transform: rotate(-5deg);
  }

  .visual-file-stack i:nth-child(2) {
    transform: translateY(3px) rotate(5deg);
  }

  .visual-file-stack i:nth-child(3) {
    transform: translateY(1px) rotate(1deg);
  }

  .visual-databases {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }

  .visual-databases i {
    height: 13px;
    border: 1px solid rgba(255, 215, 0, 0.35);
    border-radius: 50%;
    background: rgba(255, 215, 0, 0.08);
  }

  .visual-pcs {
    display: grid;
    grid-template-columns: repeat(4, 13px);
    gap: 5px;
  }

  .visual-pcs i {
    width: 13px;
    height: 10px;
    border: 1px solid rgba(242, 240, 231, 0.46);
    border-bottom-width: 3px;
    background: rgba(242, 240, 231, 0.08);
  }

  .visual-pcs i:nth-child(-n + 8) {
    border-color: rgba(255, 215, 0, 0.6);
    background: rgba(255, 215, 0, 0.18);
  }

  .visual-pcs i:nth-child(9) {
    opacity: 0.35;
  }

  .brandtool-case-count {
    display: block;
    margin-top: 4px;
    color: #766314;
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 750;
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .project-proof {
    display: none;
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
    animation: ${moveProgress} 20s linear both;
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
      font-size: clamp(1.08rem, 5.4vw, 1.45rem);
    }

    .project-summary {
      margin: 5px 0 7px;
      font-size: 9px;
      line-height: 1.35;
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

    .project-visual--brandtool {
      padding: 4px;
    }

    .brandtool-window {
      display: none;
    }

    .project-proof {
      display: flex;
      min-height: inherit;
      align-items: center;
      gap: 12px;
      padding: 6px 12px;
    }

    .proof-number {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .proof-number strong {
      color: var(--reel-gold);
      font-size: 24px;
      line-height: 1;
    }

    .proof-number span,
    .proof-copy {
      color: #d6d4ca;
      font-size: 9px;
      line-height: 1.3;
    }

    .proof-copy {
      padding-left: 12px;
      border-left: 1px solid rgba(242, 240, 231, 0.22);
    }

    .brandtool-window {
      grid-template-columns: 60px minmax(0, 1fr);
      min-height: 83px;
    }

    .brandtool-rail {
      padding: 6px 4px;
    }

    .brandtool-wordmark {
      margin-bottom: 5px;
      font-size: 6px;
    }

    .brandtool-menu-label {
      margin: 4px 0 2px;
      font-size: 5px;
    }

    .brandtool-menu {
      gap: 1px;
      font-size: 6px;
    }

    .brandtool-menu span {
      padding: 3px 2px;
    }

    .brandtool-main {
      padding: 5px 6px;
    }

    .brandtool-breadcrumb {
      gap: 3px;
      font-size: 5px;
    }

    .brandtool-heading {
      margin-top: 3px;
      font-size: 9px;
    }

    .brandtool-heading small,
    .brandtool-editor > small,
    .brandtool-history > small {
      font-size: 5px;
    }

    .brandtool-tabs {
      gap: 8px;
      margin-top: 3px;
      font-size: 6px;
    }

    .brandtool-tabs span {
      padding-bottom: 3px;
    }

    .brandtool-workspace {
      grid-template-columns: minmax(0, 1fr) minmax(70px, 0.65fr);
      gap: 4px;
      margin-top: 4px;
    }

    .brandtool-editor,
    .brandtool-history {
      padding: 3px 4px;
    }

    .brandtool-editor > strong,
    .brandtool-history > span,
    .brandtool-calculation {
      font-size: 6px;
    }

    .brandtool-editor > strong {
      margin-top: 2px;
    }

    .brandtool-calculation {
      margin-top: 3px;
      padding-top: 2px;
    }

    .brandtool-history > span {
      margin-top: 3px;
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

    .visual-pcs {
      grid-template-columns: repeat(4, 9px);
      gap: 3px;
    }

    .visual-pcs i {
      width: 9px;
      height: 7px;
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

    .project-summary {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
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

    .project-summary {
      margin: 3px 0 4px;
      font-size: 8px;
      line-height: 1.25;
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

    .visual-card small,
    .project-visual--brandtool {
      padding: 4px;
    }

    .project-proof {
      gap: 6px;
      padding: 4px;
    }

    .proof-number {
      gap: 5px;
    }

    .proof-number strong {
      font-size: 19px;
    }

    .proof-number span,
    .proof-copy {
      font-size: 9px;
    }

    .proof-copy {
      padding-left: 6px;
    }

    .brandtool-window {
      grid-template-columns: 57px minmax(0, 1fr);
      min-height: 70px;
    }

    .brandtool-rail {
      padding: 6px 4px;
    }

    .brandtool-wordmark {
      margin-bottom: 5px;
      font-size: 6px;
    }

    .brandtool-menu-label {
      margin: 4px 0 2px;
      font-size: 5px;
    }

    .brandtool-menu {
      gap: 1px;
      font-size: 6px;
    }

    .brandtool-menu span {
      padding: 3px 2px;
    }

    .brandtool-main {
      padding: 5px 6px;
    }

    .brandtool-breadcrumb {
      gap: 3px;
      font-size: 5px;
    }

    .brandtool-heading {
      margin-top: 3px;
      font-size: 9px;
    }

    .brandtool-heading small,
    .brandtool-editor > small,
    .brandtool-history > small {
      font-size: 5px;
    }

    .brandtool-tabs {
      gap: 8px;
      margin-top: 3px;
      font-size: 6px;
    }

    .brandtool-tabs span {
      padding-bottom: 3px;
    }

    .brandtool-workspace {
      grid-template-columns: minmax(0, 1fr) minmax(70px, 0.65fr);
      gap: 4px;
      margin-top: 4px;
    }

    .brandtool-editor,
    .brandtool-history {
      padding: 3px 4px;
    }

    .brandtool-editor > strong,
    .brandtool-history > span,
    .brandtool-calculation {
      font-size: 6px;
    }

    .brandtool-editor > strong {
      margin-top: 2px;
    }

    .brandtool-calculation {
      margin-top: 3px;
      padding-top: 2px;
    }

    .brandtool-history > span {
      margin-top: 3px;
    }

    .brandtool-case-count {
      font-size: 14px;
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
    .timeline-fill,
    .brandtool-window {
      animation: none !important;
    }

    .scene {
      opacity: 0;
      transform: none;
    }

    .scene--catalog {
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
    chapter: 'Five AI + automation workflows for commerce ops',
    hook: 'AI parses the catalog. Code owns the price.',
    solo: 'SOLO AI ENGINEER · DESIGN → BUILD → OPERATE',
    company: 'StyleSeller · commerce operations for influencer-led brand sales',
    catalogOverline: '01 · SUPPLIER CATALOG · PDF / IMAGE / SPREADSHEET',
    catalogTitle: 'Turn supplier files into structured product listings.',
    catalogSummary: 'Gemini reads PDFs, images, slides, spreadsheets, and URLs to extract products, options, prices, and photos into the work tool.',
    catalogInput: 'Supplier files',
    catalogModel: 'Gemini · catalog parser',
    catalogOutput: 'Products · options · prices',
    pricingOverline: '02 · PROPOSALS INSIDE THE WORK TOOL',
    pricingTitle: 'AI edits requested fields. Code recalculates every price.',
    pricingSummary: 'I moved spreadsheet pricing formulas into the vendor and seller proposal flows, then checked 43 calculation cases with staff.',
    pricingProof: 'pricing cases checked with staff',
    pricingScale: '14 work-tool screens',
    matchingOverline: '03 · SALES-PARTNER MATCHING · RULES + SEARCH',
    matchingTitle: 'Find sales partners likely to run a group buy.',
    matchingSummary: 'Combine sales, category, inquiry, and proposal rules with knowledge search. An LLM scores 30 candidates at a time; 5+/10 qualifies for staff review.',
    matchingInputs: ['Sales history', 'Categories', 'Inquiries', 'Past proposals'],
    matchingRank: 'LLM · candidate scoring',
    matchingResult: 'Staff reviews matches',
    outreachOverline: '04 · CRM-PERSONALIZED KAKAOTALK',
    outreachTitle: 'A failed CRM lookup is never a confirmed zero.',
    outreachSummary: 'CRM uses KakaoTalk sales history and Instagram feed analysis to pick products; the work tool builds cards. Substitutes require a successful empty result, not a failed lookup.',
    outreachInput: 'Sales history · Instagram feed',
    outreachCard: 'Tailored product card',
    outreachQueue: 'KakaoTalk send queue',
    outreachGuard: '500+ recipients · approval hold',
    fleetOverline: '05 · DEPLOYMENT & OPERATIONS · 11 DEVICES',
    fleetTitle: 'Instagram seller discovery runs on employee PCs.',
    fleetSummary: 'Instagram blocks data-center IPs, so a worker runs on an employee PC: one account per PC, capped actions, no automated DMs.',
    fleetScale: '9 seller-finder PCs · 1 off',
    visualSite: 'StyleSeller internal work tool',
    visualSection: 'work tool · Proposals',
    visualVendor: 'Vendor version',
    visualSeller: 'Seller version',
    visualMenu: ['Products', 'Proposals', 'Vendors', 'Sellers'],
    visualProposalTitle: 'Proposal feature',
    visualEdit: 'LLM · fields-to-change JSON',
    visualPrice: 'Code · deterministic price',
    visualVersionHistory: '43 pricing cases checked with staff',
    visualHistoryLabel: 'Work records',
    visualSendHistory: 'Created proposals · send requests',
    visualMessage: 'Supplier PDF · image · sheet',
    visualSeparate: 'Products · options · prices',
    visualStaff: 'Original photos preferred',
    visualSearch: 'Sales history · categories',
    visualDraft: 'Knowledge search',
    visualRecords: 'Past sales · inquiries · tags',
    visualInstall: 'Instagram · one account',
    visualUpdate: 'No automated DMs',
    visualChapters: ['Catalog intake', 'Code-owned pricing', 'Partner matching', 'KakaoTalk proposals', 'Staff-PC discovery'],
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
    chapter: '커머스 운영에 쓰이는 AI·자동화 흐름 5개',
    hook: '상품은 AI가 읽고, 가격은 코드가 책임집니다.',
    solo: 'StyleSeller · 설계 → 개발 → 배포·운영',
    company: 'StyleSeller · 크리에이터 셀러와 브랜드의 판매를 운영하는 커머스 플랫폼',
    catalogOverline: '01 · 공급사 카탈로그 · PDF / 이미지 / 엑셀',
    catalogTitle: '공급사 자료에서 상품·옵션·가격을 등록합니다.',
    catalogSummary: 'PDF·이미지·PPT·엑셀·URL을 Gemini가 읽어 상품 데이터로 구조화하고, 상품 사진도 함께 가져옵니다.',
    catalogInput: '공급사 자료',
    catalogModel: 'Gemini · 카탈로그 파싱',
    catalogOutput: '상품 · 옵션 · 가격',
    pricingOverline: '02 · 사내 업무툴 제안 기능',
    pricingTitle: 'AI는 요청 필드만 수정. 가격은 코드가 재계산.',
    pricingSummary: '시트 수식을 업무툴의 벤더용·셀러용 제안 흐름으로 옮기고, 실무자와 계산 43건을 대조했습니다.',
    pricingProof: '가격 계산 43건 실무자 대조',
    pricingScale: '업무툴 화면 14개',
    matchingOverline: '03 · 판매 파트너사 매칭 · 규칙 + 지식 검색',
    matchingTitle: '공동구매를 함께 열 판매 파트너사를 찾습니다.',
    matchingSummary: '공구 이력·카테고리·문의·제안서 규칙 점수에 지식 허브 후보를 합칩니다. LLM이 30개씩 0~10점 판정하고, 5점 이상을 직원이 검토합니다.',
    matchingInputs: ['공구 이력', '카테고리', '문의', '과거 제안'],
    matchingRank: 'LLM · 후보별 매칭 점수',
    matchingResult: '직원이 후보 검토',
    outreachOverline: '04 · CRM 기반 맞춤 카카오톡',
    outreachTitle: 'CRM 조회 실패를 ‘결과 0건’으로 보지 않습니다.',
    outreachSummary: '카톡 판매 이력과 인스타 피드 분석으로 상품을 고릅니다. 대체 상품은 CRM 조회가 성공하고 0건일 때만 붙입니다.',
    outreachInput: '판매 이력 · 인스타 피드',
    outreachCard: '맞춤 상품 카드',
    outreachQueue: '카카오톡 발송 큐',
    outreachGuard: '500명 이상 · 승인 대기',
    fleetOverline: '05 · 배포와 운영 · 직원 PC 11대',
    fleetTitle: 'Instagram 셀러 발굴은 직원 PC에서 실행합니다.',
    fleetSummary: 'Instagram 데이터센터 IP 차단에 맞춰 직원 PC 워커로 옮겼습니다. 계정당 PC 1대, 행동 상한, 자동 DM 없음.',
    fleetScale: '셀러찾기 PC 9대 · 1대 중지',
    visualSite: 'StyleSeller 사내 업무툴',
    visualSection: '업무툴 · 제안서',
    visualVendor: '벤더용',
    visualSeller: '셀러용',
    visualMenu: ['상품', '제안서', '벤더', '셀러'],
    visualProposalTitle: '제안서 기능',
    visualEdit: 'LLM · 수정 필드 JSON',
    visualPrice: '코드 · 결정론적 가격 계산',
    visualVersionHistory: '가격 계산 43건 실무자 대조',
    visualHistoryLabel: '업무 기록',
    visualSendHistory: '제안서 생성 · 발송 요청',
    visualMessage: '공급사 PDF · 이미지 · 엑셀',
    visualSeparate: '상품 · 옵션 · 가격',
    visualStaff: '원본 사진 우선 사용',
    visualSearch: '공구 이력 · 카테고리',
    visualDraft: '지식 허브 검색',
    visualRecords: '과거 제안 · 문의 · 태그',
    visualInstall: 'Instagram · 계정 1개',
    visualUpdate: '자동 DM 없음',
    visualChapters: ['상품 등록', '코드 가격 계산', '파트너사 매칭', '카톡 제안', '직원 PC 셀러 발굴'],
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

export default function HeroShowreel({ hero, content, lang, withPrefix }) {
  const text = copy[lang] || copy.ko;
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
            <p className="hook">{text.hook}</p>
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
              <span>01 — 05</span>
            </div>
            <div
              className={`film-stage${paused ? ' is-paused' : ''}`}
              key={replayKey}
              aria-hidden="true"
            >
              <div className="scene scene--catalog">
                <div className="scene-caption">
                  <strong>{text.catalogOverline}</strong>
                  <span className="caption-state">01 / 05</span>
                </div>
                <h2 className="project-title">{text.catalogTitle}</h2>
                <p className="project-summary">{text.catalogSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <div className="visual-file-stack"><i /><i /><i /></div>
                      <strong>{text.catalogInput}</strong>
                      <small>{text.visualMessage}</small>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.catalogModel}</strong>
                      <small>{text.visualStaff}</small>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.catalogOutput}</strong>
                      <small>{text.visualSeparate}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene scene--pricing">
                <div className="scene-caption">
                  <strong>{text.pricingOverline}</strong>
                  <span className="caption-state">02 / 05</span>
                </div>
                <h2 className="project-title">{text.pricingTitle}</h2>
                <p className="project-summary">{text.pricingSummary}</p>
                <div className="project-visual project-visual--brandtool">
                  <div className="brandtool-window">
                    <aside className="brandtool-rail">
                      <strong className="brandtool-wordmark">work tool</strong>
                      <small className="brandtool-menu-label">{text.visualSite}</small>
                      <div className="brandtool-menu">
                        {text.visualMenu.map((item) => (
                          <span className={item === text.visualMenu[1] ? 'is-current' : ''} key={item}>{item}</span>
                        ))}
                      </div>
                    </aside>
                    <div className="brandtool-main">
                      <div className="brandtool-breadcrumb">
                        <span>{text.visualSite}</span><span>/</span><strong>{text.visualSection}</strong>
                      </div>
                      <div className="brandtool-heading">
                        <span>{text.visualProposalTitle}</span>
                        <small>{text.pricingScale}</small>
                      </div>
                      <div className="brandtool-tabs">
                        <span className="is-current">{text.visualVendor}</span>
                        <span>{text.visualSeller}</span>
                      </div>
                      <div className="brandtool-workspace">
                        <div className="brandtool-editor">
                          <small>{text.visualEdit}</small>
                          <strong>{text.visualPrice}</strong>
                          <div className="brandtool-calculation">
                            <span>{text.visualVersionHistory}</span><b>↻</b>
                          </div>
                        </div>
                        <div className="brandtool-history">
                          <small>{text.visualHistoryLabel}</small>
                          <strong className="brandtool-case-count">43</strong>
                          <span>{text.pricingProof}</span>
                          <span>{text.visualSendHistory}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-proof">
                    <span className="proof-number">
                      <strong>43</strong>
                      <span>{text.pricingProof}</span>
                    </span>
                    <span className="proof-copy">{text.pricingScale}</span>
                  </div>
                </div>
              </div>

              <div className="scene scene--matching">
                <div className="scene-caption">
                  <strong>{text.matchingOverline}</strong>
                  <span className="caption-state">03 / 05</span>
                </div>
                <h2 className="project-title">{text.matchingTitle}</h2>
                <p className="project-summary">{text.matchingSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <div className="visual-databases">{text.matchingInputs.map((source) => <i key={source} title={source} />)}</div>
                      <strong>{text.visualRecords}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.matchingRank}</strong>
                      <small>{text.visualDraft}</small>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.matchingResult}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene scene--outreach">
                <div className="scene-caption">
                  <strong>{text.outreachOverline}</strong>
                  <span className="caption-state">04 / 05</span>
                </div>
                <h2 className="project-title">{text.outreachTitle}</h2>
                <p className="project-summary">{text.outreachSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <strong>{text.outreachInput}</strong>
                      <small>{text.visualSearch}</small>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.outreachCard}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.outreachQueue}</strong>
                      <small>{text.outreachGuard}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene scene--fleet">
                <div className="scene-caption">
                  <strong>{text.fleetOverline}</strong>
                  <span className="caption-state">05 / 05</span>
                </div>
                <h2 className="project-title">{text.fleetTitle}</h2>
                <p className="project-summary">{text.fleetSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <strong>{text.visualInstall}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.fleetScale}</strong>
                      <div className="visual-pcs">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</div>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.visualUpdate}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-fill" onAnimationEnd={finish} />
              </div>
            </div>
            <div className="film-foot">
              <div className="chapter-list" aria-hidden="true">
                {text.visualChapters.map((chapter, index) => (
                  <span key={chapter}>{String(index + 1).padStart(2, '0')} {chapter}</span>
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
          <li>{text.catalogOverline}: {text.catalogTitle} {text.catalogSummary} {text.catalogOutput}</li>
          <li>{text.pricingOverline}: {text.pricingTitle} {text.pricingSummary} {text.pricingProof}</li>
          <li>{text.matchingOverline}: {text.matchingTitle} {text.matchingSummary} {text.matchingInputs.join(', ')}.</li>
          <li>{text.outreachOverline}: {text.outreachTitle} {text.outreachSummary} {text.outreachGuard}</li>
          <li>{text.fleetOverline}: {text.fleetTitle} {text.fleetSummary} {text.fleetScale}</li>
          <li>{hero.intro} {hero.company}</li>
          {hero.metrics.map((metric) => (
            <li key={metric.label}>{metric.value} {metric.label}. {metric.basis}</li>
          ))}
        </ul>
        <span className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</span>
      </div>
    </Hero>
  );
}
