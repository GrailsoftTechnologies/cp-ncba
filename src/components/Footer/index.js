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
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="EABJ3TGHV4PHA" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
				</Col>
			</Row>
    </div>
    );
  }
}

export default Footer;
