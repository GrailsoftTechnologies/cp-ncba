import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';

class Reviews extends Component {
	constructor(props){
		super(props);

		this.state = {
			content : ["empty"],
		}

	}

	mapContentToState(){
		fetch("https://www.googleapis.com/blogger/v3/blogs/6105946992458304803/posts/?key=AIzaSyAxXlgJkFdgB4tiD5xCG9HOjX2ENWgZZlU")
      .then(res => res.json())
      .then(
        (result) => {
					console.log(result.items);
					let myMap = result.items;
					myMap.forEach( (item) => {
						console.log(item.content);
						this.setState({
							content: [
								...this.state.content,
								item.content
							]
						});
					});
					console.log(this.state);
        },
        (error) => {
          this.setState({
            content: "error"
          });
        }
      )
			console.log(this.state);
	}

	componentDidMount(){
		this.mapContentToState();
	}

	render() {
	  return(
	  	<div>
				<p>Reviews</p>
				<p>{ReactHtmlParser(this.state.content)}</p>
			</div>
	    );
	  }
	}

export default Reviews;
