import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <Dropdown navigate={navigate} />
      <button onClick={() => navigate('/contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;
