import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrameworkDemo from './pages/FrameworkDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<FrameworkDemo />} />
      </Routes>
    </Router>
  );
}

export default App; 