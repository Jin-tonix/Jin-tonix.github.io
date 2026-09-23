// Projects.js 의 그리드 카드 패턴을 재사용 가능한 형태로 추출.
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #222;
  padding: 30px 20px;
  margin-left: 0;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const GroupTitle = styled.h2`
  width: 80%;
  color: #888;
  font-size: clamp(0.8em, 1.4vw, 1em);
  font-weight: normal;
  text-align: left;
  margin: 20px 0 10px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const GroupIntro = styled.p`
  width: 80%;
  color: #ccc;
  font-size: clamp(0.75em, 1.2vw, 0.9em);
  line-height: 1.6;
  margin: 0 0 10px;
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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

export const SmallPortfolioGrid = styled(PortfolioGrid)`
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
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

export const SmallProjectBoxWrapper = styled(ProjectBoxWrapper)`
  width: 110px;

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 480px) {
    width: 75px;
  }
`;

export const ProjectBox = styled(Link)`
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

export const SmallProjectBox = styled(ProjectBox)`
  height: 110px;

  @media (max-width: 768px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 75px;
  }
`;

export const Description = styled.div`
  margin-top: 8px;
  font-size: 1em;
  color: #ddd;
  text-align: center;
  height: 2.5em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

export const Connection = styled.div`
  margin-top: 2px;
  font-size: 0.75em;
  color: #ffd700;
  text-align: center;
  opacity: 0.85;
`;
