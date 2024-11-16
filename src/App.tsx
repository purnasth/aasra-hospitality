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
import WhatsApp from './components/ui/WhatsApp';
import Footer from './layouts/Footer';
import BackToTop from './components/ui/BackToTop';
import GalleryPage from './pages/GalleryPage';
import RouterToTop from './utils/RouterToTop';

const App: React.FC = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <RouterToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <BackToTop />
        <WhatsApp />
      </Router>
    </>
  );
};

export default App;
