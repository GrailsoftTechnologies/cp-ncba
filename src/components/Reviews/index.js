import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Jumbotron, Container } from 'reactstrap';
import './styles.css';

class Reviews extends Component {
	constructor(props){
		super(props);

		this.state = {
			content : [],
		}

	}

	mapContentToState(){
		fetch("https://www.googleapis.com/blogger/v3/blogs/6105946992458304803/posts/?key=AIzaSyAxXlgJkFdgB4tiD5xCG9HOjX2ENWgZZlU")
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
