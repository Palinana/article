import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Navbar from './Components/UI/Navbar/Navbar';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Navbar />
          <Routes />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
