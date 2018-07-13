import React, { Component } from 'react';
import './styles.css';

import CarouselFrame from '../CarouselFrame';


class Home extends Component {
  render() {
		return(
			<div className="Home">
				<CarouselFrame/>
			</div>
		)
  }
}

export default Home;
