import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h2>My Latest Projects</h2>
      <div className="portfolio-gallery">
        <div className="portfolio-item">
          <img src="path_to_project_image.jpg" alt="Project 1" />
          <h3>Project 1 Title</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="portfolio-item">
          <img src="path_to_project_image.jpg" alt="Project 2" />
          <h3>Project 2 Title</h3>
          <p>Description of Project 2.</p>
        </div>
        {/* Aggiungi altri progetti come sopra */}
      </div>
    </div>
  );
};

export default PortfolioPage;

