// System Map: 소개 + 이미지 + 저장소별 역할 + 예시 흐름 + 5개 층 + 사례로 가는 노드 칩 (Home·Projects 공용)
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

  @media (max-width: 600px) {
    padding: 16px;
  }
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
  }
`;

// 폰에서는 그림 글자가 작아 새 탭에서 원본 크기로 연다는 안내
const ZoomHint = styled.span`
  display: none;
  margin: -12px 0 18px;
  color: ${color.muted};
  font-size: 12px;

  @media (max-width: 600px) {
    display: block;
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

// 사례가 없는 노드(휴면)는 링크 없이 회색으로
const NodeStatic = styled.span`
  border: 1px solid ${color.line};
  color: ${color.muted};
  border-radius: 999px;
  padding: 6px 16px;
  font-size: ${font.size.xs};
`;

const SubTitle = styled.h3`
  color: ${color.gold};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.subhead};
  margin: 0 0 8px;
`;

const Examples = styled.ul`
  color: ${color.muted};
  font-size: ${font.size.xs};
  line-height: 1.6;
  padding-left: 18px;
  margin: 0 0 18px;
  max-width: ${font.proseMaxWidth};
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
        <>
          <ImageFrame href={systemMap.image} target="_blank" rel="noopener noreferrer" title={systemMap.zoomHint}>
            <img src={systemMap.image} {...imgAttrs(systemMap.image)} alt={systemMap.imageAlt || systemMap.title} />
          </ImageFrame>
          {systemMap.zoomHint && <ZoomHint aria-hidden="true">{systemMap.zoomHint}</ZoomHint>}
        </>
      )}
      {systemMap.repos && (
        <>
          {systemMap.reposTitle && <SubTitle>{systemMap.reposTitle}</SubTitle>}
          <LayerList>
            {systemMap.repos.map((r) => (
              <React.Fragment key={r.name}>
                <dt>{r.name}</dt>
                <dd>{r.role}</dd>
              </React.Fragment>
            ))}
          </LayerList>
        </>
      )}
      {systemMap.examples && (
        <Examples>
          {systemMap.examples.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </Examples>
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
        {systemMap.nodes.map((node) =>
          node.caseId ? (
            <NodeChip key={node.id} to={withPrefix(`/projects/${node.caseId}`)}>
              {node.label}
            </NodeChip>
          ) : (
            <NodeStatic key={node.id}>{node.label}</NodeStatic>
          )
        )}
      </NodeRow>
    </Wrapper>
  );
}
