import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class YouTubeFrame extends Component {
  render() {

    return (
      <div>
        <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed?listType=playlist&list=PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD"
  frameborder="0"></iframe>
      </div>
    );
  }
}

export default YouTubeFrame;
