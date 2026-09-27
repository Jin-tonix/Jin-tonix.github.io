import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { color } from './ui/tokens';

const revealPricing = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  2%, 14% { opacity: 1; transform: translateY(0); }
  16%, 100% { opacity: 0; transform: translateY(-8px); }
`;

const revealVendor = keyframes`
  0%, 16% { opacity: 0; transform: translateY(8px); }
  18%, 34% { opacity: 1; transform: translateY(0); }
  36%, 100% { opacity: 0; transform: translateY(-8px); }
`;

const revealEmail = keyframes`
  0%, 36% { opacity: 0; transform: translateY(8px); }
  38%, 54% { opacity: 1; transform: translateY(0); }
  56%, 100% { opacity: 0; transform: translateY(-8px); }
`;

const revealSpark = keyframes`
  0%, 56% { opacity: 0; transform: translateY(8px); }
  58%, 74% { opacity: 1; transform: translateY(0); }
  76%, 100% { opacity: 0; transform: translateY(-8px); }
`;

const revealFleet = keyframes`
  0%, 76% { opacity: 0; transform: translateY(8px); }
  78%, 100% { opacity: 1; transform: translateY(0); }
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

  .scene--pricing {
    animation-name: ${revealPricing};
  }

  .scene--vendor {
    animation-name: ${revealVendor};
  }

  .scene--spark {
    animation-name: ${revealSpark};
  }

  .scene--email {
    animation-name: ${revealEmail};
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

  .visual-pcs i:nth-child(-n + 11) {
    border-color: rgba(255, 215, 0, 0.6);
    background: rgba(255, 215, 0, 0.18);
  }

  .project-proof {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding: 0 10px 10px;
  }

  .proof-chip {
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border: 1px solid rgba(255, 215, 0, 0.42);
    color: var(--reel-gold);
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 0.02em;
  }

  .proof-copy {
    color: #c6c4ba;
    font-size: 9px;
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
    font-family: Georgia, serif;
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
    .proof-copy {
      font-size: 7px;
    }

    .project-visual--brandtool {
      padding: 4px;
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

    .scene--pricing {
      opacity: 1;
    }

    .timeline-fill {
      transform: scaleX(1);
    }

    .controls {
      display: none;
    }
  }
`;

const copy = {
  en: {
    top: 'AI Engineer · from workflow to production',
    chapter: 'Five systems in real team workflows',
    hook: 'I turn repetitive work into AI systems—and run them in production.',
    solo: 'Solo AI Engineer at StyleSeller',
    intro: 'Proposal features inside the work tool, plus AI systems for partner support, email learning, and operations.',
    company: 'StyleSeller · commerce operations for influencer-led brand sales',
    pricingOverline: 'PROJECT 01 · WORKFLOW DESIGN · WORK TOOL',
    pricingTitle: 'Proposal workflows inside the work tool.',
    pricingSummary: 'Not a separate product: this is a feature inside StyleSeller’s work tool. Vendor and seller workflows share code-based pricing and recorded proposal/send requests.',
    pricingProof: '43 pricing cases checked with staff',
    pricingScale: '14 work-tool screens',
    vendorOverline: 'PROJECT 02 · GROUNDED AGENTS · HUMAN HANDOFF',
    vendorTitle: 'Grounded answers for routine questions; gated handoff for the rest.',
    vendorSummary: 'When enabled, the full thread goes to the configured Slack recipient; a reply becomes a KakaoTalk send job.',
    vendorInputNote: "A partner's question",
    vendorStatus: 'When enabled · Slack reply → KakaoTalk queue',
    vendorGuard: ['Partner chats kept separate', 'Handoff has an explicit gate', 'Slack reply enters KakaoTalk queue'],
    emailOverline: 'PROJECT 03 · FEEDBACK LOOP · RAG + STYLEBOOK',
    emailTitle: 'Staff edits become knowledge for the next similar email.',
    emailSummary: 'Sent replies pair with the inquiry in RAG; factual corrections update knowledge, and style edits update the stylebook.',
    emailKnowledge: 'Save reply + corrections',
    emailKnowledgeNote: 'RAG + Stylebook',
    emailHumanNote: 'Search in future drafts',
    sparkOverline: 'PROJECT 04 · CONNECTED DATA · APPROVAL GATE',
    sparkTitle: 'One question searches four work data sources.',
    sparkSummary: 'Search four parts of the business at once. Ask a person before anything is changed.',
    sparkSources: ['Prices', 'Vendors', 'Campaigns', 'Work'],
    sparkAnswer: 'Find the answer',
    sparkGateNote: 'Ask before changing',
    fleetOverline: 'PROJECT 05 · PRODUCTION OPERATIONS · 11 DEVICES',
    fleetTitle: 'Own deployment and updates across 11 staff computers.',
    fleetSummary: 'Each computer has its own access key; important company passwords stay off staff computers.',
    fleetScale: '11 computers in use',
    visualSite: 'StyleSeller work site',
    visualSection: 'work tool · Proposals',
    visualVendor: 'Vendor version',
    visualSeller: 'Seller version',
    visualMenu: ['Products', 'Proposals', 'Vendors', 'Sellers'],
    visualProposalTitle: 'Proposal feature',
    visualEdit: 'Edit proposal copy',
    visualPrice: 'Code recalculates amounts',
    visualVersionHistory: 'Compare working revisions',
    visualHistoryLabel: 'Work records',
    visualSendHistory: 'Created proposals · send requests',
    visualMessage: 'KakaoTalk question',
    visualSeparate: 'Chatbot answers most',
    visualStaff: 'Configured recipient · Slack',
    visualSearch: 'Review, edit & send',
    visualDraft: 'Similar future email',
    visualRecords: 'Four parts of the business',
    visualAnswer: 'Find an answer',
    visualApprove: 'Staff approves',
    visualInstall: 'Deploy work systems',
    visualComputers: 'Staff computers',
    visualUpdate: 'Update all computers',
    visualChapters: ['Proposals', 'KakaoTalk help', 'Email drafts', 'Work search', 'Staff computers'],
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
    chapter: '실제 업무에 연결된 시스템 5개',
    hook: '반복 업무를 AI 시스템으로 바꾸고, 매일 돌아가게 만듭니다.',
    solo: 'StyleSeller · 혼자 설계·개발·운영',
    intro: 'StyleSeller work tool 안에 제안서 기능을 만들고, 거래처 AI 응대·메일 학습·운영 자동화를 설계·개발·운영합니다.',
    company: 'StyleSeller · 크리에이터 셀러와 브랜드의 판매를 운영하는 커머스 플랫폼',
    pricingOverline: '프로젝트 01 · 업무 흐름 설계 · work tool',
    pricingTitle: 'work tool 안의 제안서 기능.',
    pricingSummary: '별도 서비스가 아니라 StyleSeller work tool 안에 있는 기능입니다. 벤더용·셀러용 흐름을 나누고, 코드로 금액을 계산해 생성·발송 요청을 기록합니다.',
    pricingProof: '실무자와 가격 예시 43개 확인',
    pricingScale: 'work tool 화면 14개',
    vendorOverline: '프로젝트 02 · 근거 기반 에이전트 · 사람 이관',
    vendorTitle: '근거 있는 문의는 답하고, 예외 이관은 기능 스위치로 통제.',
    vendorSummary: '이관을 켜면 전체 대화가 설정된 Slack 수신자에게 가고, 답장은 직원 Mac의 카카오톡 발송 큐로 이어집니다.',
    vendorInputNote: '거래처가 보낸 질문',
    vendorStatus: '이관 시 · Slack 답장 → 카카오톡 큐',
    vendorGuard: ['거래처별 대화 분리', '이관 on/off 설정', 'Slack 답장은 카카오톡 큐로'],
    emailOverline: '프로젝트 03 · 피드백 루프 · RAG + 스타일북',
    emailTitle: '직원의 수정이 다음 메일 초안의 지식이 됩니다.',
    emailSummary: '보낸 답변과 원문은 RAG에 쌓입니다. 사실 교정은 지식으로, 말투 수정은 스타일북으로 반영해 다음 초안이 검색합니다.',
    emailKnowledge: '답변·교정 저장',
    emailKnowledgeNote: 'RAG + 스타일북',
    emailHumanNote: '다음 초안에서 검색',
    sparkOverline: '프로젝트 04 · 데이터 연결 · 승인 게이트',
    sparkTitle: '업무 데이터 네 곳을 연결하고, 쓰기는 승인 뒤에.',
    sparkSummary: '네 곳의 업무 자료를 한 번에 검색합니다. 자료를 바꾸려면 직원이 먼저 승인해야 합니다.',
    sparkSources: ['가격표', '거래처', '캠페인', '업무 기록'],
    sparkAnswer: '답 찾기',
    sparkGateNote: '바꾸기 전 확인',
    fleetOverline: '프로젝트 05 · 프로덕션 운영 · 직원 PC 11대',
    fleetTitle: '직원 PC 11대 배포와 업데이트까지 직접 운영.',
    fleetSummary: '자동으로 업데이트하고, 중요한 데이터 비밀번호는 직원 컴퓨터에 저장하지 않습니다.',
    fleetScale: '직원 컴퓨터 11대',
    visualSite: 'StyleSeller 업무 사이트',
    visualSection: 'work tool · 제안서',
    visualVendor: '벤더용',
    visualSeller: '셀러용',
    visualMenu: ['상품', '제안서', '벤더', '셀러'],
    visualProposalTitle: '제안서 기능',
    visualEdit: '제안 내용 수정',
    visualPrice: '코드가 금액 재계산',
    visualVersionHistory: '작업 수정본 비교',
    visualHistoryLabel: '업무 기록',
    visualSendHistory: '제안서 생성 · 발송 요청',
    visualMessage: '카카오톡 문의',
    visualSeparate: '챗봇이 대부분 답변',
    visualStaff: '설정된 수신자 · Slack',
    visualSearch: '확인·수정해 발송',
    visualDraft: '다음 비슷한 메일',
    visualRecords: '업무 자료 네 곳',
    visualAnswer: '답 찾기',
    visualApprove: '직원 승인',
    visualInstall: '업무 시스템 배포',
    visualComputers: '직원 컴퓨터',
    visualUpdate: '자동 업데이트',
    visualChapters: ['제안서', '카톡 문의', '메일 초안', '자료 검색', '컴퓨터 관리'],
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
            <p className="intro">{text.intro}</p>
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
              <div className="scene scene--pricing">
                <div className="scene-caption">
                  <strong>{text.pricingOverline}</strong>
                  <span className="caption-state">01 / 05</span>
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
                          <span>{text.visualVersionHistory}</span>
                          <span>{text.visualSendHistory}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-proof">
                    <span className="proof-chip">{text.pricingProof}</span>
                    <span className="proof-copy">{text.pricingScale}</span>
                  </div>
                </div>
              </div>

              <div className="scene scene--vendor">
                <div className="scene-caption">
                  <strong>{text.vendorOverline}</strong>
                  <span className="caption-state">02 / 05</span>
                </div>
                <h2 className="project-title">{text.vendorTitle}</h2>
                <p className="project-summary">{text.vendorSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <span className="visual-chat-bubble">{text.visualMessage}</span>
                      <strong>{text.vendorInputNote}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.visualSeparate}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.visualStaff}</strong>
                      <small>{text.vendorStatus}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene scene--email">
                <div className="scene-caption">
                  <strong>{text.emailOverline}</strong>
                  <span className="caption-state">03 / 05</span>
                </div>
                <h2 className="project-title">{text.emailTitle}</h2>
                <p className="project-summary">{text.emailSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <div className="visual-file-stack"><i /><i /><i /></div>
                      <strong>{text.visualSearch}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.emailKnowledge}</strong>
                      <small>{text.emailKnowledgeNote}</small>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.visualDraft}</strong>
                      <small>{text.emailHumanNote}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene scene--spark">
                <div className="scene-caption">
                  <strong>{text.sparkOverline}</strong>
                  <span className="caption-state">04 / 05</span>
                </div>
                <h2 className="project-title">{text.sparkTitle}</h2>
                <p className="project-summary">{text.sparkSummary}</p>
                <div className="project-visual">
                  <div className="visual-track">
                    <div className="visual-card">
                      <div className="visual-databases">{text.sparkSources.map((source) => <i key={source} title={source} />)}</div>
                      <strong>{text.visualRecords}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card accent">
                      <strong>{text.visualAnswer}</strong>
                    </div>
                    <span className="visual-arrow" aria-hidden="true">→</span>
                    <div className="visual-card">
                      <strong>{text.visualApprove}</strong>
                      <small>{text.sparkGateNote}</small>
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
                      <div className="visual-pcs">{Array.from({ length: 11 }, (_, index) => <i key={index} />)}</div>
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
          <li>{text.pricingOverline}: {text.pricingTitle} {text.pricingSummary} {text.pricingProof}</li>
          <li>{text.vendorOverline}: {text.vendorTitle} {text.vendorSummary} {text.vendorGuard.join(', ')}</li>
          <li>{text.emailOverline}: {text.emailTitle} {text.emailSummary} {text.emailKnowledgeNote}</li>
          <li>{text.sparkOverline}: {text.sparkTitle} {text.sparkSummary} {text.sparkGateNote}</li>
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
