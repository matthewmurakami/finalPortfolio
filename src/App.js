import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import "./styles.css";

// Page components
import ResponsiveRedesignPage from './components/ResponsiveRedesignPage';
import IterativeDevelopmentPage from './components/IterativeDevelopmentPage';
import DevelopmentProcessPage from './components/DevelopmentProcessPage';
import Navbar from './components/Navbar';


// Image imports
import redesign from './images/redesign.png';
import development from './images/development.png';
import iterative from './images/iterative.png';
import matt from './images/matt.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import git from './images/git.png';
import mail from './images/email.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const TypingHeader = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // State to manage typing or deleting
  const phrases = ['love to code!', 'solve people\'s problems', 'enjoy travelling'];

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && text === phrases[index]) {
      // If the text is completed and not deleting, start deleting after a pause
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && text === '') {
      // If the text is completely deleted, move to the next phrase
      setIsDeleting(false);
      setIndex((current) => (current + 1) % phrases.length);
    } else {
      // Typing or deleting text
      timeoutId = setTimeout(() => {
        setText(current =>
          isDeleting
            ? phrases[index].slice(0, current.length - 1)
            : phrases[index].slice(0, current.length + 1)
        );
      }, isDeleting ? 100 : 150); // Faster deleting than typing
    }

    return () => clearTimeout(timeoutId);
  }, [text, index, isDeleting, phrases]);

  return <h2>I {text}<span className="cursor">|</span></h2>;
};

const HomePage = () => {
  const component = useRef();
  const slider = useRef();
  const navigate = useNavigate();
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0,  // Reduced scrub time for a quicker reaction time
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: {min: 0.1, max: 0.3},  // Min and max duration of the snap
            delay: 0  // No delay before starting to snap
          },
          end: () => "+=" + slider.current.offsetWidth,
        }
      });
    }, component.current);
  
    return () => ctx.revert();
  }, []);
  
  const scrollToSection = (section) => {
    if (section === "#portfolio") {
      gsap.to(window, { duration: 1, scrollTo: { y: slider.current, autoKill: false } });
    } else {
      gsap.to(window, { duration: 1, scrollTo: { y: section, autoKill: false } });
    }
  };

  return (
    <div className="App" ref={component}>

      <div id="home" className="firstContainer">
        <h1 class="welcome">Welcome.</h1>
        <h1 className="name">My name is Matt Murakami.</h1>
        <TypingHeader/>
      </div>

      <div id="about" className="about">
        <div className="about-text">
          <h1>About Me.</h1>
          <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <img src={matt} alt="Matt Murakami" className="about-image" />
      </div>

      <div ref={slider} className="container" id="caseStudies">
        <div className="description panel">
          <div id="section1" className="content">
            <p>
              Please scroll to see my three latest works that I've proudly
              put for display on my portfolio
            </p>
          </div>
        </div>

        <div id="section2" className="panel" onClick={() => navigate('/responsive-redesign')}>                
          <a className="center block w-2/4 bg-black-900 group" href="#!">
            <img
              className="center inset-0 object-cover w-full h-full group-hover:opacity-50"
              src={redesign}
              alt="Responsive Redesign"
            />
            <div className="center p-5">
              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="p-2 text-center">
                  <p className="text-lg text-white">Responsive Redesign</p>
                  <button className="mt-4 px-4 py-2 text-sm text-white bg-beige-600">
                    Check it out
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div id="section3" className="panel" onClick={() => navigate('/iterative-development')}>
          <a className="center block w-2/4 bg-black-900 group" href="#!">
              <img
                className="center inset-0 object-cover w-full h-full group-hover:opacity-50"
                src={iterative}
                alt="iterative development"
              />
              <div className="center p-5">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="p-2 text-center">
                    <p className="text-lg text-white">Iterative Development</p>
                    <button className="mt-4 px-4 py-2 text-sm text-white bg-beige-600">
                      Check it out
                    </button>
                  </div>
                </div>
              </div>
            </a>
        </div>
        <div id="section4" className="panel" onClick={() => navigate('/development-process')}>
          <a className="center block w-2/4 bg-black-900 group" href="#!">
              <img
                className="center inset-0 object-cover w-full h-full group-hover:opacity-50"
                src={development}
                alt="Development Process"
              />
              <div className="center p-5">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="p-2 text-center">
                    <p className="text-lg text-white">Development Process</p>
                    <button className="mt-4 px-4 py-2 text-sm text-white bg-beige-600">
                      Check it out
                    </button>
                  </div>
                </div>
              </div>
            </a>
        </div>
      </div>
      
      <div id="contact" className="lastContainer">
        <h1>Let's get in touch!</h1>
        <div className="socialMediaIcons">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="Email" />
          </a>
        </div>
      </div>

      <section className="bg-#b9b3a9">
            <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
              <div className="grid grid-cols-1 gap-6 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-7xl mx-auto" role="list">

              <article 
                className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${redesign})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
              >
                <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500"> 01⏤ Experience </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> Crafting an effortless journey with user-first. </p>
                </div>
                </div>
              </article>

              <article
                className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${development})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
              >
                <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400"> 02⏤ Interaction </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> Our platform is designed for simplicity and ease. </p>
                </div>
                </div>
              </article>
              
              <article
                className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${iterative})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
              >
                <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-cyan-400"> 03⏤ Design </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> Our design philosophy centers around the user. </p>
                </div>
                </div>
              </article>
              
              </div>
            </div>
          </section>
      

    </div>

    
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />  {/* This line includes the Navbar across all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/responsive-redesign" element={<ResponsiveRedesignPage />} />
        <Route path="/iterative-development" element={<IterativeDevelopmentPage />} />
        <Route path="/development-process" element={<DevelopmentProcessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
