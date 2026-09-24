// Projects 페이지 상단 System Map: 이미지 + 클릭 가능한 노드 칩. Projects 페이지의 시각적 하이라이트.
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, font, layout } from './tokens';
import imgAttrs from './imgAttrs';

const Wrapper = styled.div`
  background-color: ${color.surface};
  border: 1px solid ${color.line};
  border-left: 3px solid ${color.gold};
  border-radius: ${layout.radius};
  padding: 24px;
`;

const Title = styled.h2`
  color: ${color.gold};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.subhead};
  margin: 0 0 8px;
`;

const Intro = styled.p`
  color: ${color.muted};
  font-size: ${font.size.md};
  line-height: ${font.bodyLineHeight};
  margin: 0 0 18px;
  max-width: ${font.proseMaxWidth};
`;

const ImageFrame = styled.a`
  display: block;
  border: 1px solid ${color.line};
  border-radius: ${layout.radius};
  overflow: hidden;
  margin-bottom: 18px;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    background: #fff;
  }
`;

const NodeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const NodeChip = styled(Link)`
  border: 1px solid ${color.gold};
  color: ${color.gold};
  border-radius: 999px;
  padding: 6px 16px;
  font-size: ${font.size.xs};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${color.gold};
    color: ${color.bg};
  }
`;

// 시스템 계층 요약 (이미지 아래 한 줄씩)
const LayerList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px 14px;
  margin: 0 0 18px;
  font-size: ${font.size.sm};

  dt {
    color: ${color.gold};
    font-weight: ${font.weight.subhead};
  }

  dd {
    color: ${color.text};
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
          <img src={systemMap.image} {...imgAttrs(systemMap.image)} alt={systemMap.imageAlt || systemMap.title} />
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
