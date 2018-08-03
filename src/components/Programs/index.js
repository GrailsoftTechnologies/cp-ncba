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
				<Container className="Programs">
					<Row>
						<Col>
							<Jumbotron fluid>
				        <Container fluid>
				          <h1 className="display-3">Program Information</h1>
				          <p className="lead">
										Text to come
									</p>
				        </Container>
				      </Jumbotron>
						</Col>
					</Row>
					<Row>
            <Col lg="4">
              <Card>
                <CardImg top width="100%" src={pic1} alt="Card image cap" />
                <CardBody>
                  <CardTitle>How to Enroll</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText>Please email Assistant Director Kristin Lindsay for inquiries. A private lesson will be required for all new students interested in enrolling the Nashville Classical Ballet Academy. Parents are strongly encouraged to observe. Families will be contacted shortly after the private lesson for further discussion, and from there may be invited to attend a regular scheduled class. Payment can be made through PayPal.</CardText>
                  <Button href={"#/Contact"}>Contact</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardImg top width="100%" src={pic2} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Curriculum</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText>This can be an openining description of what the classes are like, linking to a more detailed description page</CardText>
                  <Button>Explore</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardImg top width="100%" src={pic3} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Pricing and Payment</CardTitle>
                  <CardText>This text can be a brief lead into the cost of enrollment, as well as how to go about payment through PayPal</CardText>
                  <Button>Continue</Button>
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
