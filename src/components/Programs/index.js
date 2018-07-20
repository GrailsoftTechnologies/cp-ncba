import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

import pic1 from '../../img/1.jpg';
import pic2 from '../../img/2.jpg';
import pic3 from '../../img/3.jpg';

class Programs extends Component {
render() {
  return(
  	<div>
				<Container>
					<Row>
						<Col>
							<Jumbotron fluid>
				        <Container fluid>
				          <h1 className="display-3">Program Information</h1>
				          <p className="lead">
										Nashville Ballet Classical Ballet Academy offers year-round instruction in classical ballet for students in Levels __ and will also hold a __ week summer intensive from Monday, June __, 2019 through Saturday, July __, 2019.
									</p>
				        </Container>
								<p className="lead">
                  <Button href={"#/Schedule"} color="success">See Full Schedule</Button>
                </p>
				      </Jumbotron>
						</Col>
					</Row>
					<Row>
            <Col>
              <Card>
                <CardImg top width="100%" src={pic1} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={pic2} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src={pic3} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
				</Container>
		</div>
    );
  }
}

export default Programs;
