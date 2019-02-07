import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import IGFrame from '../IGFrame';

import myAPI from '../../api.js'

class InstagramFrame extends Component {
	constructor(props){
		super(props);

		this.state = {
			urls : [],
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
						urls: [
							...this.state.urls,
							data.link
						]
					});
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
	}

	render() {
		let list = null;
		console.log(this.state.urls)
		if (this.state.urls[0]){
			list = this.state.urls.map((url, index) =>
				<Row key={index}>
					<Col>
						<IGFrame
							source={this.state.urls[index]}
						/>
					</Col>
				</Row>
			);
			return list;
		}else{

			return(
				<p>poop</p>
			);
		}
  }
}

InstagramFrame.defaultProps = {
	url: "PLXeXlqUgjSWNAZFPJB6rf7uOBUtvEjfJD",
	width: 340,
}

export default InstagramFrame;
