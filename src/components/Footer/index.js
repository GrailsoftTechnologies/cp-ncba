import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

import Logo from '../../img/templogo.png';


class Footer extends Component {
render() {
  return(
    <div className="Footer">
      <Container>
				<Row>
					<Col xs="2">
						<img id="footerLogo" src={Logo} alt="footer logo" />
					</Col>
					<Col xs="4" className="addressBox">
						<p><strong>Nashville Classical Ballet Academy</strong></p>
						<p>123 Main St.</p>
						<p>Nashville TN 12345</p>
						<p>503-867-5309</p>
					</Col>
					<Col xs="3">
						<a href="http://www.facebook.com"><i className="mediaIcon fab fa-facebook"></i></a>
						<i className="mediaIcon fab fa-instagram"></i>
						<i className="mediaIcon fab fa-twitter"></i>
						<i className="mediaIcon fab fa-youtube"></i>
					</Col>
					<Col xs="3">
						<p>Three Four</p>
					</Col>
				</Row>
			</Container>
    </div>
    );
  }
}

export default Footer;
