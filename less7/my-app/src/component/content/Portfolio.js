import React from "react";

import './style/Portfolio.css';

export const Portfolio = () => {

    const portfolio = [
        {
            name: 'Online fashion store - Homepage',
            img: './img/fashion.svg'
        },
        {
            name: 'Reebok Store - Concept',
            img: './img/reebok.jpg'
        },
        {
            name: 'Braun Landing Page - Concept',
            img: './img/braun.jpg'
        }
    ]

    return(
        <section className="portfolio">
            <div className="wrapper portfolio__content">
                <h2 className="heading">Portfolio</h2>
                {
                    portfolio.map(e => {
                        return(
                            <a>
                                <img src={e.img} alt={e.name} />
                                <a>{e.name}</a>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    );
};
