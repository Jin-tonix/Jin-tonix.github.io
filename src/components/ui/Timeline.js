// About 페이지용 세로 타임라인 (골드 점 + Now 박스)
import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  position: relative;
  padding-left: 24px;
  margin-top: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background-color: #444;
  }
`;

const Item = styled.div`
  position: relative;
  margin-bottom: 18px;

  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ $now }) => ($now ? '#ffd700' : '#666')};
    border: 2px solid ${({ $now }) => ($now ? '#ffd700' : '#333')};
  }

  .period {
    color: #ffd700;
    font-size: clamp(0.75em, 1vw, 0.9em);
    font-weight: bold;
  }

  .title {
    color: #fff;
    font-weight: bold;
    font-size: clamp(0.85em, 1.1vw, 1em);
    margin-top: 2px;
  }

  .desc {
    color: #ccc;
    font-size: clamp(0.75em, 1vw, 0.9em);
    line-height: 1.5;
    margin-top: 2px;
  }
`;

const NowBox = styled.div`
  border: 1px solid #ffd700;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 16px;
  background-color: rgba(255, 215, 0, 0.06);

  .now-label {
    color: #ffd700;
    font-weight: bold;
    font-size: 0.85em;
    letter-spacing: 0.05em;
  }

  .now-text {
    color: #eee;
    font-size: 0.9em;
    margin-top: 4px;
  }
`;

export default function Timeline({ items, nowLabel, nowText }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      {nowText && (
        <NowBox>
          <div className="now-label">{nowLabel || 'Now'}</div>
          <div className="now-text">{nowText}</div>
        </NowBox>
      )}
      <List>
        {items.map((item) => (
          <Item key={`${item.period}-${item.title}`} $now={!!item.now}>
            <div className="period">{item.period}</div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </Item>
        ))}
      </List>
    </div>
  );
}
