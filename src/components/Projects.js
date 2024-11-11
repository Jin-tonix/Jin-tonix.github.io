import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #222;
  padding: 20px;
  margin-left: 15vw; /* 사이드바의 너비 */
  width: calc(100vw - 15vw); /* 사이드바를 제외한 나머지 공간 */
  
  @media (max-width: 1024px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw); /* 화면 크기에 맞춰 너비 조정 */
  }

  @media (max-width: 768px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);
  }

  @media (max-width: 480px) {
    margin-left: 30vw;
    width: calc(100vw - 30vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }

`;

const Title = styled.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 30px;
  animation: ${fadeInUp} 1s ease;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 두 개씩 정렬 */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 두 개씩 정렬 */
  }
`;
const ProjectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: auto; /* 높이를 auto로 설정하여 Description과 겹치지 않도록 */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const ProjectBox = styled(Link)`
  width: 100%;
  height: 150px;
  background-color: #333;
  border: 2px solid #444;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #555;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const Description = styled.div`
  margin-top: 8px; /* 이미지 박스와의 간격 */
  font-size: 1em;
  color: #ddd;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Title>Portfolio</Title>
      <PortfolioGrid>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project1">
            <img src="/images/logo1.png" alt="Project 1" />
          </ProjectBox>
          <Description>전직시<br/>(전지적구직자시점)</Description>
        </ProjectBoxWrapper>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project2">
            <img src="/images/logo2.png" alt="Project 2" />
          </ProjectBox>
          <Description>Flux</Description>
        </ProjectBoxWrapper>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project3">
            <img src="/images/logo3.png" alt="Project 3" />
          </ProjectBox>
          <Description>Briefify</Description>
        </ProjectBoxWrapper>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project4">
            <img src="/path/to/image4.jpg" alt="Project 4" />
          </ProjectBox>
          <Description>Project 4</Description>
        </ProjectBoxWrapper>
      </PortfolioGrid>
    </Container>
  );
};

export default Projects;
