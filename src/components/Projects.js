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
  height: 100vh;
  background-color: #222;
  padding: 20px;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  max-width: calc(100vw - 200px);
`;

const Title = styled.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 50px;
  animation: ${fadeInUp} 1s ease;
  text-align: center;
`;

const PortfolioGrid = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const ProjectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  max-width: 250px;
`;

const ProjectBox = styled(Link)`
  width: 100%;
  height: 250px;
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
    object-position: center; /* 중심을 기준으로 표시 */
    border-radius: 8px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 1em;
  color: #ddd;
  text-align: center;
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
          <Description>전직시(전지적구직자시점)</Description>
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
