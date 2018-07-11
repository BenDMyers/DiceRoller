import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';

class NavBar extends Component {
	render() {
		return (
			<Navbar color="elegant-color-dark" dark expand="md" scrolling style={{marginBottom: 0}}>
				<NavbarBrand ref="/">
					<img src="../../logo.png" height={30} style={{display: 'inline'}}/>
					<strong>Dice Roller</strong>
				</NavbarBrand>

			</Navbar>
		);
	}
}

export default NavBar;