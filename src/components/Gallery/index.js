import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';
import InstagramEmbed from 'react-instagram-embed';

import YouTubeFrame from '../YouTubeFrame';
import myAPI from '../../api.js'

class Gallery extends Component {
	constructor(props){
		super(props);

		this.state = {
			instagram : {},
		}

	}

	mapContentToState(){
		let fetchAddress = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+myAPI.instagram;
		fetch(fetchAddress)
    .then(res => res.json())
    .then(
      (result) => {
				console.log(result);
				let myMap = result.data;
				myMap.forEach( (data) => {
					this.setState({
						instagram: [
							...this.state.instagram,
							data.link
						]
					});
					console.log(this.state);
				});
      },
      (error) => {
        this.setState({
          content: "error"
        });
      }
  	)
	}

	renderIG(){
		this.state.instagram.forEach( (url) => {
			return(
				<Row>
					<Col>
						<InstagramEmbed
							url={url}
							maxWidth={640}
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
			);
		});
	}

	componentWillMount(){
		this.mapContentToState();
		console.log(this.state);
	}

	render() {
		let winX = 768;
		let winY = 468;
		if(window.innerWidth < 1200){
			if(window.innerWidth < 992){
				if(window.innerWidth < 768){
					if(window.innerWidth < 576){
						winX = 326;
						winY = 198;
					}
					else{
						winX = 457;
						winY = 278;
					}
				}
				else{
					winX = 640;
					winY = 390;
				}
			}else{
				winX = 768;
				winY = 468;
			}
		}
	  return(
	    <Container className="Gallery">
				<Row>
					<Col>
						<YouTubeFrame src="PLXeXlqUgjSWOq9BGX4j4WbzBJ5OC7OpUD" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Some description</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<YouTubeFrame src="PLXeXlqUgjSWNzdoC-wIJwJaQ-8jMqth6G" height={winY} width={winX}/>
					</Col>
					<Col>
						<p>Another description</p>
					</Col>
				</Row>
				{this.renderIG}
			</Container>
	  );
	}
}

export default Gallery;
