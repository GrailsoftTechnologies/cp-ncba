import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import CalendarFrame from '../CalendarFrame';

class Schedule extends Component {
render() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	let winX = 1200;
	let winY = 1000;
	if(window.innerWidth < 1200){
		if(window.innerWidth < 992){
			if(window.innerWidth < 768){
				if(window.innerWidth < 576){
					winX = 300;
				}
				else{
					winX = 550;
				}
			}
			else{
				winX = 750;
			}
		}else{
			winX = 950;
		}
	}

	if(window.innerHeight < 1000){
		if(window.innerHeight < 792){
			if(window.innerHeight < 568){
				if(window.innerHeight < 276){
					winY = 200;
				}
				else{
					winY = 300;
				}
			}
			else{
				winY = 400;
			}
		}else{
			winY = 800;
		}
	}
	console.log(winY);
  return(
		<Container className="Schedule">
			<Row>
				<Col>
					<Jumbotron fluid>
						<Container fluid>
							<h1 className="display-3">Event Calendar</h1>
						</Container>
					</Jumbotron>
				</Col>
			</Row>
			<Row>
				<Col>
					<CalendarFrame width={winX} height={winY} list={(winX < 568)?true:false}/>
				</Col>
			</Row>
			<Row>
				<Col>
					<CalendarFrame width={winX} height={winY/2} importantDates/>
				</Col>
			</Row>
		</Container>
    );
  }
}

export default Schedule;
