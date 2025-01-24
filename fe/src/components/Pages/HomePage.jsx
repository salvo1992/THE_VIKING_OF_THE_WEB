import React from 'react';
import NameProfession from './NameProfession'; // Componente del nome alternato
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Mostra il nome alternato tra Salvatore Di Maria e DevSecOps */}
      <NameProfession />
      
      <div className="intro-text">
        <p>
          Benvenuto nel mio sito! Sono Salvatore Di Maria, un <span className="highlight">DevSecOps</span> e Programmatore con esperienza nel miglioramento della sicurezza e sviluppo di software. Esplora il mio lavoro!
        </p>
      </div>

      <div className="cta">
        <a href="#portfolio" className="cta-button">Vedi il mio portfolio</a>
      </div>
    </div>
  );
};

export default HomePage;
