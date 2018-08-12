import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

import pic1 from '../../img/image2.jpeg';
import pic2 from '../../img/image3.jpeg';
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
				        </Container>
				      </Jumbotron>
						</Col>
					</Row>
					<Row>
            <Col lg="4">
              <Card>
                <CardImg top width="100%" src={pic1} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Audition and Placement</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText>
										A private lesson will be required for all new students interested in attending NCBA. Parents are strongly encouraged to observe. Families will be contacted shortly after the private lesson for further discussion and from there may be invited to attend a regular scheduled class. Please email the Assistant Director, Kristin Lindsay for inquiries.
									</CardText>
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
                  <CardText>
										Nashville Classical Ballet Academy is happy to announce we are opening our doors to the great city of Nashville. We are proud to call ourselves the first classical ballet school to offer an educational experience passed down through generations of legendary dancers and master teachers. This elite training  program is dedicated to teaching the highest standard of ballet education to prepare career bound students. In our program we provide technique, pointe, conditioning, and private coaching to excel the abilities of our dancers. We offer a day program to suit the needs of our most advanced level and an evening program fitting to our intermediate level.
									</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardImg top width="100%" src={pic3} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Pricing</CardTitle>
                  <CardText>
										All pricing and tuition inquires please email info@ncbacademy.com
									</CardText>
                  <Button href={"mailto:info@ncbacademy.com"}>Contact</Button>
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
