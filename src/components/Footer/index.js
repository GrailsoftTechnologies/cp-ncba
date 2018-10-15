import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './styles.css';

import Logo from '../../img/logo.png';


class Footer extends Component {
render() {
  return(
    <div className="Footer">
			<Row>
				<Col sm="3">
					<img id="footerLogo" src={Logo} alt="footer logo" />
				</Col>
				<Col sm="6" className="addressBox">
					<p><i>Nashville Classical Ballet Academy</i></p>
					<p>info@ncbacademy.com</p>
					<p>(415)-613-4104</p>
				</Col>
				<Col sm="3">
					<a href="https://www.facebook.com/ncbacademy/"><i className="mediaIcon fab fa-facebook"></i></a>
					<a href="https://www.instagram.com/ncbacademy/"><i className="mediaIcon fab fa-instagram"></i></a>
					<a href="https://www.youtube.com/channel/UCJ66_WrcxEgfxtH3kIgCVEQ"><i className="mediaIcon fab fa-youtube"></i></a>
				</Col>
			</Row>
    </div>
    );
  }
}

export default Footer;
