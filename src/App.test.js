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
  expect(screen.getByText(/I engineer trust into AI systems that run in production/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('The LLM proposes fields. Code owns the price.');
  expect(projectTranscript).toContain('Vendor and seller proposals are flows inside one work tool—not separate products.');
  expect(projectTranscript).toContain('Price rules were checked against 43 real cases with staff.');
  expect(projectTranscript).toContain('Separate partner context. Never guess beyond evidence.');
  expect(projectTranscript).toContain('The Slack handoff is feature-flagged (off by default in source)');
  expect(projectTranscript).toContain('A sent correction improves the next relevant draft.');
  expect(projectTranscript).toContain('Sent replies pair with the inquiry in RAG; factual corrections update knowledge, and style edits update the stylebook.');
  expect(projectTranscript).toContain('Read across four databases. Gate every enabled write.');
  expect(projectTranscript).toContain('I ship and maintain systems across 11 staff PCs.');
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
  expect(screen.getByText(/AI를 믿고 맡길 수 있도록, 시스템을 설계합니다/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('LLM은 수정 필드만. 금액은 코드가 계산.');
  expect(projectTranscript).toContain('별도 서비스가 아닌 work tool 안의 벤더용·셀러용 제안 기능입니다.');
  expect(projectTranscript).toContain('가격 규칙을 실무자와 맞춘 43개 사례로 검증했습니다.');
  expect(projectTranscript).toContain('거래처별 맥락은 격리. 근거가 없으면 추측하지 않음.');
  expect(projectTranscript).toContain('Slack 이관은 코드에서 기본 꺼짐');
  expect(projectTranscript).toContain('사람이 고쳐 보낸 답장을 다음 초안에 반영.');
  expect(projectTranscript).toContain('보낸 답변과 원문은 RAG에 쌓입니다. 사실 교정은 지식으로, 말투 수정은 스타일북으로 반영해 다음 초안이 검색합니다.');
  expect(projectTranscript).toContain('DB 네 곳을 읽고, 실행 전 권한·승인을 재확인.');
  expect(projectTranscript).toContain('직원 PC 11대에 배포하고 업데이트까지 운영.');
  expect(document.querySelector('.brandtool-window').textContent).toContain('제안서 기능');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool · 제안서');
  expect(document.querySelector('.film-stage').textContent).not.toContain('brand-tool');
  expect(screen.getByText(/모델 판단·코드 검증·실행 통제를 설계합니다/)).toBeInTheDocument();
  expect(screen.getByText('매일 운영하는 AI 시스템')).toBeInTheDocument();
  expect(screen.getByText('한 시스템으로 연결된 코드베이스')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '경력기술서 (PDF)' })).toHaveAttribute(
    'href',
    '/resume/Career_Jinhee_Mok_KO.pdf'
  );
});
