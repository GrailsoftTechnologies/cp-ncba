import React, { Component } from 'react';
import "./styles.css" ;

class CalendarFrame extends Component {


  render() {
		if (this.props.list) {
			return (
				<div>
					<iframe src="https://calendar.google.com/calendar/embed?showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=i_131.252.200.188%23sunrise%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago"  width={this.props.width} height={this.props.height} frameBorder="0" scrolling="no" title="icalframe1"></iframe>
				</div>
			);
		} else {
			console.log(this.props.src);
			return (
				<div>
					<iframe src="https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=i_131.252.200.188%23sunrise%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago" width={this.props.width} height={this.props.height} frameBorder="0" scrolling="no" title="icalframe2"></iframe>
				</div>
			)
		}

  }
}

CalendarFrame.defaultProps = {
	width : 1200,
	height : 800,
	list: false,
	src: `https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=i_131.252.200.188%23sunrise%40group.v.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FChicago`,
}

CalendarFrame.propTypes = {

}

export default CalendarFrame;
