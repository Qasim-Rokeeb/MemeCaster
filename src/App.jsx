// src/App.jsx
import { sdk } from '@farcaster/frame-sdk';
await sdk.actions.ready();
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customize from './pages/Customize';

function App() {
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
await sdk.actions.ready({ disableNativeGestures: true });
