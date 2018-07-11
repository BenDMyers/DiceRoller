import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';

class NavBar extends Component {
	render() {
		return (
			<Navbar color="elegant-color-dark" dark expand="md" scrolling style={{marginBottom: 0}}>
				<NavbarBrand ref="/">
					<img src="../../logo.png" height={40} style={{display: 'inline', verticalAlign: 'middle'}}/>
					<span className='navbar-site-name'>Dice Roller</span>
				</NavbarBrand>
				<NavbarNav right>
					<NavItem>
						Help
					</NavItem>
				</NavbarNav>
			</Navbar>
		);
	}
}

export default NavBar;