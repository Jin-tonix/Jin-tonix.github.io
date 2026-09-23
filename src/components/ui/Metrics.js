// 홈 히어로 아래 골드 메트릭 strip (4장)
import React from 'react';
import styled from 'styled-components';
import { color, font, layout } from './tokens';

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(10px, 2vw, 16px);
  width: 100%;
  max-width: 760px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background-color: rgba(43, 43, 43, 0.85);
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  padding: clamp(10px, 1.6vw, 16px) 8px;
  text-align: center;

  .value {
    color: ${color.gold};
    font-size: clamp(1.1em, 2vw, 1.6em);
    font-weight: ${font.weight.title};
  }

  .label {
    margin-top: 4px;
    color: ${color.text};
    font-size: clamp(0.65em, 1vw, 0.8em);
    line-height: 1.3;
  }
`;

export default function Metrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;
  return (
    <Strip>
      {metrics.map((m) => (
        <Card key={m.label}>
          <div className="value">{m.value}</div>
          <div className="label">{m.label}</div>
        </Card>
      ))}
    </Strip>
  );
}
