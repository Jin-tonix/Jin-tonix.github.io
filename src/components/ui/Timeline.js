// About 페이지용 세로 타임라인 (골드 점 + 맨 아래 Now 박스)
import React from 'react';
import styled from 'styled-components';
import { color, font, layout } from './tokens';

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
    background-color: ${color.line};
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
    background-color: ${({ $now }) => ($now ? color.gold : color.muted)};
    border: 2px solid ${({ $now }) => ($now ? color.gold : color.line)};
  }

  .period {
    color: ${color.gold};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.subhead};
  }

  .title {
    color: ${color.text};
    font-weight: ${font.weight.subhead};
    font-size: ${font.size.sm};
    margin-top: 2px;
  }

  .desc {
    color: ${color.muted};
    font-size: ${font.size.xs};
    line-height: 1.5;
    margin-top: 2px;
  }
`;

const NowBox = styled.div`
  border: 1px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 10px 14px;
  margin-top: 4px;
  background-color: rgba(255, 215, 0, 0.06);

  .now-label {
    color: ${color.gold};
    font-weight: ${font.weight.subhead};
    font-size: ${font.size.xs};
    letter-spacing: 0.05em;
  }

  .now-text {
    color: ${color.text};
    font-size: ${font.size.sm};
    margin-top: 4px;
  }
`;

export default function Timeline({ items, nowLabel, nowText }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <List>
        {items.map((item) => (
          <Item key={`${item.period}-${item.title}`} $now={!!item.now}>
            <div className="period">{item.period}</div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </Item>
        ))}
      </List>
      {nowText && (
        <NowBox>
          <div className="now-label">{nowLabel || 'Now'}</div>
          <div className="now-text">{nowText}</div>
        </NowBox>
      )}
    </div>
  );
}
