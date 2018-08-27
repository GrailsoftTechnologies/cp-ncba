import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import './styles.css';

import aaronProfile from '../../img/aaron.jpeg';
import kristinProfile from '../../img/kristin.jpeg';

class About extends Component {
render() {
  return(
      <Container className="About">
				<Row>
					<Col>
						<Jumbotron>
							<Row>
								<Col sm="6">
									<h1 className="display-3">Aaron Orza</h1>
									<h1 className="display-4">Artistic Director</h1>
								</Col>
								<Col sm="6">
									<img src={aaronProfile} alt="profile"/>
								</Col>
							</Row>
							<hr className="my-2"></hr>
							<Row>
								<Col>
									<p>
									  Aaron Orza comes from a classical ballet upbringing. Both of his parents danced for the Oakland Ballet and all five siblings trained with or had professional careers in companies such as the San Francisco Ballet, New York City Ballet, Pacific Northwest Ballet, and abroad. As a young dancer, Aaron received a majority of his training from the San Francisco Ballet. During the summers he would attend the School of American Ballet. In 1997, Aaron was invited to stay for the year as part of the last generation to study under the great Stanley Williams. Shortly after that opportunity, he returned to the San Francisco Ballet to complete his training and was awarded an apprenticeship that resulted in a 13 year career with the company. Aaron was lucky enough to work with esteemed choreographers and perform works by Balanchine, John Neumeier, Christopher Weldon, William Forsythe, and Alex Ratmanskey to name a few. After retiring from the San Francisco Ballet, Aaron discovered a passion for teaching and coaching classical ballet. As a teacher and coach, Aaron both respects and enjoys the opportunity to pass the technical expertise and world class artistic mentorship he received throughout his career, on to the next generation. Aaron has developed his own curriculum based off of his legendary teachers such as Jorge Esquivel, Irina Jacobson, Johan Renval, Lola De Avila, Parish Manard, Shannon Bresnahan, Joanna Berman, Yuri Possokhov, Yuri Zhukov, Jock Soto, and Stanley Williams, who come from a variety of styles and backgrounds. He strives to pull the best from each teacher to reach training and dancing standards of the top world renowned schools and companies of today. Aaron has held faculty and guest teacher positions at schools and professional companies throughout the United States. From 2015-17, he was a teacher and Ballet Master at the Rock School for Dance Education where he also privately coached students for the Youth America Grand Prix. Several of his students advanced to the final rounds in New York, where they were awarded scholarships to attend pre-professional schools and programs both in the U.S. and abroad. Today, Aaron is proud to call Nashville, Tennessee home, and is delighted to have the opportunity to bring his passion for the art of dance to Nashville Classical Ballet Academy.
									</p>
								</Col>
							</Row>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron>
							<Row>
								<Col sm="6">
									<h1 className="display-3">Kristin Lindsay</h1>
									<h1 className="display-4">Assistant Director</h1>
								</Col>
								<Col sm="5">
									<img src={kristinProfile} alt="profile"/>
								</Col>
								<Col sm="1"></Col>
							</Row>
							<hr className="my-2"></hr>
							<Row>
								<Col>
									<p>
										Kristin studied as a student of Marin Dance Theatre under Margaret Swarthout former soloist of the Royal Ballet. She had a professional career with both Ballet Florida and Company C Contemporary Ballet performing and touring for eight years. Transitioning to a teaching career, she joined the faculty of the Rock School for Dance Education as a teaching artist. With success Kristin was able to place her students into various pre professional summer programs such as English National Ballet and the Paris Opera Ballet School. Upon moving to Tennessee she served on the faculty of Nashville Ballet for one year teaching in both the upper and lower division. Kristin now takes her educational training, professional career, and all teaching experiences to help develop and grow Nashville Classical Ballet Academy.
									</p>
								</Col>
							</Row>
						</Jumbotron>
					</Col>
				</Row>
      </Container>
    );
  }
}

export default About;
