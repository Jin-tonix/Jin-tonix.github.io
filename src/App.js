import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: '250px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
