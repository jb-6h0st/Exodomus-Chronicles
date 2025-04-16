import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import MemoryGallery from './components/MemoryGallery';
import MemoryDetail from './components/MemoryDetail';
import NPCGuide from './components/NPCGuide';

import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<MemoryGallery />} />
          <Route path="/memories/:id" element={<MemoryDetail />} />
          <Route path="/guide" element={<NPCGuide />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
