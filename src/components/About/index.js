import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

class About extends Component {
render() {
  return(
      <Container className="About">
        <Row>
          <Col>
						<h3 id="one">
							A little about Aaron...
						</h3>
            <p>
              San Francisco native Aaron Orza is from a dancing family.  Both his parents danced with the Oakland Ballet and all five of his siblings have danced professionally with either San Francisco Ballet or Pacific Northwest Ballet.  Aaron began his training at the age of eight at City Ballet of San Francisco under Damara Bennett, later moving to Marin Ballet under the direction of Margaret Swarthout.  At the age of eleven, he received a full scholarship to the San Francisco Ballet School where he trained under Jorge Esquivel, Ricardo Bustamante, Irina Jacobson, Parrish Maynard and Johan Renvall, among others.  Aaron also attended summer programs at the School of American Ballet, where he was accepted for the year-round program on full scholarship.  At age 17, he returned to San Francisco Ballet as an apprentice.  Three months later, he was offered a contract as a full member of the Company.
            </p>
						<hr className="my-2" />
						<p>
							During his twelve seasons with the San Francisco Ballet, Aaron was privileged to perform Corps de Ballet, Soloist and Principal roles in works by Georges Balanchine, Jerome Robbins, Paul Taylor, Val Caniparoli and many others.  His career brought praise from colleagues and critics alike and gave him the opportunity to perform at the highest standard in some of the most beautiful opera houses and stages this world has to offer.
						</p>
						<hr className="my-2" />
						<p>
							After retiring from San Francisco Ballet, Aaron discovered a passion for teaching and coaching classical ballet.  As a teacher and coach, Aaron both respects and enjoys the opportunity to pass on to the next generation the technical expertise and artistic mentorship he received throughout his career.  Aaron has held faculty and guest teacher positions at schools and professional companies throughout the United States, including Contra Costa Ballet School, Company C Contemporary Ballet, _____[Aaron - fill in the blanks].  From 2015-17, he was a teacher and Ballet Master at the Rock School for Dance Education where he also privately coached students for the Youth America Grand Prix.  Several of his students advanced to the final rounds in New York, where they were awarded scholarships to attend pre-professional schools and programs both in the U.S. and abroad.
						</p>
						<hr className="my-2" />
						<p>
							Today, Aaron is proud to call Nashville, Tennessee home and is delighted to have the opportunity to bring his passion for the art of dance to Nashville Classical Academy.
						</p>
						<hr className="my-2" />
						<h3 id="two">
							About Nashville Classical Ballet Academy
						</h3>
						<p>
							Nashville Classical Ballet Academy offers pre-professional classical ballet training and individual coaching for students at Levels ____.  Our goal is to create a supportive, positive environment for learning that fosters personal growth in all our students and brings out the best in dancers from all backgrounds.

						</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
