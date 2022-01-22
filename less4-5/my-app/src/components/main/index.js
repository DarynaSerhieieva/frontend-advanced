import React from "react";
import './style.css';

import { project } from "../../data/data";
import Card from "./card";

const Main = () => {

    return(
        <main className="wrapper main">
            <h3 className="main__heading">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h3>
            <div className="card-list">
            {
                project.map(element => <Card name={element.name} text={element.text} url={element.url}/>)
            } 
            </div>
            
        </main>
    );
};

export default Main;
