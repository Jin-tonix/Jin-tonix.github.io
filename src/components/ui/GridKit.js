// Projects 페이지의 case 그리드 / Before 그리드가 공유하는 카드 컴포넌트.
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, layout } from './tokens';

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SmallPortfolioGrid = styled(PortfolioGrid)`
  /* 카드 수가 적어도 위 StyleSeller 카드와 같은 폭을 유지 */
  grid-template-columns: repeat(5, 1fr);

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
  width: 100%;
  text-align: center;
`;

export const SmallProjectBoxWrapper = styled(ProjectBoxWrapper)``;

export const ProjectBox = styled(Link)`
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${color.gold};
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SmallProjectBox = styled(ProjectBox)``;

export const Description = styled.div`
  margin-top: 8px;
  font-size: 15px;
  color: ${color.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Connection = styled.div`
  margin-top: 2px;
  font-size: 13px;
  color: ${color.gold};
  text-align: center;
  opacity: 0.9;
`;

// 카드 아래 TL;DR 첫 줄
export const CardSummary = styled.p`
  margin: 6px 0 0;
  font-size: 13px;
  line-height: 1.5;
  color: ${color.muted};
  text-align: center;
  word-break: keep-all;
`;

export const CardStatus = styled.div`
  margin-top: 6px;
`;
