import React, { Component } from 'react';
import './styles.css';

import CalendarFrame from '../CalendarFrame';

class Schedule extends Component {
render() {
  return(
  	<div>
			<p>Schedule</p>
			<CalendarFrame/>
		</div>
    );
  }
}

export default Schedule;
