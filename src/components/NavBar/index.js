import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import './styles.css';
import Logo from '../../img/image2.jpeg';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse fluid collapseOnSelect className={this.props.className}>
          <NavbarBrand>
            <Link to="/"><img id="bamLogo" src={Logo} alt='the brick and motor logo'></img></Link>
          </NavbarBrand>
          <NavbarToggler />
        <Collapse>
          <Nav pullLeft>
            <NavItem href={"#/Menu"} className="menuItem">Menu</NavItem>
            <NavItem href={"#/About"} className="menuItem">About</NavItem>
            <NavItem href={"#/Contacts"} className="menuItem">Contact</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="https://www.instagram.com/brickandmotorpdx/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-instagram desktop-only"></span></NavItem>
            <NavItem href="https://www.facebook.com/brickandmotorpdx/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavItem>
            <NavItem href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square desktop-only"></span></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  className: "navigationBar navbar-fixed-top",
}

export default NavBar;
