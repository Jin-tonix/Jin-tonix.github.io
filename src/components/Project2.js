import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  PageWrapper,
  Container,
  Header,
  SubHeader,
  ContentSection,
  ImagesSection,
  TextSection,
  HorizontalSection,
  Section,
  SkillsList,
  Footer,
} from './ui/CaseStudyKit';
import imgAttrs from './ui/imgAttrs';

const Project2 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo2.png" {...imgAttrs('/images/logo2.png', { eager: true })} alt="Project Logo" />
          <div>
            <h1>FLUX - 아티스트 경매 플랫폼 개발</h1>
            <SubHeader>- Team Project (2024.07.15 ~ 08.16): Market Page 및 My Page 전반 구현</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj2-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj2-1.png" {...imgAttrs('/images/proj2-1.png')} alt="Main Page" />
            </a>
            <a href="/images/proj2-2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj2-2.png" {...imgAttrs('/images/proj2-2.png')} alt="User Login" />
            </a>
            <a href="/images/proj2-3.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj2-3.png" {...imgAttrs('/images/proj2-3.png')} alt="Notice Board" />
            </a>
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
