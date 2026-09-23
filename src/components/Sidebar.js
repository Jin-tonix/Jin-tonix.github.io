import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLang } from '../lang/LangContext';

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
  max-width: 250px;
  min-width: 80px;

  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px;

    a {
      color: #fff;
      font-size: clamp(1.1em, 1.9vw, 1.6em);
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
    top: 110%;
    left: 0;
    right: 0;
    display: ${({ showExtraMenu }) => (showExtraMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 8px;
    max-height: 46vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    a {
      color: #aaa;
      font-size: clamp(0.68em, 1.15vw, 0.9em);
      text-decoration: none;
      font-weight: normal;
      transition: color 0.3s ease;
      text-align: center;

      &:hover {
        color: #ffd700;
      }
    }

    .extra-group-label {
      color: #666;
      font-size: clamp(0.6em, 1vw, 0.75em);
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    gap: 12px;

    a {
      color: #fff;
      font-size: clamp(0.8em, 1.5vw, 1em);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  .lang-switch {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: clamp(0.7em, 1.2vw, 0.85em);
    color: #888;

    button {
      background: none;
      border: 1px solid #555;
      border-radius: 4px;
      color: #aaa;
      padding: 2px 8px;
      cursor: pointer;
      font-size: inherit;
      transition: all 0.2s ease;

      &.active {
        color: #ffd700;
        border-color: #ffd700;
      }

      &:hover {
        color: #ffd700;
      }
    }
  }
`;

export default function Sidebar() {
  const [showExtraMenu, setShowExtraMenu] = useState(false);
  const { content, withPrefix, koPath, enPath, lang } = useLang();
  const { nav, cases, before } = content;

  const handleProjectsClick = () => {
    setShowExtraMenu(!showExtraMenu);
  };

  return (
    <SidebarMain showExtraMenu={showExtraMenu}>
      <div className="menu">
        <Link to={withPrefix('/')} onClick={() => setShowExtraMenu(false)}>{nav.home}</Link>
        <Link to={withPrefix('/about')} onClick={() => setShowExtraMenu(false)}>{nav.about}</Link>
        <Link to={withPrefix('/skills')} onClick={() => setShowExtraMenu(false)}>{nav.skills}</Link>
        <Link to={withPrefix('/projects')} onClick={handleProjectsClick}>{nav.projects}</Link>

        {showExtraMenu && (
          <div className="extra-menu">
            {cases.map((c) => (
              <Link key={c.id} to={withPrefix(`/projects/${c.slug}`)} onClick={() => setShowExtraMenu(false)}>
                {c.shortTitle}
              </Link>
            ))}
            <div className="extra-group-label">{before.title}</div>
            {before.projects.map((p) => (
              <Link key={p.route} to={withPrefix(p.route)} onClick={() => setShowExtraMenu(false)}>
                {p.title}
              </Link>
            ))}
          </div>
        )}

        <Link to={withPrefix('/build')} onClick={() => setShowExtraMenu(false)}>{nav.build}</Link>
      </div>

      <div className="social-links">
        <div className="lang-switch">
          <Link to={koPath}>
            <button type="button" className={lang === 'ko' ? 'active' : ''}>KO</button>
          </Link>
          <Link to={enPath}>
            <button type="button" className={lang === 'en' ? 'active' : ''}>EN</button>
          </Link>
        </div>
        <a href="https://github.com/Jin-tonix" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/jin-tonix" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="mailto:jinheemok815@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <div style={{ marginTop: '10px', fontSize: 'clamp(0.6em, 1.1vw, 0.75em)', color: '#888', textAlign: 'center' }}>
          Last Updated: 2026.09.23
        </div>
      </div>
    </SidebarMain>
  );
}
