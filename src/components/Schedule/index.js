import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import CalendarFrame from '../CalendarFrame';
import PDFFrame from '../PDFFrame'

import pdf from '../../img/2019_2020_schedule.pdf'

class Schedule extends Component {
render() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	let winX = 1110;
	let winY = 1000;
	if(window.innerWidth < 1200){
		if(window.innerWidth < 992){
			if(window.innerWidth < 768){
				if(window.innerWidth < 576){
					winX = 260;
				}
				else{
					winX = 510;
				}
			}
			else{
				winX = 690;
			}
		}else{
			winX = 930;
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
					<CalendarFrame width={winX} height={winY/1.25} list={(winX < 568)?true:false}/>
				</Col>
			</Row>
			<Row>
				<Col>
					<PDFFrame source={pdf} title='2019-2020 Schedule'/>
				</Col>
			</Row>
		</Container>
    );
  }
}

export default Schedule;
