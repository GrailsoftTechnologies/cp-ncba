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
              <hr />
              <br />
              <p>To make a donation in support of NCBA please click the link DONATE</p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="EABJ3TGHV4PHA" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
