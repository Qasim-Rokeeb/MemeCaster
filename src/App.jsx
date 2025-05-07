// src/App.jsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customize from './pages/Customize';
import { sdk } from '@farcaster/frame-sdk';

function App() {
  useEffect(() => {
    // Signal to Warpcast that the app is fully ready to be displayed
    sdk.ready();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </Router>
  );
}

export default App;
