import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import './styles.css';

class Programs extends Component {
render() {
  return(
  	<div>
			<p>Programs</p>
				<Container>
					<Row>
						<Col>
							<Jumbotron fluid>
				        <Container fluid>
				          <h1 className="display-3">A little about me</h1>
				          <p className="lead">
										Aaron Orza, a San Francisco native was born November 1981. He is from a dancing family, one of six and also a twin. Both his parents had professional careers with Oakland Ballet and all siblings danced or are still currently dancing with SFB and PNB. He has grown up around the highest standard of the art form from the beginning of his training. Aaron started in ballet at the age of 8 at City Ballet of San Francisco under Damara Bennett, later moving onto Marin Ballet under the direction of Margret Swarthout. By the time he was 11 years old he was accepted with full scholarship to San Francisco Ballet with Lola De Avila as director. He trained under Jorge Esquivel, Ricardo Bustamante, Irina Jocobson, Parrish Maynard, Johan Renval as well as many other world-renowned teachers and dancers at San Francisco Ballet from the age of 11 to 17. During the time of his training he attended four summers at School of American Ballet and was also excepted to the year-round program with full scholarship. In his return to SFB he was awarded an apprenticeship at 17. Within the first three months of the apprenticeship, he joined the company and continue his career there for twelve seasons. After a very successful and hard working career, he moved onto other opportunities such as guesting with numerous ballet companies and schools around the country. Aaron is now pursuing leadership positions in the ballet world. He has been teaching all over the country, schools and professional companies alike. After being invited to teach at the Rock School for Dance Education summer intensive 2015, he was invited to stay for the year round program and named Ballet Master. In his time at the Rock School he privately coached students for YAGP whom many made it to the New York finals and were awarded scholarships and invited to preprofessional schools and programs internationally and around the states. This position gave him the opportunity of choreographing individual solos and ensemble pieces for the year end showcases, divertissements for Nutcracker as well as staging Swan Lake and other classical ballets. Aaron is a people person and good with dancers from all types of backgrounds. With this he carries an understanding of so many different foundations and cultural perspectives on ballet and dance. After so many years in this industry, he has learned how to curate both full length ballet's and mixed bills. Aaron has the ability to mold and create, and is exceptional in forming a positive but productive environment. Being from a big family and growing up only knowing the best of what ballet has to offer, he knows and understands the importance of leading by example. Aaron has a passion for preserving the classical art form as well pushing the boundaries for new works.
									</p>
				        </Container>
				      </Jumbotron>
						</Col>
					</Row>
				</Container>
		</div>
    );
  }
}

export default Programs;
