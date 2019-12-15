import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";

import './navbar.css'

const Navbar = props => {
    return (
        <div className='navbar'>
            <Nav>
                <NavItem className="navbar-element">
                    <NavLink href="#" to="/" >HOME</NavLink>
                </NavItem>
                |
                <NavItem className="navbar-element">
                    <NavLink href="#" to="/ListOfCountries">COUNTRIES</NavLink>
                </NavItem>
                |
                <NavItem className="navbar-element">
                    <NavLink href="#" to="/CreateBurger" >BURGER</NavLink>
                </NavItem>
                |
                <NavItem className="navbar-element">
                    <NavLink href="#" to="/Messanger" >MESSANGER</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Navbar;