import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import "./styles.css";

class Donations extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: ((window.innerWidth > 576) ? 400 : parseInt(window.innerWidth*.75, 10)),
      height: (parseInt(window.innerHeight * .80, 10)), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    return (
			<Container className="Donations">
        <Row>
					<Col>
						<Jumbotron fluid>
							<Container fluid>
								<h1 className="display-3">Donations</h1>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron fluid>
              <h4>
                While we grow Nashville Classical Ballet Academy you could be apart of our evolution! Listed below are few areas we are seeking financial support in.
              </h4>
              <ol>
                <li>
                  Guest Teachers - this truly sets us aside from other dance organizations in and around the Nashville area. Having the ability to bring a selective level of guest instructors from all over the US and abroad is truly a special treat for our student body. Not only a luxury but also a fanatic way for our students to be noticed by different schools or potential companies for future opportunities. To have these guest teachers work with NCBA, typical expenses consist of the following factors: flights, lodging, transportation, teaching fees, and per diem.
                </li>
                <li>
                  Student scholarship - we would love to be able to offer two scholarships per school year for those students/families who carry talent, strong work ethic, passion for the art form, respect and gratitude, who are humble, accountable, and reliable.
                </li>
                <li>
                  NCBA Facilities - a building of our own to call home is our biggest need! This would allow us to house our growing student body and start our intermediate program. These younger dancers are key in our artistic vision and is the future of NCBA! Us grooming an intermediate level not only fulfills the place of those graduating from our program but will continue to show our community our ever raising standard.
                </li>
                <li>
                  Costumes - our students work long hard hours on refining their craft and with that NCBA loves to them show off! To complete the finished product these dancers require costume expertise. We are very lucky NCBA has a team of people we connect with to pull all these looks together but these individuals are also spread out over the states and abroad. Help support the full artistic vision and ease the cost of invoices and shipping, you could let an NCBA student experience one element of company life.
                </li>
              </ol>
              <p>
                To make a generous donation please click the paypal link below to help Nashville Classical Ballet Academy with. Your support is appreciated more than we could ever put into words. Thank you to the supporters of NCBA!
              </p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="6WS9J2KXMAVAN" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
						</Jumbotron>
					</Col>
				</Row>
        <Row>
					<Col>
						<Jumbotron fluid>
							<h1 className="display-3">Kristin Lindsay</h1>
							<h1 className="display-4">Assistant Director</h1>
							<a href="tel:+14152720481">(415)-272-0481</a>
							<p><a href="mailto:kristin@ncbacademy.com">kristin@ncbacademy.com</a></p>
						</Jumbotron>
					</Col>
				</Row>
        <Row>
					<Col>
						<Jumbotron fluid>
							<h1 className="display-3">Office Donations</h1>
							<a href="mailto:info@ncbacademy.com">info@ncbacademy.com</a>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron fluid>
							<p>
								During our search for a new building, we will be renting studio space within the Nashville Area. For more information, please direct all questions, emails and phone calls to info@ncbacademy.com
							</p>
              <hr />
              <br />
              <p>To make a donation in support of NCBA please click the link DONATE</p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="6WS9J2KXMAVAN" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Donations;
