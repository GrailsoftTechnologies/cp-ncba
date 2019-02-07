import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

import audition from '../../img/audition.jpg';
import curriculum from '../../img/curriculum.jpg';
import pricing from '../../img/pricing.jpg';

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
            <Col xl="4">
              <Card>
                <CardImg id="curriculum" top width="100%" src={curriculum} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Curriculum</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText>
										Nashville Classical Ballet Academy is happy to announce we are opening our doors to the great city of Nashville. We are proud to call ourselves the first classical ballet school to offer an educational experience passed down through generations of legendary dancers and master teachers. This elite training program is dedicated to teaching the highest standard of ballet education to prepare career bound students. In our program we provide technique, pointe, conditioning, and private coaching to excel the abilities of our dancers. We offer a day program to suit the needs of our most advanced level and working to build an evening program fitted to an intermediate level.
									</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card>
                <CardImg id="audition" top width="100%" src={audition} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Audition and Placement</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText>
										New students interested in attending NCBA please send a direct email to <a href='mailto:kirstin@ncbacademy.com'>Kristin@ncbacademy.com</a> to request a trial class or to schedule a time to sit in and view our program. Parents are encouraged to observe during student's trial class. Families will be contacted shortly after for further discussion.  
									</CardText>
                  <Button href={"/contact"}>Contact</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card>
                <CardImg id="pricing" top width="100%" src={pricing} alt="Card image cap" />
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
