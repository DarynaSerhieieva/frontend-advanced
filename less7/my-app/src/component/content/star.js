import React from "react";

const Star = ({number}) => {
    return(
        <>
            <img src={number == 4 ? "./img/star4.svg": "./img/star3.svg"} alt={number == 4 ? "star 4": "star 3"} />
        </>
    );
};

export default Star;
