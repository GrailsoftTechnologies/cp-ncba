import React, { Component } from "react";
import "./styles.css";

class Contact extends Component {
  render() {
    return (
      <main className="wrapper">
        <section>
          <div className="lineStyle6">Call [ 971 ] 988 - 6575 </div>
          <hr />
          <div className="lineStyle6">
            <a
              href="https://www.amazon.com/restaurants/brick-and-motor-portland/d/B079J6MDKB?ref_=amzrst_b_B079J6MDKB_23"
              alt="link to amazon delivery"
            >
              Amazon Delivery
            </a>
          </div>
          <hr />
          <div className="mapBox">
            <iframe
              height="400px"
              width="100%"
              frameborder="0"
              styles="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDozY9mgvE7tAZjIUB2d51Ss5EbmKBeKRM
                &q=Brick+and+Motor+Pizza,Portland+OR
                &zoom=14"
              allowfullscreen>
            </iframe>
          </div>
        </section>
      </main>
    );
  }
}

export default Contact;
