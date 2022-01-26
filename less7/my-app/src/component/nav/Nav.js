import React from "react";
import { NavLink } from "react-router-dom";

import './Nav.css';

const Nav = () => {

    return(
        <nav className="nav">
            <NavLink className="nav__item" to="/">Home</NavLink>
            <NavLink className="nav__item" to="about_me">About me</NavLink>
            <NavLink className="nav__item" to="skills">Skills</NavLink>
            <NavLink className="nav__item" to="portfolio">Portfolio</NavLink>
            <NavLink className="nav__item" to="contacts">Contacts</NavLink>
        </nav>
    );
};

export default Nav;