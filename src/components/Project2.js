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
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    max-height: 140px; /* 높이 제한 추가 */
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 80px; /* 작은 화면에서 높이 제한 추가 */
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
            <h1>FLUX - 아티스트들의 작품을 거래할 수 있는 온라인 경매 웹 서비스 개발</h1>
            <SubHeader>- Team Project (2024.07.15 ~ 08.07(기간연장 08.16)): 프론트 MyPage 및 AI 모델 검색</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <img src="/images/proj2-1.png" alt="메인" />
            <img src="/images/proj2-2.png" alt="회원가입/로그인" />
            <img src="/images/proj2-3.png" alt="공지사항" />
          </ImagesSection>

          <TextSection>
            <HorizontalSection>
              <Section>
                <h3>개발 주요 사항</h3>
                <ul>
                  <li>Spring 프레임워크를 활용한 백엔드 서버 개발</li>
                  <li>Vue.js 프레임워크를 활용한 프론트엔드 서버 개발</li>                 
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
              본 프로젝트는 예술가들의 작품, 상품등의 온라인 경매 웹 애플리케이션을 개발하는 것을 목표로 하였습니다. 백엔드는 안정성과 확장성을 갖춘 
Spring 프레임워크를 활용하여 구현되었으며, 프론트엔드는 사용자 친화적인 Vue.js 프레임워크를 사용하여 구축되었습니다. 이를 통해 사용자에게 매끄러운 경매 경험을 제공하는 것을 목표로 합니다.</p>
            </Section>

            <Section>
              <h3>개발 관련 설명</h3>
              <p>
                

              </p>
            </Section>
          </TextSection>
        </ContentSection>

        <Footer>
          <a href="https://github.com/Flux2024" target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '5px' }} />
            <FaGithub style={{ marginRight: '5px' }} /> FLUX - GitHub Repository 
          </a>
        </Footer>
      </Container>
    </PageWrapper>
  );
};

export default Project2;
