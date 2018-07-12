import React, { Component } from 'react';
import PrimeNow from '../../img/prime.jpg';
import './styles.css';

import YouTubeFrame from '../YouTubeFrame';
import CalendarFrame from '../CalendarFrame';


class Home extends Component {
  render() {
    return (
      <div>
				<p>Home</p>
				<YouTubeFrame/>
				<CalendarFrame/>
			</div>
    );
  }
}

export default Home;
