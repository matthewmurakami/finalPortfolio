import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';



const Dropdown = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
      <button className="dropdown-button">Case Studies</button>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={() => navigate('/responsive-redesign')}>Responsive Redesign</button>
          <button onClick={() => navigate('/iterative-development')}>Iterative Development</button>
          <button onClick={() => navigate('/development-process')}>Development Process</button>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ homeRef, aboutRef, caseStudiesRef, contactRef, isVisible}) => {
  if (!isVisible) return null;

  const scrollToSection = (ref) => {
    gsap.to(window, {
      scrollTo: { y: ref.current, autoKill: true },
      duration: 1
    });
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection(homeRef)}>Home</button>
      <button onClick={() => scrollToSection(aboutRef)}>About</button>
      <button onClick={() => scrollToSection(caseStudiesRef)}>Case Studies</button>
      <button onClick={() => scrollToSection(contactRef)}>Contact</button>
    </nav>
  );
};


// const Navbar = ({ homeRef, aboutRef, caseStudiesRef, contactRef }) => {
//   const scrollToSection = (ref) => {
//     gsap.to(window, {
//       scrollTo: { y: ref.current, autoKill: true },
//       duration: 1
//     });
//   };

//   return (
//     <nav className="navbar">
//       <button onClick={() => scrollToSection(homeRef)}>Home</button>
//       <button onClick={() => scrollToSection(aboutRef)}>About</button>
//       <button onClick={() => scrollToSection(caseStudiesRef)}>Case Studies</button>

//       {/* <Dropdown
//         scrollToSection={scrollToSection}
//         caseStudiesRef={caseStudiesRef}
//         developmentProcessRef={caseStudiesRef} // Assuming you meant the same ref for simplicity
//         iterativeDevelopmentRef={caseStudiesRef} // Assuming you meant the same ref for simplicity
//       /> */}
//       <button onClick={() => scrollToSection(contactRef)}>Contact</button>
//     </nav>
//   );
// };

export default Navbar;