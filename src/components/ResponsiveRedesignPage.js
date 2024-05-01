import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import "../styles.css";

const scrollToSection = (section) => {

  gsap.to(window, { duration: 1, scrollTo: { y: section, autoKill: false } });

};

const ResponsiveRedesignPage = () => {
    return (
        <div className="firstContainer">
          <h1>Responsive Redesign</h1>
    
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              lorem ipsum...
            </p>
            
            <img className="image" src="./assets/original_page.png" alt="Original Page" />
          </section>
    
          {/* More sections follow... */}
          
          <section id="final-product">
            <h2>Final Product</h2>
            <p>lorem ipsum...</p>
            <img className="mockup" src="./assets/mockup.jpg" alt="Final Product Mockup" />
          </section>
    
          <section id="key-takeaways">
            <h2>Key Takeaways</h2>
            <ul>
              <li><b>lorem ipsum...</b></li>
              <li><b>lorem ipsum...</b></li>
            </ul>
          </section>
        </div>
      );
    };
export default ResponsiveRedesignPage;
