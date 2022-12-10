import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthContextProvier } from './context/AuthContext';
import { ChatContextProvier } from './context/ChatContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthContextProvier>
    <ChatContextProvier>
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    </ChatContextProvier>
  </AuthContextProvier>
);
