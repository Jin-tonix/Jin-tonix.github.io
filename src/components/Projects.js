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
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw);
  }

  @media (max-width: 480px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);
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
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

const ProjectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  max-width: 150px;

  @media (max-width: 768px) {
    width: 40%;
    max-width: 120px;
  }

  @media (max-width: 480px) {
    width: 60%;
    max-width: 100px;
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

  /* 화면이 768px 이하일 때 이미지 크기를 작게 설정 */
  @media (max-width: 768px) {
    height: 100px;
  }

  /* 화면이 480px 이하일 때 이미지 크기를 더욱 작게 설정 */
  @media (max-width: 480px) {
    height: 80px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
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
            <img src="/path/to/image3.jpg" alt="Project 3" />
          </ProjectBox>
          <Description>Project 3</Description>
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
