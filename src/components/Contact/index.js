import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import "./styles.css";

class Contact extends Component {
  render() {
    return (
			<Container className="Contact">
				<Row>
					<Col>
						<Jumbotron fluid>
							<h1 className="display-3">Aaron Orza</h1>
							<h1 className="display-4">Artistic Director</h1>
							<a href="tel:+14156134104">(415)-613-4104</a>
							<hr className="my-2"></hr>
							<h1 className="display-3">Kristin Lindsay</h1>
							<h1 className="display-4">Assistant Director</h1>
							<a href="tel:+14152720481">(415)-272-0481</a>
							<hr className="my-2"></hr>
							<h1>
								<a href="mailto:info@ncbacademy.com">info@ncbacademy.com</a>
							</h1>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
