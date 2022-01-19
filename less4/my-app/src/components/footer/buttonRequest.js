import React from "react";

const ButtonRequest = ({img, name, text}) => {

    return(
        <button className="button-request" type="button">
            <img src={img} alt={name}/>
            <span className="button-request__text">{text}</span>
        </button>
    );
};

export default ButtonRequest;
