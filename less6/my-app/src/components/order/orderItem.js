import React from "react";

const OrderItem = ({id, name, price, counter}) => {

    return(
        <tr>
            <td className="border-0">
                <h5 className="text-table">{name}</h5>
            </td>
            <td className="align-top border-0">
                <button className="rounded-circle circle-btn border-0">+</button>
                <span  className="px-2">{counter}</span>
                <button className="rounded-circle circle-btn border-0">-</button>
            </td>
            <td className="align-top text-table border-0">{price} ₴ </td>
        
        </tr>
        
    );
};

export default OrderItem;
