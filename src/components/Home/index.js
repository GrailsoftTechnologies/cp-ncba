import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import CarouselFrame from '../CarouselFrame';

import pic1 from '../../img/1.jpg';
import pic2 from '../../img/2.jpg';
import pic3 from '../../img/3.jpg';
import pic4 from '../../img/weebly4.png';


class Home extends Component {
  render() {
		return(
			<div className="Home">
        <Container id="contentContainer">
					<Row>
						<Col id="bgimage">
							<div className="bgtext">
								<h1>Nashville Classical Ballet Academy</h1>
								<h2>Aaron Orza, Director</h2>
							</div>
							<img src={pic4} alt="background picture" />
						</Col>
					</Row>
          <Row>
            <Col>
              <Jumbotron id="jumbo1">
                <h1 className="display-3">Here's a content box</h1>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron id="jumbo2">
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col>
              <Jumbotron id="jumbo3">
                <h1 className="display-5">More Content Here</h1>
								<hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
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
