import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

class About extends Component {
render() {
  return(
      <div>
        <Container>
          <Row>
            <Col>
              <p>
                After completing a career as a professional ballet dancer with San Francisco Ballet, Aaron Orza has grown into the role of freelance Ballet Master. He received mentorship from the best the ballet world has to offer and has had the privilege of performing with world-renowned companies and artists. His first big break came when he was just fourteen. Helgi Tommoson, the Director of the San Francisco Ballet, selected him to perform with the company in their rendition of George Balanchine’s Stars and Stripes. From there, he continued his training with the San Francisco Ballet School and the School of American Ballet, in New York City, under full scholarship. Aaron received his next big break at 17 years old when he received his first professional contract with the San Francisco Ballet. During his twelve seasons with the company, he successfully performed numerous Corps de Ballet, Soloist, and Principal roles, and gained acclaim from his colleagues and critics alike. As well as touring the world performing at the most beautiful Opera Houses and stages this world has to offer.
              </p>
              <p>
                Today, Aaron is proud to call Nashville, Tennessee home. His passion for dance has lead him to his new role as mentor for dancers that have dreams of succeeding in the art form he has mastered. If you choose to work with Aaron, your knowledge and skills will improve drastically. As you will find out quickly you will be receiving first hand knowledge that could have only been passed down from generation to generation from leaders and legends of the ballet artform. For a consultation, feel free to contact him at Aaron.Orza@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
			</div>
    );
  }
}

export default About;
