import React, { Component } from 'react';
import './styles.css';
import { Media } from 'reactstrap';

import YouTubeFrame from '../YouTubeFrame';

class Gallery extends Component {
render() {
  return(
  	<div>
			<YouTubeFrame />
      <Media>
       <Media right href="#">
        <YouTubeFrame src="PLXeXlqUgjSWOq9BGX4j4WbzBJ5OC7OpUD"/>
       </Media>
       <Media body>
         <Media heading>
           YouTube Video Playlists
         </Media>
         Playlists can be changed through the youtube account
       </Media>
     	</Media>
     	<Media>
	      <Media right href="#">
	       <YouTubeFrame src="PLXeXlqUgjSWNzdoC-wIJwJaQ-8jMqth6G"/>
	      </Media>
	      <Media body>
	        <Media heading>
	          Individual Videos
	        </Media>
	        Could also be added
	      </Media>
    	</Media>
		</div>
    );
  }
}

export default Gallery;
