import React from "react";
import uniqid from 'uniqid';

import OrderBtn from "./orderBtn";
import OrderItem from "./orderItem";

import './style.css';

const Order = ({listOrder, handlerCounter, hendlerOrder}) => {
    
    return(
        
        <div className="card w-100 mt-5">
            <div className="px-3 py-4">
                <div className="mb-1 pb-4">
                    <div className="mb-1 pb-4">Ваше замовлення:</div>
                    <table className="table m-0">
                        <tbody>
                            {
                                Array.isArray(listOrder) && listOrder.length > 0 ?
                                (
                                    listOrder.map(
                                        item => <OrderItem handlerCounter={handlerCounter} key={uniqid()} id={item.id} name={item.name} price={item.price} counter={item.counter}/>
                                    )
                                ) :
                                (
                                    <tr>
                                        <td colSpan="3" className="border-0">На жаль кошик порожній</td>
                                    </tr>
                                )
                            }
                            <tr>
                                <td colSpan="2" className="border-0">Доставка</td>
                                <td className="border-0">50 ₴ </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <OrderBtn list={listOrder} hendlerOrder={hendlerOrder}/>
            </div>
        </div>
    );
};

export default Order;
