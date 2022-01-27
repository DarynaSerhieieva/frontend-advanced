import React from "react";
import uniqid from 'uniqid';

import './style/Portfolio.css';

export const PortfolioHome = () => {

    const portfolio = [
        {
            name: 'Online fashion store - Homepage',
            img: '/img/fashion.jpg'
        },
        {
            name: 'Reebok Store - Concept',
            img: '/img/reebok.jpg'
        },
        {
            name: 'Braun Landing Page - Concept',
            img: '/img/braun.jpg'
        }
    ]

    return(
        <section className="portfolio">
            <div className="wrapper portfolio__content">
                <h2 className="heading">Portfolio</h2>
                {
                    portfolio.map(e => {
                        return(
                            <a href="#" key={uniqid()}>
                                <img src={e.img} alt={e.name} />
                                <span>{e.name}</span>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    );
};
