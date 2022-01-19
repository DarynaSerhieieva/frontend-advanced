import React from "react";

const Card = ({name, url, text}) => {

    return(
        <div className="card-list__item">
            <div className="card-list__img">
                <img src={url} alt={name}/>
            </div>
            <span className="card-list__line"></span>
            <span className="card-list__name">{name}</span>
            <p className="card-list__text">{text}</p>
        </div>
    );
};

export default Card;
