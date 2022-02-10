import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { NavLink } from 'react-router-dom';

const PortfolioConstruction = ({ url }) => {
    const img = ['/img/fashion.jpg', '/img/reebok.jpg', '/img/braun.jpg', '/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg', '/img/img5.jpg']
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(url)
        .then( res => res.json() )
        .then( res => {
            setData(res);
            setLoader(true);
        });
    }, []);

    return (
        <>
            <section className="portfolio">
                <div className="wrapper portfolio__content">
                    <h2 className="heading">Portfolio</h2>
                    {
                        loader ? data.map(e => (
                            <div key={uniqid()}>
                                <NavLink to={`/portfolio/${e.id}`}>
                                    <img src={img[Math.floor(Math.random()* 8)]} alt="name" />
                                    <span>{e.title}</span>
                                </NavLink>
                            </div>
                        )) :<></>
                    }
                </div>
            </section>
        </>
    );
};

export default PortfolioConstruction;
