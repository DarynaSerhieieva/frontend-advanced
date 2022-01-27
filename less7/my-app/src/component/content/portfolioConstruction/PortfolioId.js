import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PortfolioId = () => {
    let { portfolioId } = useParams();
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);
    const img = ['/img/fashion.jpg', '/img/reebok.jpg', '/img/braun.jpg', '/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg', '/img/img5.jpg']


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${portfolioId}`)
        .then( res => res.json() )
        .then( res => {
            setData(res);
            setLoader(true);
        });
    }, []);
    

    return(
        <section className="portfolio">
            <div className="wrapper portfolio__content">
                <Link style={{alignSelf: "flex-start"}} to="/portfolio">Back</Link>
                <h2 className="header"> Portfolio id: {portfolioId}</h2>
                {
                    loader? 
                    (<>
                        <img src={img[Math.floor(Math.random()* 8)]} alt="name" />
                        <span>{data.title}</span>
                    </>):
                    <></>
                }
            </div>
        </section>
    )
}

export default PortfolioId;
