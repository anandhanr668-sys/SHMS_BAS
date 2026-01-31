import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/layout.css';

import './index.css';
import './styles/global.css';
import "./styles/dashboard.css";
import './styles/login.css';
import './styles/formBuilder.css';
import './styles/rulesBuilder.css';
import './styles/reportDesigner.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
