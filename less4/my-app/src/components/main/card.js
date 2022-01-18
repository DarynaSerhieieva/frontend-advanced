import React from "react";

const Card = ({name, url, text}) => {

    return(
        <div className="card-list__item">
            <div className="card-list__img">
                <img src={url} alt={name}/>
            </div>
            
            <span>{text}</span>
            <p>{text}</p>
        </div>
    );
};

export default Card;
