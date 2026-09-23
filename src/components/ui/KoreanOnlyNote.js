// EN 화면에서 한국어 전용 옛 프로젝트(Project1~5)를 그대로 보여줄 때 붙이는 회색 안내문
import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  background-color: #222;
  color: #888;
  font-family: Arial, sans-serif;
  font-size: 0.8em;
  padding: 10px 20px 0 50px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 15vw;
  }
`;

export default function KoreanOnlyNote({ text }) {
  return <Note>{text}</Note>;
}
