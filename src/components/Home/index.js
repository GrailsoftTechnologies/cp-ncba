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
	              <p className="lead">Different Classes and Levels of Instruction</p>
	              <hr className="my-2" />
	              <p>This can be a link for the Programs Section</p>
	              <p className="lead">
	                <Button href={"#/Programs"} color="primary">See Classes</Button>
	              </p>
	            </Jumbotron>
	          </Col>
	        </Row>
	      </Container>
			</div>
		)
  }
}

export default Home;
