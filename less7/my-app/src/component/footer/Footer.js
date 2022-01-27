import React from "react";

import './Footer.css';
import ImgItem from "./ImgItem";

const Footer = () => {

    return(
        <footer className="wrapper">
            <div className="footer">
                <div className="footer__list">
                    <ImgItem img="/img/linkedIn.svg" name="LinkedIn"/>
                    <ImgItem img="/img/instagram.svg" name="Instagram"/>
                    <ImgItem img="/img/behance.svg" name="Behance"/>
                    <ImgItem img="/img/dribble.svg" name="Dribble"/>
                </div>
                <p className="footer__text">
                    <span>Like me on</span>
                    <span>LinkedIn, Instagram, Behance, Dribble</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
