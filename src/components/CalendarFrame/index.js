import React, { Component } from 'react';

class CalendarFrame extends Component {
  render() {

    return (
      <div>
        <iframe id="calendar" src="https://calendar.google.com/calendar/embed?src=i_131.252.200.188%23sunrise%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}

export default CalendarFrame;
