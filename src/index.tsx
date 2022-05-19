import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals'
import Rotas from './controller/Router'
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Rotas/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
