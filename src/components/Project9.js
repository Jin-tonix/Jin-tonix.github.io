import React from 'react';

import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';

const PageWrapper = styled.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 15vw;
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.6em, 1vw, 1em);
  max-height: 100vh;
  overflow: auto;
  padding-left: 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px);
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em);
    font-weight: bold;
    color: #ffd700;
  }
`;

const SubHeader = styled.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`;

const ContentSection = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  a {
    display: block;
  }

  img {
    width: 100%;
    max-width: 640px;
    border: 3px solid #333;
    border-radius: 5px;
    object-fit: contain;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 280px;
    }
  }
`;

const TextSection = styled.div`
  flex: 2.5;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HorizontalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Section = styled.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul {
      font-size: 0.8em;
    }
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Footer = styled.footer`
  width: 100%;
  text-align: left;
  font-size: 0.9em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

  a {
    color: #ffd700;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Project9 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo9.png" alt="Project Logo" />
          <div>
            <h1>현장 자동화 — Instagram DM · KakaoTalk · 직원 PC</h1>
            <SubHeader>- Solo Project (2026.02 ~ 현재): 크롬 확장·macOS CLI·설치기·원격 관제 개발 (1인)</SubHeader>
          </div>
        </Header>

        <HorizontalSection>
          <Section>
            <h3>개발 주요 사항</h3>
            <ul>
              <li>Instagram DM 크롬 확장 (MV3): 작업 큐 기반 맞춤 DM, 지역별 발송, 매일 도는 DOM 자가 점검 에이전트</li>
              <li>KakaoTalk CLI (Swift, 오픈소스 fork 확장): 실시간 수신 동기화, 발송 후 도착 확인, 이미지·PDF 발송</li>
              <li>맥·윈도우 한 줄 설치기, 자동 갱신, 원격 관제 대시보드</li>
              <li>오픈채팅 공동구매 공지 자동 발송 (템플릿 이미지 합성)</li>
            </ul>
          </Section>

          <Section>
            <h3>기술 스택</h3>
            <SkillsList>
              <li>JavaScript</li>
              <li>Chrome Extension MV3</li>
              <li>Chrome DevTools Protocol</li>
              <li>Swift</li>
              <li>macOS Accessibility API</li>
              <li>Node.js</li>
              <li>Playwright</li>
              <li>Supabase</li>
              <li>n8n</li>
              <li>Gemini Vision</li>
              <li>Bash/PowerShell</li>
            </SkillsList>
          </Section>
        </HorizontalSection>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj9-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj9-1.png" alt="현장 자동화 시스템 구성도" />
            </a>
          </ImagesSection>

          <TextSection>
            <Section>
              <h3>프로젝트 배경</h3>
              <p>
                인스타그램 DM 과 개인 카카오톡은 공식 API 가 없다. 직원들은 같은 문구를 복사해 붙이고, 대화 기록은 각자의 PC 에만 남았다.
                서버에서 돌릴 수 없으니 직원 PC 를 자동화 노드로 삼고, 그 PC 들을 안전하게 배포·갱신·관제하는 체계가 필요했다.
              </p>
            </Section>

            <Section>
              <h3>규모 (git 실측 · 운영 기록)</h3>
              <ul>
                <li>Instagram DM 확장: 소스 약 1.5만 줄 + 테스트 약 1만 줄</li>
                <li>KakaoTalk CLI 본인 커밋 81개 (Swift 3.9천 → 6.6천 줄)</li>
                <li>카톡 실시간 동기화 직원 11명, 셀러찾기 워커 PC 9대 운영</li>
              </ul>
            </Section>

            <Section>
              <h3>핵심 트러블슈팅</h3>
              <p>
                <strong>1. 인스타그램 입력창에 글자가 제대로 안 들어가던 문제</strong><br/>
                신뢰된 사용자 입력만 받는 에디터가 원인이었다. Chrome DevTools Protocol 로 실제 키 입력 이벤트를 보내는 방식으로 바꿨다.
                화면 구조가 바뀔 때를 대비해 매일 도는 점검 에이전트(Playwright + Claude Code)가 발송 경로를 확인하고 고치게 했다.
              </p>
              <p>
                <strong>2. 카카오톡 발송 작업의 21% 가 영구 실패하던 문제</strong><br/>
                창 상태를 묻는 접근성 호출이 멈추면 작업이 끝나지 않았다.
                하드 타임아웃 워치독을 넣고 발송 후 도착 여부를 다시 확인하게 했다.
              </p>
              <p>
                <strong>3. 오픈채팅 발송이 사흘 동안 조용히 실패한 문제</strong><br/>
                권한 문제가 아니라 카톡 메인 창이 없는 상태로 굳은 것이었고, 실패를 알릴 경로가 없었다.
                발송기 재시작 후 1회 재시도, 실패 사유를 담은 슬랙 알림, 발송 직후 감시 크론을 추가했다.
              </p>
              <p>
                <strong>4. 수집 속도와 발송 속도 개선</strong><br/>
                최소화된 창의 타이머 제한을 우회해 리뷰 1,000건 수집을 100분 → 2분 30초로 줄였다.
                오픈채팅 발송 대기를 고정 sleep 에서 상태 확인 폴링으로 바꿔 27초 → 11초로 줄였다.
              </p>
            </Section>

            <Section>
              <h3>AI 협업 방식</h3>
              <p>
                "한 번 못 찾은 건 없는 게 아니다", "이미지 날짜가 아니라 도는 코드의 해시로 판정한다" 같은 검증 원칙을 사고마다 정리해 다음 작업에 적용했다.
              </p>
            </Section>
          </TextSection>
        </ContentSection>

        <Footer>
          <a href="https://github.com/Jin-tonix/homebrew-tap" target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '5px' }} />
            <FaGithub style={{ marginRight: '5px' }} /> homebrew-tap - GitHub Repository
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project9;
