import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles.css';
import myAPI from '../../api.js'

class Reviews extends Component {
	constructor(props){
		super(props);

		this.state = {
			content : [],
		}

	}

	mapContentToState(){
		let fetchAddress = "https://www.googleapis.com/blogger/v3/blogs/7025349432715574756/posts/?key="+myAPI.blogger;
		fetch(fetchAddress)
      .then(res => res.json())
      .then(
        (result) => {
					console.log(result);
					let myMap = result.items;
					let token = result.nextPageToken
					console.log(myMap);
					console.log(token);
					if (token){
						let fetchNextAddress = "https://www.googleapis.com/blogger/v3/blogs/7025349432715574756/posts/?key="+myAPI.blogger+"&pageToken="+token;
						fetch(fetchNextAddress)
				      .then(res => res.json())
							.then(
								(result) => {
									console.log(result);
									let moreItems = result.items;
									myMap = myMap.concat(moreItems);
									console.log(myMap);
									myMap.forEach( (item) => {
										this.setState({
											content: [
												...this.state.content,
												item.content
											]
										});
									});
								}
							)
					}else{
						myMap.forEach( (item) => {
							this.setState({
								content: [
									...this.state.content,
									item.content
								]
							});
						});
					}
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
		console.log(myAPI.blogger);
	}

	render() {

	  return(
	  	<Container className="Reviews">
				<Row>
					<Col>
						<Jumbotron fluid>
							<Container fluid>
								<h1 className="display-3">Student Testimonials</h1>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
				{this.state.content.map(function(post, index){
						return(<Jumbotron key={index}>{ReactHtmlParser(post)}</Jumbotron>)
					})}
			</Container>
	    );
	  }
	}

export default Reviews;
