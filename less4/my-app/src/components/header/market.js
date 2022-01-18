import React from "react";

const Market = ({years}) => {

    return(
        <div className="info">
            <span className="info__years">{years}</span>
            <span>лет</span>
            <span className="info__market">на рынке</span>
        </div>
    );
};

export default Market;
