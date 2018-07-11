import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <HashRouter basename={ process.env.PUBLIC_URL }>
    <App />
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();
