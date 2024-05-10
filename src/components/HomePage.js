import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import ResponsiveRedesignPage from './ResponsiveRedesignPage';
import IterativeDevelopmentPage from './IterativeDevelopmentPage';
import DevelopmentProcessPage from './DevelopmentProcessPage';
import CustomCursor from './CustomCursor';

// Image imports
import redesign from '../images/redesign.png';
import development from '../images/development.png';
import iterative from '../images/iterative.png';
import matt from '../images/matt.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import git from '../images/git.png';
import mail from '../images/email.png';


const TypingHeader = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); // State to manage typing or deleting
    const phrases = ['am a web developer', 'am a software engineer' ,'love to code!', 'am a solution finder', 'enjoy travelling'];

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
        }, isDeleting ? 150 : 150); // Faster deleting than typing
        }

        return () => clearTimeout(timeoutId);
    }, [text, index, isDeleting, phrases]);

    return <h2>I {text}<span className="cursor">|</span></h2>;
};

const HomePage = ({ homeRef, aboutRef, caseStudiesRef, contactRef }) => {
  // Your existing HomePage JSX goes here, with each section div receiving the corresponding ref
  return (
    <div className="App">
        <CustomCursor></CustomCursor>
        <div ref={homeRef} id="home" className="firstContainer">
        <h1 class="welcome">Welcome.</h1>
        <h1 className="name">My name is Matt Murakami.</h1>
        <TypingHeader/>
        </div>

        <div ref={aboutRef} id="about" className="about">
        <div className="about-text">
            <h1>About Me.</h1>
            <p className="p1">
                I'm currently a graduate student studying computer science at Brown University and
                am committed to human-centered design. My academic experiences have helped give me the
                ability to craft expressive yet effective web pages that prioritize user 
                accessibility. When not coding, I can be found travelling the world or hiking the 
                nearest mountain.
            </p>
        </div>
        <img src={matt} alt="Me! Matt Murakami" className="about-image" />
        </div>

        <div ref={caseStudiesRef}>
        <section className="bg-#b9b3a9">
            <h3 className="case-studies-header">Case Studies</h3>
            <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-1 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
            <div className="grid grid-cols-1 gap-6 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-10xl mx-10" role="list">

            <article className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${redesign})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
            >
                <Link to="/responsive-redesign">
                    <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                    <div className="bg-black p-12 h-full justify-end flex flex-col">
                        <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500"> 
                            01⏤ Responsive Redesign 
                        </h1>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> 
                            Redesigned a page to make it accessible and responsive with design principles. 
                        </p>
                    </div>
                    </div>
                </Link>
            </article>
            <article className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${development})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
            >
                <Link to="/development-process">
                    <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                    <div className="bg-black p-12 h-full justify-end flex flex-col">
                        <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-green-500"> 
                        02⏤ Development Process
                        </h1>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> 
                           Used competitive analysis to make a simple site to online order from a resteraunt.
                        </p>
                    </div>
                    </div>
                </Link>
            </article>
            <article className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${iterative})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
            >
                <Link to="/iterative-design">
                    <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                    <div className="bg-black p-12 h-full justify-end flex flex-col">
                        <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-blue-500"> 
                        03⏤ Iterative Design
                        </h1>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> 
                            Designed a mobile app for the startup Fonda Technologies over multiple iterations.
                        </p>
                    </div>
                    </div>
                </Link>
            </article>
            

            {/* <article
                className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${development})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
            >
                <Link to="/development-process">
                    <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                    <div className="bg-black p-12 h-full justify-end flex flex-col">
                        <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400">
                            02⏤ Development </h1>
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> 
                            A simple site to filter, sort, and aggregate to online order items from a resteraunt using react.
                        </p>
                    </div>
                </div>
                </Link>
            </article>
            
            <article
                className="mx-auto shadow-xl bg-cover bg-center min-h-150 w-full md:w-auto relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                style={{backgroundImage: `url(${iterative})`, backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
            >
                <Link to="/iterative-design">
                <div className="relative h-full min-h-150 flex flex-wrap flex-col pt-[30rem]">
                <div className="bg-black p-12 h-full justify-end flex flex-col">
                    <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-cyan-400">
                        03⏤ Iterative Design
                    </h1>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 ">
                        Designed a mobile app for the startup Fonda Technologies over multiple iterations.
                    </p>
                </div>
                </div>
                </Link>
            </article> */}
            
            </div>
            </div>
        </section>

        
        </div>
        <div ref={contactRef} id="contact" className="lastContainer">
        <h1>Let's get in touch!</h1>
        <div className="socialMediaIcons">
            <a href="https://twitter.com/MattMurakami7" >
            <img className="socialMediaIcons" src={twitter} alt="Twitter" />
            </a>
            <a href="https://github.com/matthewmurakami?tab=overview&from=2024-01-01&to=2024-01-31">
            <img className="socialMediaIcons"  src={git} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/matthew-murakami-526a43184/">
            <img className="socialMediaIcons"  src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://mail.google.com/">
            <img className="socialMediaIcons"  src={mail} alt="Email" />
            </a>
        </div>
        </div>
    </div>
  );
};

export default HomePage;
