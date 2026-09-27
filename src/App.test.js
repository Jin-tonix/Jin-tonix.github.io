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
  expect(screen.getByText(/AI parses the catalog\. Code owns the price/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('One internal work tool handles product parsing, pricing, partner matching, and KakaoTalk.');
  expect(projectTranscript).toContain('Gemini reads PDFs, images, slides, spreadsheets, and URLs');
  expect(projectTranscript).toContain('AI edits requested fields. Code recalculates every price.');
  expect(projectTranscript).toContain('checked 43 calculation cases with staff');
  expect(projectTranscript).toContain('An LLM scores 30 candidates at a time; 5+/10 qualifies for staff review.');
  expect(projectTranscript).toContain('A failed CRM lookup is never a confirmed zero.');
  expect(projectTranscript).toContain('Substitutes require a successful empty result, not a failed lookup.');
  expect(projectTranscript).toContain('500+ recipients · approval hold');
  expect(projectTranscript).toContain('one account per PC, capped actions, no automated DMs.');
  expect(document.querySelector('.proof-number strong').textContent).toBe('43');
  expect([...document.querySelectorAll('.scene-caption strong')][0].textContent).toContain('01 · SUPPLIER CATALOG');
  expect([...document.querySelectorAll('.scene-caption strong')][2].textContent).toContain('03 · SALES-PARTNER MATCHING');
  expect([...document.querySelectorAll('.scene-caption strong')][4].textContent).toContain('05 · DEPLOYMENT');
  expect(projectTranscript).toContain('9 seller-finder PCs · 1 off');
  expect(document.querySelector('.brandtool-window').textContent).toContain('Proposal feature');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool · Proposals');
  expect(document.querySelector('.brandtool-window').textContent).toContain('Vendor version');
  expect(document.querySelector('.brandtool-window').textContent).toContain('Seller version');
  expect(document.querySelector('.film-stage').textContent).not.toContain('brand-tool');
  expect(screen.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:jinheemok815@gmail.com');
  expect(screen.getByText('AI systems in daily operation')).toBeInTheDocument();
  expect(screen.getByText('codebases working as one system')).toBeInTheDocument();

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

test('keeps the Korean hero copy and résumé link on the Korean route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /목진희/ })).toBeInTheDocument();
  expect(screen.getByText(/상품은 AI가 읽고, 가격은 코드가 책임집니다/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('사내 work tool에서 상품 파싱·가격 계산·파트너 매칭·카톡을 운영합니다.');
  expect(projectTranscript).toContain('PDF·이미지·PPT·엑셀·URL을 Gemini가 읽어 상품 데이터로 구조화');
  expect(projectTranscript).toContain('AI는 요청 필드만 수정. 가격은 코드가 재계산.');
  expect(projectTranscript).toContain('실무자와 계산 43건을 대조했습니다.');
  expect(projectTranscript).toContain('LLM이 30개씩 0~10점 판정하고, 5점 이상을 직원이 검토합니다.');
  expect(projectTranscript).toContain('CRM 조회 실패를 ‘결과 0건’으로 보지 않습니다.');
  expect(projectTranscript).toContain('대체 상품은 CRM 조회가 성공하고 0건일 때만 붙입니다.');
  expect(projectTranscript).toContain('500명 이상 · 승인 대기');
  expect(projectTranscript).toContain('계정당 PC 1대, 행동 상한, 자동 DM 없음.');
  expect(document.querySelector('.proof-number strong').textContent).toBe('43');
  expect([...document.querySelectorAll('.scene-caption strong')][0].textContent).toContain('01 · 공급사 카탈로그');
  expect([...document.querySelectorAll('.scene-caption strong')][2].textContent).toContain('03 · 판매 파트너사 매칭');
  expect([...document.querySelectorAll('.scene-caption strong')][4].textContent).toContain('05 · 배포와 운영');
  expect(projectTranscript).toContain('셀러찾기 PC 9대 · 1대 중지');
  expect(document.querySelector('.brandtool-window').textContent).toContain('제안서 기능');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool · 제안서');
  expect(document.querySelector('.film-stage').textContent).not.toContain('brand-tool');
  expect(document.querySelector('.intro').textContent).toContain('사내 work tool에서 상품 파싱·가격 계산');
  expect(screen.getByText('매일 운영하는 AI 시스템')).toBeInTheDocument();
  expect(screen.getByText('한 시스템으로 연결된 코드베이스')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '경력기술서 (PDF)' })).toHaveAttribute(
    'href',
    '/resume/Career_Jinhee_Mok_KO.pdf'
  );
});

test('organizes the Korean How I Build page into balanced, readable cards', () => {
  render(
    <MemoryRouter initialEntries={['/how-i-build']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { level: 1, name: 'How I Build with AI' })).toBeInTheDocument();
  expect(screen.getByText('설계·개발·운영 1인. 코드는 Claude Code로 쓰고, 아키텍처·규칙·검증·롤아웃은 직접 판단했습니다.')).toBeInTheDocument();
  expect(screen.getByText(/네 저장소의 본인 커밋은 합 7,276개입니다/)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '하네스 — 에이전트 실수를 규칙으로 막기' })).toBeInTheDocument();
  expect(document.querySelectorAll('.harness-grid article')).toHaveLength(6);
  expect(screen.getByRole('heading', { name: 'CLAUDE.md·규칙 파일' })).toBeInTheDocument();
  expect(document.querySelectorAll('.caught-grid article')).toHaveLength(3);
  expect(document.querySelectorAll('.lessons-grid article')).toHaveLength(5);
});
