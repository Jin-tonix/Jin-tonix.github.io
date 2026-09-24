import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../lang/LangContext';
import { color, font } from './ui/tokens';

const SidebarMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${color.surface};
  border-right: 1px solid ${color.line};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--sidebar-width);
  z-index: 10;
  font-family: ${font.family};

  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px;

    a {
      color: ${color.text};
      font-size: clamp(1.1em, 1.9vw, 1.6em);
      text-decoration: none;
      font-weight: ${font.weight.subhead};
      text-align: center;
      line-height: 1.15;
      transition: color 0.2s ease;

      @media (max-width: 600px) {
        font-size: 0.8em;
      }

      &:hover {
        color: ${color.gold};
      }

      &.active {
        color: ${color.gold};
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
      color: ${color.muted};
      font-size: clamp(0.68em, 1.15vw, 0.9em);
      text-decoration: none;
      font-weight: ${font.weight.body};
      transition: color 0.2s ease;
      text-align: center;

      &:hover {
        color: ${color.gold};
      }

      &.active {
        color: ${color.gold};
      }
    }

    .extra-group-label {
      color: ${color.muted};
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
      color: ${color.text};
      font-size: clamp(0.8em, 1.5vw, 1em);
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${color.gold};
      }

      @media (max-width: 600px) {
        .label {
          display: none;
        }
      }
    }
  }

  .updated {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .lang-switch {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: clamp(0.7em, 1.2vw, 0.85em);
    color: ${color.muted};

    button {
      background: none;
      border: 1px solid ${color.line};
      border-radius: 4px;
      color: ${color.muted};
      padding: 2px 8px;
      cursor: pointer;
      font-size: inherit;
      font-family: inherit;
      transition: all 0.2s ease;

      &.active {
        color: ${color.gold};
        border-color: ${color.gold};
      }

      &:hover {
        color: ${color.gold};
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
        <NavLink to={withPrefix('/')} end onClick={() => setShowExtraMenu(false)}>{nav.home}</NavLink>
        <NavLink to={withPrefix('/about')} onClick={() => setShowExtraMenu(false)}>{nav.about}</NavLink>
        <NavLink to={withPrefix('/skills')} onClick={() => setShowExtraMenu(false)}>{nav.skills}</NavLink>
        <NavLink to={withPrefix('/build')} onClick={() => setShowExtraMenu(false)}>{nav.build}</NavLink>
        <NavLink to={withPrefix('/projects')} onClick={handleProjectsClick}>{nav.projects}</NavLink>

        {showExtraMenu && (
          <div className="extra-menu">
            {cases.map((c) => (
              <NavLink key={c.id} to={withPrefix(`/projects/${c.slug}`)} onClick={() => setShowExtraMenu(false)}>
                {c.shortTitle}
              </NavLink>
            ))}
            <div className="extra-group-label">{before.title}</div>
            {before.projects.map((p) => (
              <NavLink key={p.route} to={withPrefix(p.route)} onClick={() => setShowExtraMenu(false)}>
                {p.title}
              </NavLink>
            ))}
          </div>
        )}

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
        <a href="https://github.com/Jin-tonix" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> <span className="label">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/jin-tonix" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> <span className="label">LinkedIn</span>
        </a>
        <a href="mailto:jinheemok815@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} /> <span className="label">Email</span>
        </a>
        <div className="updated" style={{ marginTop: '10px', fontSize: 'clamp(0.6em, 1.1vw, 0.75em)', color: color.muted, textAlign: 'center' }}>
          Last Updated: 2026.09.24
        </div>
      </div>
    </SidebarMain>
  );
}
