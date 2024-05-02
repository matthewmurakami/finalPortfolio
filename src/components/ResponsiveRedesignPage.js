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
        <div className="case-study-container">
          <h1 className="container-title">Responsive Redesign</h1>
    
          <section className="container-conent">
            <h2 className="container-header">Introduction</h2>
            <p className="container-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
            
          </section>
          
                    
          <section className="container-conent">
            <h2 className="container-header">Final Product</h2>
            <p className="container-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
    
          <section className="container-conent">
            <h2 className="container-header">Key Takeaways</h2>
            <ul>
              <li><b>lorem ipsum...</b></li>
              <li><b>lorem ipsum...</b></li>
            </ul>
          </section>
        </div>
      );
    };
export default ResponsiveRedesignPage;
