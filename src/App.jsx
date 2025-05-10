// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customize from './pages/Customize';
import { sdk } from '@farcaster/frame-sdk';

function App() {
  useEffect(() => {
    const signalReady = async () => {
      try {
        await sdk.actions.ready();
        console.log('App is ready');
      } catch (error) {
        console.error('Error signaling readiness:', error);
      }
    };

    signalReady();
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
