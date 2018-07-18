import React, { Component } from 'react';

class YouTubeFrame extends Component {
  render() {

    return (
      <div>
        <iframe id="player" type="text/html" width={this.props.width} height={this.props.height}
  src={"http://www.youtube.com/embed?listType=playlist&list=" + this.props.src}
  frameBorder="0" title="YTplaylist"></iframe>
      </div>
    );
  }
}

YouTubeFrame.defaultProps = {
	src: "PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD",
	width: 640,
	height: 390,
}

export default YouTubeFrame;
