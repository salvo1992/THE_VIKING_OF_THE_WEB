import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './DecryptedText';
import ShinyText from './ShinyText';
import styles from './AdminWarning.module.css';

const AdminWarning = ({ onProceed }) => {  // Aggiunto parametro per gestire il passaggio alla login
  const [code, setCode] = useState('');
  const [isCorrectCode, setIsCorrectCode] = useState(false);
  const buttonRef = useRef(null);

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);
    setIsCorrectCode(value === "31052023");
  };

  useEffect(() => {
    if (!isCorrectCode && buttonRef.current) {
      const moveButton = (e) => {
        const button = buttonRef.current;
        if (!button) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = button.getBoundingClientRect();

        const distance = Math.sqrt(
          (clientX - (left + width / 2)) ** 2 +
          (clientY - (top + height / 2)) ** 2
        );

        if (distance < 200) {  // Aumentiamo la distanza per far scappare di più il bottone
          const randomX = Math.random() * 400 - 200; // Spostamento maggiore
          const randomY = Math.random() * 400 - 200;
          button.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
      };

      document.addEventListener("mousemove", moveButton);
      return () => document.removeEventListener("mousemove", moveButton);
    }
  }, [isCorrectCode]);

  return (
    <div className={styles.adminWarningContainer}>
      {/* Testo animato di avviso */}
      <div className={styles.warningTextContainer}>
        <DecryptedText 
          text="⚠️ ATTENZIONE: PAGINA RISERVATA AGLI AMMINISTRATORI
          Se non sei un amministratore, esci subito!
          Il Viking del Web potrebbe arrabbiarsi! 😠
          Grazie per la visita, continua pure il tour al di fuori di qui.
          Lascia un feedback se ti fa piacere! ⚠️"
          speed={150}
          maxIterations={30}
          revealDirection="center"
          animateOn="view"
          className={styles.decryptedText}
        />
      </div>

      {/* Input per il codice di sicurezza */}
      <div className={styles.securityInputContainer}>
        <input
          type="password"
          placeholder="Inserisci il codice segreto..."
          value={code}
          onChange={handleCodeChange}
          className={styles.securityInput}
        />
      </div>

      {/* Bottone animato per accedere al login */}
      <motion.button
        ref={buttonRef}
        className={styles.adminLoginButton}
        whileHover={{ scale: isCorrectCode ? 1.1 : 1 }}
        whileTap={{ scale: isCorrectCode ? 0.9 : 1 }}
        disabled={!isCorrectCode}
        onClick={() => isCorrectCode && onProceed()} // Usa `onProceed()` per far apparire la login
      >
        <ShinyText text="ACCEDI COME ADMIN" speed={3} />
      </motion.button>
    </div>
  );
};

export default AdminWarning;





