import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import pic4 from '../../img/weebly4.png';
import paypal from '../../img/paypal.png';



class Home extends Component {
  render() {
		return(
			<div className="Home">
        <Container id="contentContainer">
					<Row>
						<Col id="bgimage">
							<div className="bgtext">
								<h1>Nashville Classical Ballet Academy</h1>
								<h3>Aaron Orza - Artistic Director</h3>
							</div>
							<img src={pic4} alt="background" />
						</Col>
					</Row>
          <Row>
            <Col>
              <Jumbotron id="jumbo1">
                <h1 className="display-4">Our mission</h1>
                <hr className="my-2" />
                <p>
									Nashville Classical Ballet Academy offers pre-professional classical ballet training and individual coaching for students of a mature level. Our goal is to create an environment of strong work ethic, for learning that fosters needs of those on a career bound track. personal growth in all our students and brings out the best in dancers from all backgrounds.
								</p>
                <p className="lead">
                  <Button href={"#/About"} color="secondary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron id="jumbo2">
                <p className="lead">Different Classes and Levels of Instuction</p>
                <hr className="my-2" />
                <p>This can be a link for the Programs Section</p>
                <p className="lead">
                  <Button href={"#/Programs"} color="primary">See Classes</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col>
              <Jumbotron id="jumbo3">
								<a href="https://www.paypal.com"><img  id="paypal" src={paypal} alt="paypal"></img></a>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
			</div>
		)
  }
}

export default Home;
