import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './styles.css';

class NavBar extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggle2 = this.toggle2.bind(this);
		this.state = {
			isOpen : false
		}
	}
	toggle(){
		this.setState({
			isOpen : !this.state.isOpen
		})
	}
	toggle2() {
		if (this.state.isOpen) {
			this.setState({
	      isOpen: false
	    });
		}
  }
  render() {
    return (
			<div className="NavBar sticky-top">
				<Navbar expand="md" className={this.props.className}>
	        <NavbarBrand href={"/"}>
	        </NavbarBrand>
	        <NavbarToggler onClick={this.toggle}/>
	        <Collapse isOpen={this.state.isOpen} navbar>
	          <Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href={"/"} onClick={this.toggle2} className="menuItem">Home</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
	              <DropdownToggle nav caret href='something' className="menuItem">
	                About
	              </DropdownToggle>
	              <DropdownMenu onClick={this.toggle2}>
	                <DropdownItem href={"/about"}>
	                  About Us
	                </DropdownItem>
	                <DropdownItem href={"/guestinstructors"}>
	                  Guest Instructors
	                </DropdownItem>
	              </DropdownMenu>
	            </UncontrolledDropdown>
							<UncontrolledDropdown nav inNavbar>
	              <DropdownToggle nav caret href='something' className="menuItem">
	                Programs
	              </DropdownToggle>
	              <DropdownMenu onClick={this.toggle2}>
	                <DropdownItem href={"/programs"}>
	                  General Program
	                </DropdownItem>
	              </DropdownMenu>
	            </UncontrolledDropdown>
							<NavItem>
								<NavLink href={"/gallery"} onClick={this.toggle2} className="menuItem">Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"/schedule"} onClick={this.toggle2} className="menuItem">Schedule</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"/reviews"} onClick={this.toggle2} className="menuItem">Reviews</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"/donations"} onClick={this.toggle2} className="menuItem">Donations</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"/contact"} onClick={this.toggle2} className="menuItem">Contact</NavLink>
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
