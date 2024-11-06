// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SidebarMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; /* 화면 높이 꽉 차게 설정 */
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  min-width: 160px;
  max-width: 250px;

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center; /* 가운데 정렬 */
    margin-top: 150px; /* 메뉴를 아래로 내림 */
    gap: 30px;

    a {
      color: #fff;
      font-size: 2em; /* 글씨 크기 증가 */
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px; /* 소셜 링크를 위로 올림 */
    align-items: center; /* 가운데 정렬 */
    gap: 15px;

    a {
      color: #fff;
      font-size: 1.2em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 768px) {
    width: 25vw;
    min-width: 140px;

    .menu a {
      font-size: 1.3em;
    }

    .social-links a {
      font-size: 1em;
    }
  }
`;

export default function Sidebar() {
  return (
    <SidebarMain>
      <div className="menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="social-links">
        <a href="https://github.com/Jin-tonix" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/jin-tonix" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="mailto:jinheemok815@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </div>
    </SidebarMain>
  );
}
