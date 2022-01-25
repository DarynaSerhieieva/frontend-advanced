import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



import './style.css';

const ModalItem = ({addLike, closeModal, modal, addToCard, menu, modalId}) => {
    const [ counter, setCounter ] = useState(1);

    const item = menu.find(e => e.id === modalId);

    const plus = () => _ => {
        const newCounter = counter +1

        setCounter(newCounter);
    }
    
    const minus = () => _ => {
        const newCounter = counter -1

        if (counter > 1) {
            setCounter(newCounter);
        }
    }

    return(
        <>
            <Modal show={modal} onHide={closeModal()}>
                <div className="modal-content container p-4">
                    <div className="row">
                        <div className="col-5 mx-5">
                            <img className="img-modal" src={item.productImageUrl} alt={item.productName}/>
                        </div>
                        <div className="modal-body col-5 me-5">
                            <h5 className="modal-title">{item.productName}</h5>
                            <p className="modal-text pt-3">{item.ingredients}</p>
                        </div>
                        <div className="modal-footer border-0 justify-content-around align-items-end">
                            <div>
                                <span className="modal-like-text d-flex py-3">{item.add? ('Ви додали цю страву до улюбленого.'):('Додати в улюблене?')}</span>
                                <Button onClick={addLike(item.id, item.add)} className="d-flex modal-btn-like">
                                    <img src={item.add? "./img/heart-add.svg": "./img/like.svg"} width="40" height="34" alt="like"/>
                                    <span className="modal-like-text">{item.like} користувача додали в улюблене</span>
                                </Button>
                            </div>
                            <div>
                                <Button onClick={plus()} className="rounded-circle counter-circle circle-btn border-0 p-0">+</Button>
                                <span className="counter">{counter}</span>
                                <Button onClick={minus()} className="rounded-circle counter-circle circle-btn border-0 p-0">-</Button>
                            </div>
                            <Button onClick={addToCard(item.id, item.productName, item.price, counter)} className="btn__header modal-order d-flex align-items-center justify-content-between">
                                <span>Додати</span>
                                <span>{item.price * counter} ₴ </span>
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </Modal>
        </>
    );
};

export default ModalItem;
