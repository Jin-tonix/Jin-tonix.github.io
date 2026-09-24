import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
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

const Project1 = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <img src="/images/logo1.png" {...imgAttrs('/images/logo1.png', { eager: true })} alt="Project Logo" />
          <div>
            <h1>자격증 기반 채용정보로 구직자의 취업 기회 발굴과 커리어 성장을 지원하는 웹/앱 서비스 개발</h1>
            <SubHeader>- Team Project (2024.08.26 ~ 10.02): 관리자 페이지 (프론트엔드/백엔드) 및 Flutter 앱 구현</SubHeader>
          </div>
        </Header>

        <ContentSection>
          <ImagesSection>
            <a href="/images/proj1-1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj1-1.png" {...imgAttrs('/images/proj1-1.png')} alt="채용/자격증 정보" />
            </a>
            <a href="/images/proj1-2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj1-2.png" {...imgAttrs('/images/proj1-2.png')} alt="회원가입/로그인" />
            </a>
            <a href="/images/proj1-3.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/proj1-3.png" {...imgAttrs('/images/proj1-3.png')} alt="Flutter 앱 화면" />
            </a>
          </ImagesSection>

          <TextSection>
            <HorizontalSection>
              <Section>
                <h3>개발 주요 사항</h3>
                <ul>
                  <li>Spring Boot 기반 백엔드 서버 개발</li>
                  <li>Vue.js를 이용한 프론트엔드 서버 개발</li>
                  <li>Flutter를 이용한 앱 서버 개발</li>
                </ul>
              </Section>

              <Section>
                <h3>기술 스택</h3>
                <SkillsList>
                  <li>Spring Boot</li>
                  <li>Spring Data</li>
                  <li>JPA</li>
                  <li>Spring Security</li>
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
              ‘전지적 구직자 시점(전직자)’는 공공데이터포털의 자격증 및 채용 API를 활용해 최신 채용 정보와 자격증 종류 및 시험 일정을 확인할 수 있는 기능을 지원하여 구직자들이 자격증과 연계된 채용 정보를 손쉽게 탐색하고 커리어를 효율적으로 발전시킬 수 있도록 합니다.
              </p>
            </Section>

            <Section>
              <h3>개발 관련 설명</h3>
              <p>
                본 프로젝트에서 관리자 페이지의 프론트/백엔드와 어플리케이션 구현을 담당하였습니다.
              </p>
              <p>
              1. 사용자 통계를 시각화하는 과정에서 데이터 처리에 어려움을 Spring Boot로 데이터 가공 후 Chart.js를 활용해 시각화.<br/>
              2. Flutter와 Spring Boot 간 엔드포인트 불일치로 오류가 발생하였지만 API 명세서와 테이블 정의서를 검토하며 수정.<br/>
              3. User/Admin Role 권한 관리와 CORS 설정에서 Spring Security와 CORS 설정을 학습하며 단계적으로 구현.<br/>
              </p>
              <p>이번 프로젝트를 통해 백엔드-프론트엔드 연동의 중요성을 깊이 이해할 수 있었습니다. 또한 개발 문서를 철저히 검토하고
                규칙을 준수하는 것이 프로젝트의 성공에 얼마나 큰 영향을 미치는지 체감할 수 있었습니다.
                이번 경험은 개발자로서 세심함과 꼼꼼함의 중요성을 배우는 소중한 계기가 되었습니다.</p>
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

export default Project1
