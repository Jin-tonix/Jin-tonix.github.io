// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';
import Project7 from './components/Project7';
import Project8 from './components/Project8';
import Project9 from './components/Project9';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/projects/project3" element={<Project3 />} />
          <Route path="/projects/project4" element={<Project4 />} />
          <Route path="/projects/project5" element={<Project5 />} />
          <Route path="/projects/project6" element={<Project6 />} />
          <Route path="/projects/project7" element={<Project7 />} />
          <Route path="/projects/project8" element={<Project8 />} />
          <Route path="/projects/project9" element={<Project9 />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
