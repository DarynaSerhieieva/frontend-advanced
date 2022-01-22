import React from "react";
import Item from "./item";

import './style.css';

const Menu = () => {
    const items = ['Акції', 'Бургери', 'Курка', 'Десерти', 'Напої', 'Соуси'];

    return(
        <ul className="col-12 nav nav-pills mt-4">
            {
                items.map((name, index ) => <Item key={index} active={index === 0}>{name}</Item>)
            }
        </ul>
    );
};

export default Menu;
