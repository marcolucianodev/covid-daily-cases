import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CovidProvider from './contexts/CovidProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CovidProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CovidProvider>
);
