// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SidebarMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px; /* 고정된 너비 */
  min-width: 120px; /* 화면이 줄어들어도 최소 너비 유지 */
  
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    gap: 30px;

    a {
      color: #fff;
      font-size: 1.8em;
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
    align-items: center;
    margin-bottom: 50px;
    gap: 15px;

    a {
      color: #fff;
      font-size: 1.1em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 768px) {
    width: 180px; /* 더 작은 화면에서는 고정된 최소 너비 */
  }
`;

export default function Sidebar() {
  return (
    <SidebarMain>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
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
