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
  expect(screen.getByText(/I turn repetitive work into AI systems/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('Proposal workflows inside the work tool.');
  expect(projectTranscript).toContain('Not a separate product: this is a feature inside StyleSeller’s work tool.');
  expect(projectTranscript).toContain('Grounded answers for routine questions; gated handoff for the rest.');
  expect(projectTranscript).toContain('When enabled, the full thread goes to the configured Slack recipient; a reply becomes a KakaoTalk send job.');
  expect(projectTranscript).toContain('Staff edits become knowledge for the next similar email.');
  expect(projectTranscript).toContain('Sent replies pair with the inquiry in RAG; factual corrections update knowledge, and style edits update the stylebook.');
  expect(projectTranscript).toContain('One question searches four work data sources.');
  expect(projectTranscript).toContain('Own deployment and updates across 11 staff computers.');
  expect(document.querySelector('.brandtool-window').textContent).toContain('Proposal feature');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool · Proposals');
  expect(document.querySelector('.brandtool-window').textContent).toContain('Vendor version');
  expect(document.querySelector('.brandtool-window').textContent).toContain('Seller version');
  expect(document.querySelector('.film-stage').textContent).not.toContain('brand-tool');
  expect(screen.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:jinheemok815@gmail.com');
  expect(screen.getByText('AI helpers in daily use')).toBeInTheDocument();
  expect(screen.getByText('connected code projects')).toBeInTheDocument();

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
  expect(screen.getByText(/반복 업무를 AI 시스템으로 바꾸고/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('work tool 안의 제안서 기능.');
  expect(projectTranscript).toContain('별도 서비스가 아니라 StyleSeller work tool 안에 있는 기능입니다.');
  expect(projectTranscript).toContain('코드로 금액을 계산해 생성·발송 요청을 기록합니다.');
  expect(projectTranscript).toContain('근거 있는 문의는 답하고, 예외 이관은 기능 스위치로 통제.');
  expect(projectTranscript).toContain('이관을 켜면 전체 대화가 설정된 Slack 수신자에게 가고, 답장은 직원 Mac의 카카오톡 발송 큐로 이어집니다.');
  expect(projectTranscript).toContain('직원의 수정이 다음 메일 초안의 지식이 됩니다.');
  expect(projectTranscript).toContain('보낸 답변과 원문은 RAG에 쌓입니다. 사실 교정은 지식으로, 말투 수정은 스타일북으로 반영해 다음 초안이 검색합니다.');
  expect(projectTranscript).toContain('업무 데이터 네 곳을 연결하고, 쓰기는 승인 뒤에.');
  expect(projectTranscript).toContain('직원 PC 11대 배포와 업데이트까지 직접 운영.');
  expect(document.querySelector('.brandtool-window').textContent).toContain('제안서 기능');
  expect(document.querySelector('.brandtool-window').textContent).toContain('work tool · 제안서');
  expect(document.querySelector('.film-stage').textContent).not.toContain('brand-tool');
  expect(screen.getByText(/설계부터 운영까지 혼자 맡는 AI 엔지니어/)).toBeInTheDocument();
  expect(screen.getByText('매일 쓰는 AI 도우미')).toBeInTheDocument();
  expect(screen.getByText('함께 움직이는 프로젝트 코드')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '경력기술서 (PDF)' })).toHaveAttribute(
    'href',
    '/resume/Career_Jinhee_Mok_KO.pdf'
  );
});
