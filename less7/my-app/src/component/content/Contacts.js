import React from "react";

import './style/Contacts.css';

export const Contacts = () => {
    return(
        <section className="wrapper">
            <div className="contacts">
                <h2 className="heading">Contacts</h2>
                <p className="contacts__text">Want to know more or just chat? You are welcome!</p>
                <button className="contacts__btn">Send message</button> 
            </div>
        </section>
    );
};
