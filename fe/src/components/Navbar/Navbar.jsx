import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoAnimation from '../logo/LogoAnimation';  // Assicurati di avere questo componente

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Stato per il menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle per aprire e chiudere il menu mobile
  };

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        <div className="logo">
          {/* Mostra l'animazione del logo */}
          <LogoAnimation />
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/clients">Clients</Link></li>
        </ul>
        {/* Bottone menu mobile */}
        <button className="menu-button" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



