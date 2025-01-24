import React from 'react';
import './ClientsPage.css';

const ClientsPage = () => {
  return (
    <div className="clients-page">
      <h2>Our Clients</h2>
      <div className="clients">
        <div className="client">
          <img src="path_to_logo.jpg" alt="Client 1" />
        </div>
        <div className="client">
          <img src="path_to_logo.jpg" alt="Client 2" />
        </div>
        {/* Aggiungi altri loghi dei clienti */}
      </div>
    </div>
  );
};

export default ClientsPage;

