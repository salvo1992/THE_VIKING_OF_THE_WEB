import React from 'react';
import { Navigate } from 'react-router-dom'; // Usa Navigate invece di Redirect

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Se l'utente non è autenticato, naviga alla pagina di login
    return <Navigate to="/login" />;
  }

  // Se l'utente è autenticato, mostra il componente figlio
  return children;
};

export default ProtectedRoute;

