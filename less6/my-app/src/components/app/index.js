import React, { Component } from "react";
import uniqid from 'uniqid';

import Body from "../body";
import Card from "../card";
import Menu from "../menu";
import ModalItem from "../modal";
import Order from "../order";
import { setlocalStorage } from "../utils";

import './style.css';

class App extends Component {
    state = {
        menu : [],
        order : [],
        loader: false,
        modal: false,
        modalId: '',
        counter: 1
    }

    componentDidMount = () => {
        const storgaMenu = JSON.parse(localStorage.getItem('menu'));
        const storageOrder = JSON.parse(localStorage.getItem('order'));

        if (!storgaMenu || storgaMenu.length < 0) {
            fetch(`./menu.json`, {
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        
            })
            .then( res => res.json() )
            .then( res => {
                this.setState({
                    menu: res,
                    order: storageOrder ?? [],
                    loader: true
                });
            });
            
            return;
        } 
        
        this.setState({
            menu: storgaMenu,
            order: storageOrder ?? [],
            loader: true
        })
    }

    componentDidUpdate = () => {
        setlocalStorage('order', this.state.order);
        setlocalStorage('menu', this.state.menu);
    }

    addToCard = (id, name, price, counter=1) => e => {
        e.stopPropagation();
        
        const { order } = this.state;
        const o = order.find(item => item.id === id);

        this.setState({
            modal: false
        })

        if (o) {
            this.setState({
                order: order.map(e => {
                    if (e.id === id) {
                        return { ...e, counter: e.counter + counter }
                    }
                    return e;
                })
            });

            return;
        }
        
        this.setState({
            order: [
                ...this.state.order,
                {
                    id: id,
                    name:  name,
                    price: price,
                    counter: counter
                }
            ]
        })

    }
    
    addLike = (id, add) => e => {
        e.stopPropagation();

        const { menu } = this.state;

        this.setState({
            menu: menu.map(e => {
                if (e.id === id) {
                    const like = add ? +e.like -1 : +e.like +1;
                    return { ...e, like: like, add: !add }
                }
                return e;
            })
        });
    }

    showModal = (id) => _ => {
        this.setState({ modal: true, modalId: id });
    }

    closeModal = () => _ => {
        this.setState({ modal: false });
    }
    
    handlerCounter = (symdol, id, counter) => _ => {
        const { order } = this.state;

        this.setState({
            order: order.map(e => {
                if (e.id === id ) {
                    if (symdol === '+') {
                        return { ...e, counter: counter + 1 }
                    }

                    if (counter > 1) {
                        return { ...e, counter: counter - 1 }
                    }
                }
                
                return e;
            })
        });
    }

    hendlerOrder = () => _ => {
        const { order } = this.state;

        console.log(order);

        this.setState({ order: [] })
    }

    render = () => {
        const { menu, order, loader, modal, modalId } = this.state
        const { addToCard, addLike, showModal, closeModal, handlerCounter, hendlerOrder } = this

        return(
            <>
            <Body>
                {
                    loader?
                    (
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <Menu/>
                                <h2 className="subsection">Акції</h2>
                                <div className="row">
                                    {
                                        menu.map(({id, productName, ingredients, price, productImageUrl, like, add}) => {
                                            return(
                                                <Card 
                                                    key={uniqid()} id={id}
                                                    productName={productName}
                                                    ingredients={ingredients}
                                                    price={price}
                                                    productImageUrl={productImageUrl}
                                                    like={like}
                                                    add={add}
                                                    addToCard={addToCard}
                                                    addLike={addLike}
                                                    showModal={showModal}
                                                />
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        <div className="col-md-4 col-12 order-list">
                            <Order listOrder={order} handlerCounter={handlerCounter} hendlerOrder={hendlerOrder}/>
                        </div>
                    </div>

                    ):
                    (
                        <h2>Loader..</h2>
                    )
                }
                
            </Body> 
    
            {
                modal? 
                <ModalItem 
                    addLike={addLike} 
                    addToCard={addToCard} 
                    closeModal={closeModal} 
                    modal={modal}
                    menu={menu} 
                    modalId={modalId}
                /> : 
                <></>
            }
            </>
        );
    };
};

export default App;
