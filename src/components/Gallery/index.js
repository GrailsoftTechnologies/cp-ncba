import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';

import YouTubeFrame from '../YouTubeFrame';

class Gallery extends Component {
render() {
	let winX = 768;
	let winY = 468;
	if(window.innerWidth < 1200){
		if(window.innerWidth < 992){
			if(window.innerWidth < 768){
				if(window.innerWidth < 576){
					winX = 326;
					winY = 198;
				}
				else{
					winX = 457;
					winY = 278;
				}
			}
			else{
				winX = 640;
				winY = 390;
			}
		}else{
			winX = 768;
			winY = 468;
		}
	}
  return(
    <Container className="Gallery">
			<Row>
				<Col>
					<YouTubeFrame src="PLXeXlqUgjSWOq9BGX4j4WbzBJ5OC7OpUD" height={winY} width={winX}/>
				</Col>
				<Col>
					<p>Some description</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<YouTubeFrame src="PLXeXlqUgjSWNzdoC-wIJwJaQ-8jMqth6G" height={winY} width={winX}/>
				</Col>
				<Col>
					<p>Another description</p>
				</Col>
			</Row>
		</Container>
    );
  }
}

export default Gallery;
