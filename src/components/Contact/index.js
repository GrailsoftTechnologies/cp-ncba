import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import EmbedContainer from 'react-oembed-container';
import "./styles.css";

class Contact extends Component {
	constructor(props){
		super(props);

		this.state = {
			content : [],
		}

	}

	mapContentToState(){
		let fetchAddress = "https://api.instagram.com/oembed?url=http://instagr.am/p/Blt18e-HXSL/";
		fetch(fetchAddress)
      .then(res => res.json())
      .then(
        (result) => {
					this.setState({
						content: result
					})
					console.log(this.state)
        },
        (error) => {
          this.setState({
            content: "error"
          });
        }
      )
	}

	componentDidMount(){
		this.mapContentToState();
		console.log(this.state);
	}

  render() {
    return (
			<Container className="Contact">
				<Row>
					<Col lg="6">
						<Jumbotron fluid>
							<h1 className="display-3">Aaron Orza</h1>
							<h1 className="display-4">Artistic Director</h1>
							<h1>
								<a href="mailto:aorza@ncbacademy.com">aorza@ncbacademy.com</a>
							</h1>
							<a href="tel:+14156134104"><h1>(415)-613-4104</h1></a>
						</Jumbotron>
					</Col>
					<Col lg="6">
						<Jumbotron fluid>
							<h1 className="display-3">Kristin Lindsay</h1>
							<h1 className="display-4">Assistant Director</h1>
							<h1>
								<a href="mailto:klindsay@ncbacademy.com">klindsay@ncbacademy.com</a>
							</h1>
							<a href="tel:+14152720481"><h1>(415)-272-0481</h1></a>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<div dangerouslySetInnerHTML={{ __html: this.state.content.html }} />
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
