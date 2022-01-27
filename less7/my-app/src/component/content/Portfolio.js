import React from "react";

import PortfolioConstruction from "./portfolioConstruction/PortfolioConstruction";

import './style/Portfolio.css';

export const Portfolio = () => {

    return(
        <>
            <PortfolioConstruction url="https://jsonplaceholder.typicode.com/albums"/> 
        </>
        
    );
};
