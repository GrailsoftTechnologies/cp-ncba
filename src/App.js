import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed?listType=playlist&list=PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD"
  frameborder="0"></iframe>
      </div>
    );
  }
}

export default App;
