import React, { Component } from 'react';

class YouTubeFrame extends Component {
  render() {

    return (
      <div>
        <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed?listType=playlist&list=PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD"
  frameBorder="0" title="YTplaylist1"></iframe>
      </div>
    );
  }
}

export default YouTubeFrame;
