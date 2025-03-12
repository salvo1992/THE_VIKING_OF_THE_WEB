import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Importa icone
import './Navbar.css';


const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Stato per il menu mobile
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle per aprire e chiudere il menu mobile
  };

  const handleAuth = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false); // Logout
      navigate('/'); // Torna alla home
    } else {
      navigate('/login'); // Vai alla pagina di login
    }
  };

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        
       
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/clients">Clients</Link></li>
        </ul>

        {/* Icona Login/Logout */}
        <button className="user-icon" onClick={handleAuth}>
          {isAuthenticated ? <FaSignOutAlt size={24} /> : <FaUserCircle size={24} />}
        </button>

        {/* Bottone menu mobile */}
        <button className="menu-button" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
