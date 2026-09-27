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
  expect(screen.getByText(/I build AI systems teams use every day/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('Two proposal flows, built into brand-tool.');
  expect(projectTranscript).toContain('Edit either version and recalculate prices in code. Compare working revisions; created proposals and send requests are recorded.');
  expect(projectTranscript).toContain('Routine questions get an answer; unresolved handoff is controlled by a feature flag.');
  expect(projectTranscript).toContain('When enabled, the full thread goes to the configured Slack recipient; a reply becomes a KakaoTalk send job.');
  expect(projectTranscript).toContain('A staff-edited reply shapes the next similar email draft.');
  expect(projectTranscript).toContain('Sent replies pair with the inquiry in RAG; factual corrections update knowledge, and style edits update the stylebook.');
  expect(projectTranscript).toContain('Ask once, search four kinds of business information.');
  expect(projectTranscript).toContain('Install and update work tools on 11 staff computers.');
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
  expect(screen.getByText(/직원이 매일 쓰는 AI 업무 시스템을 만듭니다/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('brand-tool 안에서 벤더용·셀러용 제안서를 각각 관리합니다.');
  expect(projectTranscript).toContain('금액은 코드가 다시 계산합니다. 작업 중 수정본은 비교하고, 생성·발송 요청 기록은 업무 웹에 남깁니다.');
  expect(projectTranscript).toContain('금액은 코드가 다시 계산합니다.');
  expect(projectTranscript).toContain('챗봇은 일반 문의에 답하고, 미해결 건의 Slack 이관은 기능 스위치로 제어합니다.');
  expect(projectTranscript).toContain('이관을 켜면 전체 대화가 설정된 Slack 수신자에게 가고, 답장은 직원 Mac의 카카오톡 발송 큐로 이어집니다.');
  expect(projectTranscript).toContain('직원이 고친 답장을 다음 비슷한 메일에 반영합니다.');
  expect(projectTranscript).toContain('보낸 답변과 원문은 RAG에 쌓입니다. 사실 교정은 지식으로, 말투 수정은 스타일북으로 반영해 다음 초안이 검색합니다.');
  expect(projectTranscript).toContain('업무 자료 네 곳을 한 번에 찾고, 변경은 승인 뒤에 합니다.');
  expect(projectTranscript).toContain('직원 컴퓨터 11대에 업무 도구를 설치하고 관리합니다.');
  expect(screen.getByText(/설계부터 운영까지 혼자 맡는 AI 엔지니어/)).toBeInTheDocument();
  expect(screen.getByText('매일 쓰는 AI 도우미')).toBeInTheDocument();
  expect(screen.getByText('함께 움직이는 프로젝트 코드')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '경력기술서 (PDF)' })).toHaveAttribute(
    'href',
    '/resume/Career_Jinhee_Mok_KO.pdf'
  );
});
