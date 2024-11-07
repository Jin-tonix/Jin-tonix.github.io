// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
