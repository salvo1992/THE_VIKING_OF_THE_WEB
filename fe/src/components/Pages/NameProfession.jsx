import React, { useState, useEffect } from 'react';
import './NameProfession.css'; // Assicurati che il CSS sia importato

const NameProfession = () => {
  const [isNameVisible, setIsNameVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsNameVisible(prev => !prev); // Alterna tra il nome e la professione
    }, 3000); // Cambia ogni 3 secondi

    return () => clearInterval(intervalId); // Pulisce l'intervallo quando il componente è smontato
  }, []);

  return (
    <div className="name-profession">
      <h1 className="name-title">
        {isNameVisible ? 'Il Vikingo del Web': 'DevSecOps - Programmatore'}
      </h1>
    </div>
  );
};

export default NameProfession;

