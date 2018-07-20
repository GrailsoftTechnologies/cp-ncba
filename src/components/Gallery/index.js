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
  	<div className="Gallery">
      <Container>
				<Row>
					<Col>
						<YouTubeFrame src="PLXeXlqUgjSWOq9BGX4j4WbzBJ5OC7OpUD" height={winY} width={winX}/>
					</Col>
					<Col>
						<ol>
							<li>
								Video 1
							</li>
							<li>
								Video 2
							</li>
							<li>
								Video 3
							</li>
							<li>
								Video 4
							</li>
						</ol>
					</Col>
				</Row>
				<Row>
					<Col sm="9">
						<YouTubeFrame src="PLXeXlqUgjSWNzdoC-wIJwJaQ-8jMqth6G" height={winY} width={winX}/>
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
