import React from "react";
import Nav from "../nav/Nav";

import './Header.css';

const Header = () => {

    return(
        <header className="wrapper">
            <Nav/>
            <div className="header">
                <h2 className="header__name">Denis Novik</h2>
                <p className="header__text">UX | UI designer 24 years old, Minsk</p>
                <div className="header__lng">
                    <span>RU </span>
                    <span className="header__lng-active">| ENG</span>
                </div>
            </div>
            <img className="header__img" src="./img/denis_novik.jpg" alt="Denis Novik"/>
            
        </header>
    );
};

export default Header;
