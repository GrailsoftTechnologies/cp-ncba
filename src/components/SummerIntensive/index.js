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
                <h1 className="display-3">Summer 2019 Intensive Program</h1>
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
