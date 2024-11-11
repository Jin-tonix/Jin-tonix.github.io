import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';

const PageWrapper = styled.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start; /* 상단에서 시작하도록 설정 */
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
  font-size: clamp(0.6em, 1vw, 1em); /* 최소값을 더 작게 설정 */
  max-height: 100vh; /* 높이 제한 */
  overflow: auto; /* 스크롤 가능하게 설정 */
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
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
    }
  }
`;

const TextSection = styled.div`
  flex: 2.5;

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
  font-size: 1em;
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
const Project4 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo1.png" alt="Project Logo" />
          <div>
            <h1>자격증 기반 채용정보로 구직자의 취업 기회 발굴과 커리어 성장을 지원하는 웹/앱 서비스 개발</h1>
            <SubHeader>- Team Project (2024.08.26 ~ 10.02): 관리자 페이지 (프론트엔드/백엔드) 및 Flutter 앱 구현</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <img src="/images/proj1-1.png" alt="채용/자격증 정보" />
            <img src="/images/proj1-2.png" alt="회원가입/로그인" />
            <img src="/images/proj1-3.png" alt="Flutter 앱 화면" />
          </ImagesSection>

          <TextSection>
            <HorizontalSection>
              <Section>
                <h3>개발 주요 사항</h3>
                <ul>
                  <li>Spring Boot 기반 백엔드 서버 개발</li>
                  <li>Vue.js를 이용한 프론트엔드 서버 개발</li>
                  <li>Flutter를 이용한 앱 서버 개발</li>
                  <li>JWT를 활용한 토큰 기반 사용자 인증과정 적용</li>
                  
                </ul>
              </Section>

              <Section>
                <h3>기술 스택</h3>
                <SkillsList>
                  <li>Spring Boot</li>
                  <li>Spring Data</li>
                  <li>JPA</li>
                  <li>Spring Security</li>
                  <li>JWT</li>
                  <li>MySQL</li>
                  <li>JavaScript</li>
                  <li>Vue3</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Flutter</li>
                </SkillsList>
              </Section>
            </HorizontalSection>

            <Section>
              <h3>살펴보기</h3>
              <p>
                '전지적 구직자 시점(전직자)'는 Vue3와 Spring을 기반으로 개발된 혁신적인 채용정보 사이트입니다.
                본 사이트는 공공데이터포털의 자격증 API와 채용 API를 활용하여, 최신 채용 정보를 신속하고 효율적으로 제공합니다.
                특히, 자격증과 관련된 채용정보를 즉시 확인할 수 있는 기능을 중점적으로 제공하여, 구직자들이 보다 쉽게 자신에게 적합한 채용 기회를 찾을 수 있도록 돕습니다.
              </p>
            </Section>

            <Section>
              <h3>개발 관련 설명</h3>
              <p>
                저는 관리자 페이지와 앱 프론트엔드 구현을 담당하였습니다. 관리자 페이지는 URL을 통해 접근할 수 있도록 설정하였으며, 회원 수, 최근 가입한 유저, 일일 및 월별 사용자 수를 한눈에 쉽게 확인할 수 있도록 그래프를 활용해 시각화하였습니다.

              </p>
              <p>
                백엔드와의 연결 과정에서 예상치 못한 엔드포인트와 컬럼 이름의 차이로 인해 오류를 발견하고 해결하는 데 시간이 걸렸습니다. 
                이 경험을 통해 API 명세서와 테이블 정의서 등 개발 문서를 꼼꼼히 작성하고, 정해진 규칙을 철저히 준수하는 것이 얼마나 중요한지 배울 수 있었습니다.

              </p>
            </Section>
          </TextSection>
        </ContentSection>

        <Footer>
          <a href="https://github.com/Omniscient-Job-Project" target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '5px' }} />
            <FaGithub style={{ marginRight: '5px' }} /> 전직시 (전지적구직자시점) - GitHub Repository 
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project4;
