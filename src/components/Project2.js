import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

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
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    max-height: 140px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 80px;
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

const Project2 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo2.png" alt="Project Logo" />
          <div>
            <h1>FLUX - 아티스트 경매 플랫폼 개발</h1>
            <SubHeader>- Team Project (2024.07.15 ~ 08.16): Market Page 및 My Page 전반 구현</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <img src="/images/proj2-1.png" alt="Main Page" />
            <img src="/images/proj2-2.png" alt="User Login" />
            <img src="/images/proj2-3.png" alt="Notice Board" />
          </ImagesSection>

          <TextSection>
            <HorizontalSection>
              <Section>
                <h3>개발 주요 사항</h3>
                <ul>
                  <li>Spring Boot 기반의 RESTful API 설계 및 구현</li>
                  <li>Vue.js를 활용한 사용자 친화적 프론트엔드 UI 개발</li>
                  <li>경매 시간 및 가격 설정 기능을 포함한 My Page 개발</li>
                  <li>상품 목록에 페이지네이션 및 정렬 기능 추가</li>
                </ul>
              </Section>
              <Section>
                <h3>기술 스택</h3>
                <SkillsList>
                  <li>Spring Boot</li>
                  <li>JPA</li>
                  <li>MySQL</li>
                  <li>Vue.js</li>
                  <li>JavaScript</li>
                  <li>Docker</li>
                  <li>Git</li>
                </SkillsList>
              </Section>
            </HorizontalSection>

            <Section>
              <h3>프로젝트 개요</h3>
              <p>
                FLUX는 아티스트와 디자이너들이 상품을 사고팔 수 있는 경매 플랫폼입니다. 안정적이고 확장성 있는 Spring Boot 백엔드와
                사용자 친화적인 Vue.js 프론트엔드를 통해 사용자 경험을 극대화했습니다.
              </p>
            </Section>

            <Section>
              <h3>My Page 및 마켓 페이지 주요 개발</h3>
              <p>
                <strong>마켓 페이지:</strong> 상품 목록을 동적으로 표시하고, 검색 및 필터링 기능을 구현하여 사용자 경험을 극대화했습니다. Vuex로 상태를
                관리하며, Spring Boot 백엔드와 실시간 API 통신을 통해 데이터를 처리했습니다.
              </p>
              <p>
                <strong>My Page:</strong> Vue.js 기반의 입력 폼을 통해 상품 등록, 경매 시작 시간 및 가격 설정 기능을 구현했습니다. Spring Boot와 JPA를
                활용해 입력값을 데이터베이스에 저장하고, 정확한 경매 시작 시점을 계산하는 스케줄러를 구현했습니다.
              </p>
            </Section>

            <Section>
              <h3>트러블 슈팅 및 성과</h3>
              <ul>
                <li>Java Time API를 활용해 서버와 클라이언트 간 시간 동기화 문제를 해결.</li>
                <li>Task Scheduler를 활용하여 경매 시작 및 종료 프로세스를 자동화.</li>
                <li>경매 시작 시간과 가격 설정 등 복잡한 비즈니스 로직을 성공적으로 구현.</li>
              </ul>
              </Section>

          </TextSection>
        </ContentSection>

        <Footer>
          <a href="https://github.com/Flux2024" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: '5px' }} />
            FLUX - GitHub Repository
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project2;
