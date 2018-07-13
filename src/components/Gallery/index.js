import React, { Component } from 'react';
import './styles.css';
import { Media } from 'reactstrap';

import YouTubeFrame from '../YouTubeFrame';

class Gallery extends Component {
render() {
  return(
  	<div>
      <Media>
       <Media right href="#">
        <YouTubeFrame/>
       </Media>
       <Media body>
         <Media heading>
           Media heading
         </Media>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
       </Media>
     </Media>
     <Media>
      <Media right href="#">
       <YouTubeFrame/>
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
