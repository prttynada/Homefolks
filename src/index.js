import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthContextProvier } from './context/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthContextProvier>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </AuthContextProvier>
);
