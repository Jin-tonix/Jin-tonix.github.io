// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeadTags from './components/HeadTags';
import About from './components/About';
import Skills from './components/Skills';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudy from './pages/CaseStudy';
import HowIBuild from './pages/HowIBuild';

function App() {
  return (
    <div className="App">
      <HeadTags />
      <Sidebar />
      <div className="main-content">
        <Routes>
          {/* 한국어 (기본) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/how-i-build" element={<HowIBuild />} />
          {/* 옛 주소 /build 는 새 주소로 넘긴다 */}
          <Route path="/build" element={<Navigate to="/how-i-build" replace />} />

          {/* 영어 (/en 미러) */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/skills" element={<Skills />} />
          <Route path="/en/projects" element={<ProjectsPage />} />
          <Route path="/en/projects/:slug" element={<CaseStudy />} />
          <Route path="/en/how-i-build" element={<HowIBuild />} />
          <Route path="/en/build" element={<Navigate to="/en/how-i-build" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
