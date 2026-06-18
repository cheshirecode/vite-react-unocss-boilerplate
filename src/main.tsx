import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@unocss/reset/tailwind.css';
import './index.css';
import 'virtual:uno.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
