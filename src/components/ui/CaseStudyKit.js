// Project5~9 에서 반복되던 case-study 레이아웃을 공유 컴포넌트로 추출한 것.
// 기존 페이지(Project1~5)는 건드리지 않고, 새 CaseStudy 페이지와 이후 재사용을 위해 둔다.
import styled from 'styled-components';

export const PageWrapper = styled.div`
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

export const Container = styled.div`
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

export const Header = styled.div`
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

export const SubHeader = styled.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`;

export const OneLiner = styled.p`
  font-size: clamp(0.85em, 1.5vw, 1em);
  color: #ccc;
  margin: 8px 0 4px;
`;

export const ContentSection = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  a {
    display: block;
  }

  img {
    width: 100%;
    max-width: 640px;
    border: 3px solid #333;
    border-radius: 5px;
    object-fit: contain;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 280px;
    }
  }
`;

export const TextSection = styled.div`
  flex: 2.5;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HorizontalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Section = styled.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul, ol {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul, ol {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul, ol {
      font-size: 0.8em;
    }
  }
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TroubleshootItem = styled.div`
  margin-bottom: 14px;

  strong {
    color: #fff;
  }

  .field {
    display: block;
    margin-top: 2px;

    .field-label {
      color: #ffd700;
      font-weight: bold;
      margin-right: 6px;
    }
  }
`;

export const AiCollabBox = styled.div`
  border: 1px solid #333;
  border-radius: 6px;
  padding: 12px 16px;
  margin-top: 10px;
  background-color: #262626;

  h3 {
    margin-top: 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: left;
  font-size: 0.9em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;
  padding-top: 10px;

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

// 사례 머리에 관련 저장소를 한 줄로 보여준다
export const Repos = styled.p`
  margin: 0 0 12px;
  font-size: 0.85em;
  color: #999;

  span {
    color: #ffd700;
    font-weight: bold;
    margin-right: 4px;
  }
`;
