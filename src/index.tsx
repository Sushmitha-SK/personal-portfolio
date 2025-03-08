import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { app } from './firebase';
import { getAnalytics } from 'firebase/analytics';

const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>P
    <App />
  </React.StrictMode>
);


