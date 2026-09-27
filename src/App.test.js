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
  expect(screen.getByText(/I built AI tools a real team uses every day/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('AI picks what to change. The app works out the price.');
  expect(projectTranscript).toContain('Partners ask in KakaoTalk.');
  expect(projectTranscript).toContain('Find the right company notes and draft the email.');
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
  expect(screen.getByText(/직원이 매일 쓰는 AI 업무 도구를 만들었습니다/)).toBeInTheDocument();
  const projectTranscript = document.querySelector('.project-transcript').textContent;
  expect(projectTranscript).toContain('AI는 바꿀 값만 고르고, 앱이 가격을 계산합니다.');
  expect(projectTranscript).toContain('카톡 문의를 모으고, 직원이 확인한 뒤 답합니다.');
  expect(projectTranscript).toContain('회사 자료를 찾아, 답장 초안을 만듭니다.');
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
