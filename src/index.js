import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <HashRouter basename={ process.env.PUBLIC_URL }>
    <App />
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();
