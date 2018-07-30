import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import EmbedContainer from 'react-oembed-container';
import InstagramEmbed from 'react-instagram-embed'
import "./styles.css";

class Contact extends Component {
	constructor(props){
		super(props);

		this.state = {
			content : {html: "nada",
								 media_id: 0},
		}

	}

	mapContentToState(){
		let fetchAddress = "https://api.instagram.com/oembed?url=http://instagr.am/p/Blt18e-HXSL/&omitscript=true";
		console.log(fetchAddress);
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

	}

  render() {
		console.log(this.state);
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

					</Col>
				</Row>
				<Row>
					<Col>
						<EmbedContainer
				      markup={ this.state.content.html }
				    >
							<article id={`post-${this.state.content.media_id}`}>
				        <h2>{ this.state.content.html }</h2>
				        <div dangerouslySetInnerHTML={{ __html: this.state.content.html }} />
				      </article>
				      <p>Article text here</p>
							<div dangerouslySetInnerHTML={{ __html: this.state.content.html }} />
				    </EmbedContainer>
					</Col>
				</Row>
				<Row>
					<Col>
						<InstagramEmbed
						  url='https://instagr.am/p/Blt18e-HXSL/'
						  maxWidth={320}
						  hideCaption={false}
						  containerTagName='div'
						  protocol=''
						  injectScript
						  onLoading={() => {}}
						  onSuccess={() => {}}
						  onAfterRender={() => {}}
						  onFailure={() => {}}
						/>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;
