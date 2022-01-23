import React from "react";

import './style.css'

const Card = ({id, productName, ingredients, price, productImageUrl, like, add, setOrder, addLike}) => {
    
    return(
        <div className="col-12 col-lg-4 col-sm-6 mb-4">
            <div className="card-active card-height card shadow-card p-0">
                <img src={productImageUrl} className="card-img-top" alt={productName}/>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">{ingredients}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <a href="#" className="price">{price}</a>
                        <a onClick={setOrder(id, productName, price)} className="add-cart" href="#">В корзину</a>
                        <a href="#" onClick={addLike(id, add)}>  
                            <img 
                                className="heart"
                                src={ add? "./img/heart-add.svg": "./img/heart-border.svg"}
                                width="24" height="24"alt="heart"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
