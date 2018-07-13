import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';
import CarouselFrame from '../CarouselFrame';


class Home extends Component {
  render() {
		return(
			<div className="Home">
				<CarouselFrame/>
        <Container>
          <Row>
            <Col>
              <p>1</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>2</p>
            </Col>
            <Col>
              <p>3</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>4</p>
            </Col>
            <Col>
              <p>5</p>
            </Col>
            <Col>
              <p>6</p>
            </Col>
          </Row>
        </Container>
			</div>
		)
  }
}

export default Home;
