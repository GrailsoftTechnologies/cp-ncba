import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import CarouselFrame from '../CarouselFrame';

class Home extends Component {

  componentWillMount(){
    window.paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '0.68'
                    },
                    description: 'Your generous contribution'
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {

                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        }
    }).render('#paypal-button-container');
  }

  render() {
		return(
			<div className="Home">
        <CarouselFrame/>
				<Container>
	        <Row>
	          <Col>
	            <Jumbotron fluid>
	              <h1 id="missionText">
									Nashville Classical Ballet Academy is designed to meet the needs of the dedicated student seeking a professional career in ballet. We offer an elite ballet education, providing students with a refined and sophisticated level of training and self-discipline to thrive in any professional environment. We strive to share our passion for classical ballet, our training and experience in an environment with which all our students can reach success.
								</h1>
                <hr />
                <br />
                <p>To make a donation in support of NCBA please click the link DONATE</p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="EABJ3TGHV4PHA" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
	            </Jumbotron>
	          </Col>
	        </Row>
	      </Container>
			</div>
		)
  }
}

export default Home;
