import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../lang/LangContext';
import { color, font, breakpoint } from './ui/tokens';

const SidebarMain = styled.nav`
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

  /* 데스크톱: 메뉴는 위, 링크는 아래 */
  .panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 0;
  }

  /* 모바일 전용 상단 바 */
  .topbar {
    display: none;
  }

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

      @media (max-width: ${breakpoint.mobile}) {
        font-size: 1.15em;
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
      margin-top: 14px;
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
    }
  }

  .updated {
    @media (max-width: ${breakpoint.mobile}) {
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
      min-width: 32px;
      min-height: 28px;
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

  /* 좁은 화면: 세로 사이드바 대신 위쪽 가로 바 + 펼치는 메뉴 */
  @media (max-width: ${breakpoint.mobile}) {
    right: 0;
    width: 100%;
    height: auto;
    padding: 0;
    border-right: none;
    border-bottom: 1px solid ${color.line};

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--topbar-height);
      padding: 0 16px;
    }

    .menu-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: 1px solid ${color.line};
      border-radius: 6px;
      color: ${color.text};
      font-family: inherit;
      font-size: ${font.size.sm};
      padding: 6px 12px;
      cursor: pointer;

      &[aria-expanded='true'] {
        color: ${color.gold};
        border-color: ${color.gold};
      }
    }

    .panel {
      display: ${({ $mobileOpen }) => ($mobileOpen ? 'flex' : 'none')};
      max-height: calc(100vh - var(--topbar-height));
      overflow-y: auto;
      padding: 8px 20px 20px;
      gap: 24px;
      border-top: 1px solid ${color.line};
    }

    .menu {
      margin-top: 12px;
      gap: 14px;
    }

    .extra-menu {
      position: static;
      max-height: none;
      overflow: visible;
    }

    .social-links {
      margin-bottom: 0;

      .lang-switch {
        display: none;
      }
    }
  }
`;

export default function Sidebar() {
  const { content, withPrefix, koPath, enPath, lang } = useLang();
  const location = useLocation();
  // 프로젝트 하위 페이지를 보는 동안에는 목록을 열어 둔다 — Projects 를 다시 누르거나 다른 상위 메뉴로 가면 닫힌다
  const [showExtraMenu, setShowExtraMenu] = useState(() => /\/projects/.test(location.pathname));
  const { nav, cases, before } = content;
  // 모바일 상단 바의 메뉴 펼침 — 페이지를 옮기면 닫는다
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const langSwitch = (
    <div className="lang-switch">
      <Link to={koPath}>
        <button type="button" className={lang === 'ko' ? 'active' : ''}>KO</button>
      </Link>
      <Link to={enPath}>
        <button type="button" className={lang === 'en' ? 'active' : ''}>EN</button>
      </Link>
    </div>
  );

  const handleProjectsClick = () => {
    setShowExtraMenu(!showExtraMenu);
  };

  return (
    <SidebarMain showExtraMenu={showExtraMenu} $mobileOpen={mobileOpen} aria-label="Site">
      <div className="topbar">
        <button
          type="button"
          className="menu-button"
          aria-expanded={mobileOpen}
          aria-controls="site-nav-panel"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} /> Menu
        </button>
        {langSwitch}
      </div>

      <div className="panel" id="site-nav-panel">
        <div className="menu">
          <NavLink to={withPrefix('/')} end onClick={() => setShowExtraMenu(false)}>{nav.home}</NavLink>
          <NavLink to={withPrefix('/about')} onClick={() => setShowExtraMenu(false)}>{nav.about}</NavLink>
          <NavLink to={withPrefix('/skills')} onClick={() => setShowExtraMenu(false)}>{nav.skills}</NavLink>
          <NavLink to={withPrefix('/how-i-build')} onClick={() => setShowExtraMenu(false)}>{nav.build}</NavLink>
          <NavLink
            to={withPrefix('/projects')}
            onClick={handleProjectsClick}
            aria-expanded={showExtraMenu}
            aria-controls="projects-submenu"
          >
            {nav.projects}
          </NavLink>

          {showExtraMenu && (
            <div className="extra-menu" id="projects-submenu">
              {cases.map((c) => (
                <NavLink key={c.id} to={withPrefix(`/projects/${c.slug}`)}>
                  {c.shortTitle}
                </NavLink>
              ))}
              <div className="extra-group-label">{before.title}</div>
              {before.projects.map((p) => (
                <NavLink key={p.route} to={withPrefix(p.route)}>
                  {p.title}
                </NavLink>
              ))}
            </div>
          )}

        </div>

        <div className="social-links">
          {langSwitch}
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
      </div>
    </SidebarMain>
  );
}
