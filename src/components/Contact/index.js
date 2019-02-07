import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import "./styles.css";

class Contact extends Component {
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
			<Container className="Contact">
        <Row>
					<Col>
						<Jumbotron fluid>
							<Container fluid>
								<h1 className="display-3">Contact Us</h1>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron fluid>
							<h1 className="display-3">Aaron Orza</h1>
							<h1 className="display-4">Artistic Director</h1>
							<a href="tel:+14156134104">(415)-613-4104</a>
							<p><a href="mailto:aaron@ncbacademy.com">aaron@ncbacademy.com</a></p>
						</Jumbotron>
					</Col>
				</Row>
        <Row>
					<Col>
						<Jumbotron fluid>
							<h1 className="display-3">Kristin Lindsay</h1>
							<h1 className="display-4">Assistant Director</h1>
							<a href="tel:+14152720481">(415)-272-0481</a>
							<p><a href="mailto:kristin@ncbacademy.com">kristin@ncbacademy.com</a></p>
						</Jumbotron>
					</Col>
				</Row>
        <Row>
					<Col>
						<Jumbotron fluid>
							<h1 className="display-3">Office Contact</h1>
							<a href="mailto:info@ncbacademy.com">info@ncbacademy.com</a>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron fluid>
							<p>
								During our search for a new building, we will be renting studio space within the Nashville Area. For more information, please direct all questions, emails and phone calls to info@ncbacademy.com
							</p>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
