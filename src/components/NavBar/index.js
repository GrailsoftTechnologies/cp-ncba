import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, NavLink } from 'reactstrap';
import './styles.css';
import Logo from '../../img/templogo.png';

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
			<div className="NavBar sticky-top">
				<Navbar expand="md" className={this.props.className}>
	        <NavbarBrand href={"#"}>
	          <img id="bamLogo" src={Logo} alt='the brick and motor logo'></img>
	        </NavbarBrand>
	        <NavbarToggler onClick={this.toggle}/>
	        <Collapse isOpen={this.state.isOpen} navbar>
	          <Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href={"#/About"} className="menuItem">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Programs"} className="menuItem">Programs</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Gallery"} className="menuItem">Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Schedule"} className="menuItem">Schedule</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Reviews"} className="menuItem">Reviews</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Contact"} className="menuItem">Contact</NavLink>
							</NavItem>
	          </Nav>
	        </Collapse>
	      </Navbar>
			</div>
    );
  }
}

NavBar.defaultProps = {
  className: "sticky-top navbar-dark bg-dark",
}

export default NavBar;
