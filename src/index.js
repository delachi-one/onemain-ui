import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OneMainFinanceUI from './OneMainFinanceUI';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <OneMainFinanceUI />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
