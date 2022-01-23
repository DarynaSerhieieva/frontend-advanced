import React from "react";

const OrderBtn = ({list}) => {

    let totalPrice = 50;

    const price = () => {
        list.forEach(element => {
            totalPrice += (element.price * element.counter); 
        });
        return(totalPrice);
    };

    return(

        <button className="shadow-card btn__header order d-flex align-items-center justify-content-between">
            {
                Array.isArray(list) && list.length > 0 ?
                (
                    <>
                        <span>Замовити</span>
                        <span>{price()} ₴</span>
                    </>
                   
                ):
                (
                    <span>Кошик порожній</span>
                )
            } 
        </button>
    );
};

export default OrderBtn;
