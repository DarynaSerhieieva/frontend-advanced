import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import uniqid from 'uniqid';

import './style/Error.css';

const listLink = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About me',
        link: 'about_me'
    },
    {
        name: 'Skills',
        link: 'skills'
    },{
        name: 'Portfolio',
        link: 'portfolio'
    },
    {
        name: 'Contacts',
        link: 'contacts'
    }
];

const emptyInput = '';


export const Error = () => {

    const [value, setValue] = useState(emptyInput);
    let navigate = useNavigate();

    useEffect(() => {
        listLink.forEach(element => {
            if (value === element.name ) {
                return navigate(element.link);
            }
        })
    });

    const handlerCange = () => ({ target: { value } }) => setValue(value);

    const onFocusClear = () => setValue(emptyInput);

    return(
        <>
            <section className="wrapper">
                <div className="error">
                    <h2 className="error__title">404</h2>
                    <h3 className="error__text">Sorry, we were unable to find that page</h3>
                    <label>
                        <input value={value} onChange={handlerCange()} onFocus={onFocusClear} className="error__input" type="text" list="link" placeholder="Search"/>
                        <datalist   id="link">
                            { listLink.map( item => <option  key={uniqid()} value={item.name}/>) }
                        </datalist>
                    </label>
                    <p className="error__link">
                        <span>Start from </span>
                        <Link to="/">home page</Link>
                    </p>
                </div>
                
            </section>
        </>
    );
};

