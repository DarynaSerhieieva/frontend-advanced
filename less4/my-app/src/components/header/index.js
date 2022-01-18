import React from "react";
import './style.css';

import Heading from "./heading";
import Nav from "./nav";
import { market } from "../../data/data";
import Market from "./market";



const Header = () => {

    return (
        <div className="header">
            <header className="wrapper">
                <Nav/>
                <Heading/>
                <div className="header__market">
                    {
                        market.map(element => <Market years={element.years}/>)
                    }
                </div>
            </header>
        </div>
        
    );
};

export default Header;
