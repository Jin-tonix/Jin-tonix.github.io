import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const SidebarMain = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: #333;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 8px 8px 0;

    a {
      color: #fff;
      margin: 10px 0;
      font-size: 1.2em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #1e90ff;
      }
    }
  `;

  return (
    <SidebarMain>
      <a href="https://github.com/Jin-tonix" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a href="www.linkedin.com/in/jin-tonix" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
      <a href="mailto:jinheemok815@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
    </SidebarMain>
  );
}
