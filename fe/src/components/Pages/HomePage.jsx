import React from 'react';
import NameProfession from './NameProfession'; // Componente del nome alternato
import './HomePage.css'; // Assicurati che il CSS sia importato

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Mostra il nome alternato tra Salvatore Di Maria e DevSecOps */}
      <NameProfession />
      
      <div className="profile">
        <div className="photo-container">
          <img src="/viking.png" alt="Profile" className="profile-photo" />
        </div>
      </div>

      <div className="intro-text">
        <p>
          Benvenuto nel mio sito! Sono Salvatore Di Maria, un <span className="highlight">DevSecOps - Web Developer</span> con esperienza nel miglioramento della sicurezza e sviluppo di software. <span className="highlight">Esplora il mio lavoro e lasciami un bel feedback grazie!</span>
        </p>
      </div>

      <div className="cta">
        <a href="#about-me" className="cta-button">Vedi il mio portfolio</a>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" className="social-icon linkedin">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="mailto:your-email@gmail.com" target="_blank" className="social-icon gmail">
          <i className="fas fa-envelope"></i> Gmail
        </a>
        <a href="https://wa.me/your-number" target="_blank" className="social-icon whatsapp">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://www.fiverr.com" target="_blank" className="social-icon fiverr">
          <i className="fab fa-fiverr"></i> Fiverr
        </a>
        <a href="https://discord.gg/your-discord" target="_blank" className="social-icon discord">
          <i className="fab fa-discord"></i> Discord
        </a>
      </div>
    </div>
  );
};

export default HomePage;



