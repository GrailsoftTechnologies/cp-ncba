import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import "./styles.css";

import PDFFrame from '../PDFFrame'

import pdf from '../../img/Summer flyer 2019.pdf'
class SummerIntensive extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: ((window.innerWidth > 576) ? 400 : parseInt(window.innerWidth*.75, 10)),
      height: (parseInt(window.innerHeight * .80, 10)), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    return (
			<Container className="SummerIntensive">
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Nashville Classical Ballet Academy Summer Intensive Details 2019</h1>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container fluid>
                <Row style={{margin: '0px'}}>
                  <Col lg="6">
                    <h2>When:</h2>
                    <h4>July 1st – August 3rd</h4>
                    <h4>*No class July 4th</h4>
                  </Col>
                  <Col lg="6">
                    <h2>Where:</h2>
                    <h4>1850 General George Patton Dr.</h4>
                    <h4>Unit E</h4>
                    <h4>Franklin, TN  37067</h4>
                  </Col>
                  <Col lg="6">
                    <h2>Time:</h2>
                    <h4>Monday – Friday 10:00am-2:00pm</h4>
                    <h4>Saturday 12:00-2:00pm</h4>
                  </Col>
                  <Col lg="6">
                    <h2>Classes:</h2>
                    <h4>Technique, Pointe, and Floor Barre</h4>
                    <p>Guest faculty may introduce either variations or set choreography. We do request students bring their own yoga mat and theraband.</p>
                  </Col>
                  <Col lg="6">
                    <h2>Attire:</h2>
                    <h4>Black leotard and pink tights for ladies </h4>
                    <h4>Black tights and fitted plain t-shirt/tank top for gentleman</h4>
                    <h4>Saturday classes free dress</h4>
                  </Col>
                  <Col lg="6">
                    <h2>Guest Faculty:</h2>
                    <h4>All guest faculty for NCBA’s 2019 summer intensive will be announced at a later date. NCBA takes into great consideration those who receive invite to guest.</h4>
                  </Col>
                  <Col lg="12">
                    <h2>Cost:</h2>
                    <h4>Full 5 week program $1,500.00</h4>
                    <h4>Attending the entire intensive is strongly recommended although if only able to attend a certain portion:</h4>
                    <h4>Week 1: $325.00 *no class July 4th</h4>
                    <h4>Week 2: $375.00</h4>
                    <h4>Week 3: $375.00</h4>
                    <h4>Week 4: $375.00</h4>
                    <h4>Week 5: $375.00</h4>
                    <h4>A deposit of $100.00 must be made at time of enrollment or no later than April 15th to secure students place. Full tuition must be paid by June 5th.</h4>
                  </Col>
                  <Col lg="12">
                    <h2>Audition:</h2>
                    <h4>Students seeking consideration for NCBA’s summer intensive please send a first arabesque and tendu croise devant photo with student’s name and date of birth to <a href="info@ncbacademy.com">info@ncbacademy.com</a>. Invitation to attend class will follow if applicable or request for a short video to be sent if abroad.  For further questions please direct to <a href="mailto:Kristin@ncbacademy.com">Kristin@ncbacademy.com</a></h4>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
				<Row>
					<Col>
						<PDFFrame source={pdf} title="Summer Intensive Program" />
					</Col>
				</Row>
			</Container>
    );
  }
}

export default SummerIntensive;
