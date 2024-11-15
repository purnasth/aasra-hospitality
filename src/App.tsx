import React from 'react';
// import logo from './assets/logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import useLenisScroll from './hooks/useLenisScroll';

const App: React.FC = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
