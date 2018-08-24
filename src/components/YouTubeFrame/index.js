import React, { Component } from 'react';

class YouTubeFrame extends Component {
  render() {
    if(this.props.playList){
      return (
        <div>
          <iframe id="player" type="text/html" width={this.props.width} height={this.props.height}
    src={"https://www.youtube.com/embed?listType=playlist&list=" + this.props.src}
    frameBorder="0" title="YTplaylist"></iframe>
        </div>
      );
    }
    return (
      <div>
        <iframe id="player" type="text/html" width={this.props.width}
          height={this.props.height}
          src={"https://www.youtube.com/embed/" + this.props.src}
          frameBorder="0" 
          title="YTvideo"></iframe>
      </div>
    );
  }
}

YouTubeFrame.defaultProps = {
	src: "PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD",
  playList: false,
	width: 640,
	height: 390,
}

export default YouTubeFrame;
