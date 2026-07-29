import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GitHubUserSearchApp } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitHubUserSearchApp />
  </StrictMode>,
);
