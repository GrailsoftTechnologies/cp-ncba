import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Row, Col } from 'reactstrap';

import myAPI from '../../api.js'

class InstagramFrame extends Component {
	constructor(props){
		super(props);

		this.state = {
			urls : ["https://instagr.am/p/Bl4m0xInwQl/"],
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

	componentWillMount(){
		this.mapContentToState();
		console.log(this.state);
	}

	render() {
		if (this.state.urls[0]){
			this.state.urls.forEach( (url) => {
				return (
					<Row>
						<Col>
							<InstagramEmbed
								url={this.state.instagram[0]}
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
		}else{
			return(
				<p>poop</p>
			);
		}
  }
}

InstagramFrame.defaultProps = {
	src: "PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD",
	width: 640,
	height: 390,
}

export default InstagramFrame;
