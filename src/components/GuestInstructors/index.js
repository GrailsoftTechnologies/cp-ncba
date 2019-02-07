import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import myAPI from '../../api.js'
import ReactHtmlParser from 'react-html-parser';
import './styles.css';

import aaronProfile from '../../img/aaron.jpg';
import kristinProfile from '../../img/kristin.jpg';

class GuestInstructors extends Component {
  constructor(props){
		super(props);

		this.state = {
			content : [],
		}
	}

	async fetchContent(mapArray, pageToken){
		let fetchAddress = "https://www.googleapis.com/blogger/v3/blogs/5826799425781890887/posts/?key="+myAPI.blogger;
		if(pageToken){
			fetchAddress += "&pageToken="+pageToken;
		}
		fetch(fetchAddress)
			.then(res => res.json())
			.then(
				async (result) => {
					mapArray = mapArray.concat(result.items);
					if (result.nextPageToken){
						await this.fetchContent(mapArray, result.nextPageToken)
					}else{
						console.log(mapArray);
						this.mapContentToState(mapArray);
					}
				},
				(error) => {
					console.log("fetch error");
				}
			)
	}

	mapContentToState(myMap){
		myMap.forEach( (item) => {
			this.setState({
				content: [
					...this.state.content,
					item.content
				]
			});
		})
	}

	async componentDidMount(){
		let mapArray = [];
		this.fetchContent(mapArray);
	}
  render() {
    return(
      <Container className="GuestInstructors">
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Guest Instructors</h1>
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

export default GuestInstructors;
