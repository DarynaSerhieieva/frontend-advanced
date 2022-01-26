import React from "react";

const ImgItem = ({img, name}) => {
    return(
        <a className="footer__img" href="#">
            <img src={img} alt={name} />
        </a>
    );
};

export default ImgItem;
