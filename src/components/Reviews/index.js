import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Jumbotron, Container } from 'reactstrap';
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
					let myMap = result.items;
					myMap.forEach( (item) => {
						this.setState({
							content: [
								...this.state.content,
								item.content
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

	componentDidMount(){
		this.mapContentToState();
		console.log(myAPI.blogger);
	}

	render() {

	  return(
	  	<Container>
				{this.state.content.map(function(post, index){
						return(<Jumbotron key={index}>{ReactHtmlParser(post)}</Jumbotron>)
					})}
			</Container>
	    );
	  }
	}

export default Reviews;
