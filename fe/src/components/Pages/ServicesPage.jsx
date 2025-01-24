import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2>My Services</h2>
      <div className="services">
        <div className="service">
          <img src="path_to_icon.jpg" alt="Service 1" />
          <h3>UI/UX Design</h3>
          <p>Creating modern and user-friendly interfaces.</p>
        </div>
        <div className="service">
          <img src="path_to_icon.jpg" alt="Service 2" />
          <h3>Web Development</h3>
          <p>Building fast and responsive websites.</p>
        </div>
        {/* Aggiungi altri servizi */}
      </div>
    </div>
  );
};

export default ServicesPage;

