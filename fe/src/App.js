import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage'; 
import PortfolioPage from './components/Pages/PortfolioPage'; 
import ServicesPage from './components/Pages/ServicesPage'; 
import SkillsPage from './components/Pages/SkillsPage'; 
import FeedbackPage from './components/Pages/FeedbackPage'; 
import ClientsPage from './components/Pages/ClientsPage'; 
import LoginPage from './components/Pages/login/LoginPage';
import AdminPage from './components/Pages/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import LetterGlitch from './components/glitch-home/LetterGlitch';
import StatusCode from './components/StatusCode';
 // Importa il provider
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Stato autenticazione

  return (
    
    <Router>
      {/* La Navbar rimane inalterata */}
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/glitch" element={<LetterGlitch />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/clients" element={<ClientsPage />} />

        {/* Login solo per admin */}
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/admin" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />} 
        />

        {/* Protegge la pagina Admin */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminPage />
            </ProtectedRoute>
          } 
        />

        {/* Redirect per percorsi sconosciuti alla pagina degli errori */}
        <Route path="/error" element={<StatusCode />} />
        <Route path="*" element={<StatusCode />} />
      </Routes>
    </Router>
   
  );
};

export default App;




