// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
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
          <Route path="/build" element={<HowIBuild />} />

          {/* 영어 (/en 미러) */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/skills" element={<Skills />} />
          <Route path="/en/projects" element={<ProjectsPage />} />
          <Route path="/en/projects/:slug" element={<CaseStudy />} />
          <Route path="/en/build" element={<HowIBuild />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
