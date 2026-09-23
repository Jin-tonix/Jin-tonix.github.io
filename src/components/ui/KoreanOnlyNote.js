// EN 화면에서 한국어 전용 옛 프로젝트(Project1~5)를 그대로 보여줄 때 붙이는 안내문
import React from 'react';
import styled from 'styled-components';
import { color, font, layout } from './tokens';

const Note = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${color.bg};
  box-sizing: border-box;
  padding-top: 24px;
`;

const NoteInner = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: 0 48px;
  color: ${color.muted};
  font-family: ${font.family};
  font-size: ${font.size.xs};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export default function KoreanOnlyNote({ text }) {
  return (
    <Note>
      <NoteInner>{text}</NoteInner>
    </Note>
  );
}
