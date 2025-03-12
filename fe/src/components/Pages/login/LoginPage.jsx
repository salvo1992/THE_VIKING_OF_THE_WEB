import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Per animazioni fluide
import styles from './LoginPage.module.css';
import AdminWarning from './AdminWarning'; // Manteniamo l'avviso admin

const LoginPage = ({ setIsAuthenticated }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      navigate('/admin');
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        navigate('/');
      }, 10000);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {!showLogin ? (
        <AdminWarning onProceed={() => setShowLogin(true)} />
      ) : (
        <motion.div 
          className={styles.box} // Manteniamo la struttura ma aggiungiamo il bordo animato
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form autoComplete="off" onSubmit={handleLogin}>
            <h2>Sign in</h2>

            <div className={styles.inputBox}>
              <input 
                type="text" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span>Username</span>
              <i></i>
            </div>

            <div className={styles.inputBox}>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>

            <div className={styles.links}>
              <a href="#">Forgot Password?</a>
              <a href="#">Signup</a>
            </div>

            <motion.input 
              type="submit" 
              value="Login"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </form>

          {/* Messaggio di errore animato */}
          {error && (
            <motion.div
              className={styles.errorMessage}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              CHI SEI? VAI VIA!
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default LoginPage;




