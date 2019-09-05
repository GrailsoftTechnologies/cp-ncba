import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import "./styles.css";

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
                <h4 className="display-4">Details regarding Summer Program 2020 will be announced at a later date</h4>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
			</Container>
    );
  }
}

export default SummerIntensive;
