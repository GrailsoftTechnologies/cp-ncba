import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import pic4 from '../../img/weebly4.png';

class Home extends Component {
  render() {
		return(
			<div className="Home">
				<Container>
					<Row>
						<Col >
							<div id="bgtext">
								<h1>NASHVILLE</h1>
                <h1>CLASSICAL</h1>
                <h1>BALLET</h1>
                <h1>ACADEMY</h1>
							</div>
							<img id="bgimage" src={pic4} alt="background" />
						</Col>
					</Row>
	        <Row>
	          <Col>
	            <Jumbotron fluid>
	              <h1 id="missionText">
									Nashville Classical Ballet Academy is designed to meet the needs of the dedicated student seeking a professional career in ballet. We offer an elite ballet education, providing students with a refined and sophisticated level of training and self-discipline to thrive in any professional environment. We strive to share our passion for classical ballet, our training and experience in an environment with which all our students can reach success.
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
