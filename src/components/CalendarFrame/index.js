import React, { Component } from 'react';
import "./styles.css" ;

class CalendarFrame extends Component {


  render() {
		if (this.props.list) {
			return (
				<div>
					<iframe src="https://calendar.google.com/calendar/embed?showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=i_131.252.200.188%23sunrise%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago"  width="400" height="600" frameborder="0" scrolling="no" title="icalframe1"></iframe>
				</div>
			);
		} else {
			return (
				<div>
					<iframe src="https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=i_131.252.200.188%23sunrise%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago"  width="800" height="800" frameborder="0" scrolling="no" title="icalfram2"></iframe>
				</div>
			)
		}

  }
}

CalendarFrame.defaultProps = {
	width : 800,
	height : 1600,
	list: true,
}

CalendarFrame.propTypes = {

}

export default CalendarFrame;
