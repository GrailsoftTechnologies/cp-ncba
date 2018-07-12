import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, NavLink } from 'reactstrap';
import './styles.css';
import Logo from '../../img/image2.jpeg';

class NavBar extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen : false
		}
	}
	toggle(){
		this.setState({
			isOpen : !this.state.isOpen
		})
	}
  render() {
    return (
      <Navbar inverse fluid collapseOnSelect expand="md" className={this.props.className}>
        <NavbarBrand>
          <Link to="/"><img id="bamLogo" src={Logo} alt='the brick and motor logo'></img></Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href={"#/Menu"} className="menuItem">Menu</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/About"} className="menuItem">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#/Contact"} className="menuItem">Contact</NavLink>
						</NavItem>
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
