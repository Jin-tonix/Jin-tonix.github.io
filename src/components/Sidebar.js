import React, { useState } from 'react';
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
  width: 15vw;
  max-width: 200px;
  min-width: 80px;

  .menu {
    position: relative; /* extra-menu가 이 위치를 기준으로 절대 위치하게 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 25px;

    a {
      color: #fff;
      font-size: 1.5em;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  .extra-menu {
    position: absolute;
    top: 110%; /* 간격을 살짝 띄움 */
    left: 0;
    right: 0;
    display: ${({ showExtraMenu }) => (showExtraMenu ? 'flex' : 'none')}; /* showExtraMenu 상태에 따라 표시 */
    flex-direction: column;
    align-items: center;
    gap: 15px;

    a {
      color: #aaa;
      font-size: 1em;
      text-decoration: none;
      font-weight: normal;
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
      font-size: 1em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 768px) {
    width: 20vw;
    max-width: 150px;
    .menu a, .extra-menu a{
      font-size: 1.5em; /* 화면 크기에 맞게 글씨 크기 조정 */
  }

  @media (max-width: 480px) {
    width: 25vw;
    max-width: 120px;
  }
    .menu a, .extra-menu a  {
      font-size: 1em; /* 화면 크기에 맞게 글씨 크기 조정 */
  }
    .social-links a {
      font-size: 0.5em;
  }
`;


export default function Sidebar() {
  const [showExtraMenu, setShowExtraMenu] = useState(false);

  const handleProjectsClick = () => {
    setShowExtraMenu(!showExtraMenu);
  };

  return (
    <SidebarMain showExtraMenu={showExtraMenu}>
      <div className="menu">
        <Link to="/" onClick={() => setShowExtraMenu(false)}>Intro</Link>
        <Link to="/about" onClick={() => setShowExtraMenu(false)}>About</Link>
        <Link to="/skills" onClick={() => setShowExtraMenu(false)}>Skills</Link>
        <Link to="/projects" onClick={handleProjectsClick}>Projects</Link>

        {showExtraMenu && (
          <div className="extra-menu">
            <Link to="/projects/project1">Project 1</Link>
            <Link to="/projects/project2">Project 2</Link>
            <Link to="/projects/project3">Project 3</Link>
            <Link to="/projects/project4">Project 4</Link>
          </div>
        )}
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
