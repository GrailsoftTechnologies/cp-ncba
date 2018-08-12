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
							<p><a href="mailto:aaron@ncbacademy.com">aaron@ncbacademy.com</a></p>
							<hr className="my-2"></hr>
							<h1 className="display-3">Kristin Lindsay</h1>
							<h1 className="display-4">Assistant Director</h1>
							<a href="tel:+14152720481">(415)-272-0481</a>
							<p><a href="mailto:kristin@ncbacademy.com">kristin@ncbacademy.com</a></p>
							<hr className="my-2"></hr>
							<a href="mailto:info@ncbacademy.com">info@ncbacademy.com</a>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron fluid>
							<p>
								During our search for a new building, the Milele Academy has graciously allowed us to rent studio space. We will be holding all classes and private lessons here at this time. Please direct all questions, emails and phone calls to info@ncbacademy.com
							</p>
							<p>The Milele Academy</p>
							<p>1919 Church Street</p>
							<p>Nashville, TN 37203</p>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
