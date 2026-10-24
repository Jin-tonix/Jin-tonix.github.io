import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the English portfolio hero and accessible showreel controls', () => {
  render(
    <MemoryRouter initialEntries={['/en']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /Jinhee Mok/ })).toBeInTheDocument();
  expect(screen.getByText(/I build AI work systems that staff use every day/)).toBeInTheDocument();
  const captions = [...document.querySelectorAll('.scene-caption strong')].map((n) => n.textContent);
  expect(captions).toEqual([
    'Status Board',
    'Vendor CS Agent',
    'Internal Work Tool',
    'Knowledge Hub · Email Agent',
    'Agent Platform · Spark',
    'Content Autopilot',
    'Staff PC Fleet',
  ]);
  expect(document.querySelectorAll('.caption-state')[6].textContent).toBe('07 / 07');
  expect(document.querySelector('.film-stage').textContent).not.toMatch(/[가-힣]/);
  expect(screen.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:jinheemok815@gmail.com');
  expect(screen.getByText('shared skills used by all agents')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Career description (PDF)' })).toHaveAttribute(
    'href',
    '/files/career-description-en.pdf'
  );

  fireEvent.click(screen.getByRole('button', { name: 'Pause' }));
  expect(screen.getByRole('button', { name: 'Resume' })).toHaveAttribute('aria-pressed', 'true');
  expect(document.querySelector('.film-stage')).toHaveClass('is-paused');

  fireEvent.click(screen.getByRole('button', { name: 'Replay' }));
  expect(screen.getByRole('button', { name: 'Pause' })).toHaveAttribute('aria-pressed', 'false');
  expect(document.querySelector('.film-stage')).not.toHaveClass('is-paused');

  fireEvent.animationEnd(document.querySelector('.timeline-fill'));
  expect(screen.queryByRole('button', { name: 'Pause' })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Replay' })).toBeInTheDocument();
});

test('shows seven Korean case slides, the new stats, and the résumé link on the Korean route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /목진희/ })).toBeInTheDocument();
  expect(screen.getByText('직원이 매일 쓰는 AI 업무 시스템을 만들고, 사람이 확정하는 구조로 운영합니다')).toBeInTheDocument();
  const captions = [...document.querySelectorAll('.scene-caption strong')].map((n) => n.textContent);
  expect(captions).toEqual([
    '현황판',
    '벤더 CS 에이전트',
    '사내 업무툴',
    'LightRAG 지식 허브·메일 에이전트',
    '에이전트 플랫폼·Spark',
    '콘텐츠 오토파일럿',
    '직원 PC 배포·운영',
  ]);
  expect(document.querySelector('.scene--0 .project-title').textContent).toBe(
    '상대 한 곳을 고르면 카톡·메일·주문서가 한 달력에, 352곳의 거래 단계가 한 화면에 보입니다'
  );
  expect(document.querySelector('.film-stage').textContent).not.toContain('카탈로그에서');
  const values = [...document.querySelectorAll('.metric-value')].map((n) => n.textContent);
  expect(values).toEqual(['352곳', '109개', '13개', '11대']);
  expect(screen.getByText('에이전트가 같이 쓰는 공용 스킬')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '경력기술서 (PDF)' })).toHaveAttribute(
    'href',
    '/files/career-description-ko.pdf'
  );
});

test('organizes the Korean How I Build page into balanced, readable cards', () => {
  render(
    <MemoryRouter initialEntries={['/how-i-build']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { level: 1, name: 'How I Build with AI' })).toBeInTheDocument();
  expect(screen.getByText('설계·개발·운영 담당. 코드는 Claude Code로 쓰고, 아키텍처·규칙·검증·롤아웃은 직접 판단했습니다.')).toBeInTheDocument();
  expect(screen.getByText(/네 저장소 본인 커밋 합계는 7,276개입니다/)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '하네스 — 에이전트 실수를 규칙으로 막기' })).toBeInTheDocument();
  expect(document.querySelectorAll('.harness-grid article')).toHaveLength(6);
  expect(screen.getByRole('heading', { name: 'CLAUDE.md·규칙 파일' })).toBeInTheDocument();
  expect(document.querySelectorAll('.caught-grid article')).toHaveLength(3);
  expect(document.querySelectorAll('.lessons-grid article')).toHaveLength(5);
});
