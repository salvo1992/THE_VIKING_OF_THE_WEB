import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorProvider } from "./context/ErrorContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</ErrorProvider>
);

