import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';

import YouTubeFrame from '../YouTubeFrame';

class Gallery extends Component {
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
					winY = 300;
				}
				else{
					winY = 400;
				}
			}
			else{
				winY = 600;
			}
		}else{
			winY = 800;
		}
	}
	console.log(winX);
  return(
  	<div className="Gallery">
      <Container>
				<Row>
					<Col>
						<YouTubeFrame src="PLXeXlqUgjSWOq9BGX4j4WbzBJ5OC7OpUD"/>
					</Col>
					<Col>
						<p>Words</p>
					</Col>
				</Row>
				<Row>
					<Col sm="9">
						<YouTubeFrame src="PLXeXlqUgjSWNzdoC-wIJwJaQ-8jMqth6G"/>
					</Col>
					<Col sm="3">
						<p>More Words</p>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}

export default Gallery;
