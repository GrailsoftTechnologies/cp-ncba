import React, { Component } from 'react';
import './styles.css';
import { Media } from 'reactstrap';

import YouTubeFrame from '../YouTubeFrame';
import Logo from '../../img/templogo.png';

class Gallery extends Component {
render() {
  return(
  	<div>
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
			<Media>
		    <Media left href="#">
		      <Media object data-src={Logo} alt="Generic placeholder image" />
		    </Media>
		    <Media body>
		      <Media heading>
		        Media heading
		      </Media>
		      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
		    </Media>
		  </Media>
		</div>
    );
  }
}

export default Gallery;
