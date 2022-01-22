import React from "react";

const Item = ({active, children}) => {

    return(
        <li className="nav-item d-flex  align-items-center">
            <a className={active? 'nav-link active-link' : 'nav-link'} aria-current="page" href="#">{children}</a>
        </li>
    );
};

export default Item;
