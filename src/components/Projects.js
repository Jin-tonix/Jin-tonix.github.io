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
  padding: 10px 20px;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  
  @media (max-width: 1024px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 768px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 480px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); /* 열 너비 조정 */
  width: 80%;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px; /* 박스의 너비를 줄여 전체 레이아웃을 조밀하게 */
  height: auto;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: 110px;
  }

  @media (max-width: 480px) {
    width: 90px;
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
  margin-top: 8px;
  font-size: 1em;
  color: #ddd;
  text-align: center;
  height: 2.5em; /* 일정한 높이 고정 */

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
      <Title>Portfolio</Title><br/><br/>
      <PortfolioGrid>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project5">
            <img src="/images/logo5.png" alt="Project 5" />
          </ProjectBox>
          <Description>We:Review</Description>
        </ProjectBoxWrapper>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project4">
            <img src="/images/logo4.png" alt="Project 4" />
          </ProjectBox>
          <Description>FitChecker</Description>
        </ProjectBoxWrapper>
        <ProjectBoxWrapper>
          <ProjectBox to="/projects/project3">
            <img src="/images/logo3.png" alt="Project 3" />
          </ProjectBox>
          <Description>Briefify</Description>
        </ProjectBoxWrapper>
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
      </PortfolioGrid>
    </Container>
  );
};

export default Projects;
