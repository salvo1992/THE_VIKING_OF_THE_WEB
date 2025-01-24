import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage'; 
import PortfolioPage from './components/Pages/PortfolioPage'; 
import ServicesPage from './components/Pages/ServicesPage'; 
import SkillsPage from './components/Pages/SkillsPage'; 
import FeedbackPage from './components/Pages/FeedbackPage'; 
import ClientsPage from './components/Pages/ClientsPage'; 
import LoginPage from './components/Pages/LoginPage';
import AdminPage from './components/Pages/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAdmin = true; // Imposta a true se l'utente è admin, altrimenti false

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/skills" element={<SkillsPage isAdmin={isAdmin} />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/admin" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminPage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;

