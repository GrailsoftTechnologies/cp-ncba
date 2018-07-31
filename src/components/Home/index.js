import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import pic4 from '../../img/weebly4.png';

class Home extends Component {
  render() {
		return(
			<div className="Home">
				<Container>
					<Row>
						<Col >
							<div id="bgtext">
								<h1>Nashville Classical Ballet Academy</h1>
								<h3>Aaron Orza - Artistic Director</h3>
							</div>
							<img id="bgimage" src={pic4} alt="background" />
						</Col>
					</Row>
	        <Row>
	          <Col>
	            <Jumbotron fluid>
	              <h1 id="missionText">
									Nashville Classical Ballet Academy prepares dedicated students for a professional career in dance. We offer a complete ballet education, providing students with a platform of technique and self-discipline to thrive in any professional environment. We strive to share our passion for ballet, our training and experience in a positive, nurturing culture in which all our students can flourish.
								</h1>
	            </Jumbotron>
	          </Col>
	        </Row>
	      </Container>
			</div>
		)
  }
}

export default Home;
