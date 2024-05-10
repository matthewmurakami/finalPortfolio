import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ResponsiveRedesignPage from './components/ResponsiveRedesignPage';
import IterativeDevelopmentPage from './components/IterativeDevelopmentPage';
import DevelopmentProcessPage from './components/DevelopmentProcessPage';
import './styles.css';
import ScrollToTop from './components/ScrollToTop';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

const AppContent = () => {
  const location = useLocation(); // Get current location
  const isVisible = location.pathname === "/"; // Navbar visible only on the homepage

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar 
        homeRef={homeRef}
        aboutRef={aboutRef}
        caseStudiesRef={caseStudiesRef}
        contactRef={contactRef}
        isVisible={isVisible}
      />
      <Routes>
        <Route path="/" element={<HomePage 
          homeRef={homeRef}
          aboutRef={aboutRef}
          caseStudiesRef={caseStudiesRef}
          contactRef={contactRef}
        />} />
        <Route path="/responsive-redesign" element={<ResponsiveRedesignPage />} />
        <Route path="/development-process" element={<DevelopmentProcessPage />} />
        <Route path="/iterative-design" element={<IterativeDevelopmentPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
