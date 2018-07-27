import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

import pic1 from '../../img/1.jpg';
import pic2 from '../../img/2.jpg';
import pic3 from '../../img/3.jpg';
import paypal from '../../img/paypal.png';

class Programs extends Component {
render() {
  return(
  	<div>
				<Container className="Programs">
					<Row>
						<Col>
							<Jumbotron fluid>
				        <Container fluid>
				          <h1 className="display-3">Program Information</h1>
				          <p className="lead">
										Please email Assistant Director Kristin Lindsay for inquiries. A private lesson will be required for all new students interested in enrolling the Nashville Classical Ballet Academy. Parents are strongly encouraged to observe. Families will be contacted shortly after the private lesson for further discussion, and from there may be invited to attend a regular scheduled class. Payment can be made through PayPal.
									</p>
				        </Container>
								<p className="lead">
                  <Button href={"#/Contact"} color="success">Contact Us</Button>
                </p>
				      </Jumbotron>
						</Col>
					</Row>
					<Row>
						<Col>
							<Jumbotron fluid>
								<a href="https://www.paypal.com"><img  id="paypal" src={paypal} alt="paypal"></img></a>
              </Jumbotron>
						</Col>
					</Row>
					<Row>
            <Col>
              <Card>
                <CardImg top width="100%" src={pic1} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Conditioning</CardTitle>
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
                  <CardTitle>Technique</CardTitle>
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
                  <CardTitle>Pointe</CardTitle>
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
