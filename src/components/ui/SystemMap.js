// Projects 페이지 상단 System Map: 이미지 + 클릭 가능한 노드 칩
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 80%;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #ffd700;
  font-size: clamp(1em, 1.8vw, 1.3em);
  margin-bottom: 6px;
`;

const Intro = styled.p`
  color: #ccc;
  font-size: clamp(0.8em, 1.2vw, 0.95em);
  line-height: 1.6;
  margin-bottom: 14px;
  max-width: 900px;
`;

const ImageFrame = styled.a`
  display: block;
  border: 3px solid #333;
  border-radius: 6px;
  overflow: hidden;
  max-width: 900px;
  margin-bottom: 14px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const NodeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const NodeChip = styled(Link)`
  border: 1px solid #ffd700;
  color: #ffd700;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: clamp(0.75em, 1.1vw, 0.9em);
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #ffd700;
    color: #222;
  }
`;

// 시스템 계층 요약 (이미지 아래 한 줄씩)
const LayerList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px 14px;
  max-width: 900px;
  margin: 0 0 14px;
  font-size: clamp(0.75em, 1.05vw, 0.88em);

  dt {
    color: #ffd700;
    font-weight: bold;
  }

  dd {
    color: #bbb;
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    dd {
      margin-bottom: 6px;
    }
  }
`;

export default function SystemMap({ systemMap, withPrefix }) {
  if (!systemMap) return null;
  return (
    <Wrapper>
      <Title>{systemMap.title}</Title>
      <Intro>{systemMap.intro}</Intro>
      {systemMap.image && (
        <ImageFrame href={systemMap.image} target="_blank" rel="noopener noreferrer">
          <img src={systemMap.image} alt={systemMap.imageAlt || systemMap.title} />
        </ImageFrame>
      )}
      {systemMap.layers && (
        <LayerList>
          {systemMap.layers.map((layer) => (
            <React.Fragment key={layer.name}>
              <dt>{layer.name}</dt>
              <dd>{layer.desc}</dd>
            </React.Fragment>
          ))}
        </LayerList>
      )}
      <NodeRow>
        {systemMap.nodes.map((node) => (
          <NodeChip key={node.id} to={withPrefix(`/projects/${node.caseId}`)}>
            {node.label}
          </NodeChip>
        ))}
      </NodeRow>
    </Wrapper>
  );
}
