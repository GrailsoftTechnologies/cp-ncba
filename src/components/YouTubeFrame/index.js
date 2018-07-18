import React, { Component } from 'react';

class YouTubeFrame extends Component {
  render() {

    return (
      <div>
        <iframe id="player" type="text/html" width={this.props.width} height={this.props.height}
  src="http://www.youtube.com/embed?listType=playlist&list=PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD"
  frameBorder="0" title="YTplaylist1"></iframe>
      </div>
    );
  }
}

YouTubeFrame.defaultProps = {
	src: "http://www.youtube.com/embed?listType=playlist&list=PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD",
	width: 640,
	height: 190,
}

export default YouTubeFrame;
