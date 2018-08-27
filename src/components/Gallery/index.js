import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';


import YouTubeFrame from '../YouTubeFrame';
import InstagramFrame from '../InstagramFrame';

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
						<YouTubeFrame src="RZNlRsg6sL8" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Karen Humphrey</p>
						<p>Teatrul De Balet Sibiu</p>
						<p>Coached by Aaron Orza</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="4Mepg8po39g" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Ayami Sato</p>
						<p>Arts Ballet Theatre of Florida</p>
						<p>Coached by Aaron Orza</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="L5rG9SiFxAU" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Nicole Ostertag</p>
						<p>Choreographed by Aaron Orza</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="hKRMZT781lA" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Harry Warshaw</p>
						<p>Pittsburgh Ballet Theatre</p>
						<p>Coached by Aaron Orza</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="G33G-SG6Ro4" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Rocio Aguero</p>
						<p>Ballet Estable del Teator Colon</p>
						<p>Coached by Aaron Orza</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="Sraj3VsihA8" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Kenna Gold</p>
						<p>Orlando Ballet Trainee</p>
						<p>Choreographed by Aaron Orza</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="ax-I1ZPNTvI" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Anna Tateda</p>
						<p>Victoria, BC</p>
						<p>Choreographed by Aaron Orza</p>
					</Col>
				</Row>
			</Container>
	  );
	}
}

export default Gallery;
