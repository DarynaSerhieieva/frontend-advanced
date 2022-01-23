import React, { Component } from "react";
import uniqid from 'uniqid';

import Body from "../body";
import Card from "../card";
import Menu from "../menu";
import Order from "../order";
import { setlocalStorage } from "../setlocalStorage";

import './style.css';

class App extends Component {

    state = {
        menu : [],
        order : [],
        loader: false
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
                setlocalStorage('menu', res);

                this.setState({
                    menu: res,
                    order: storageOrder ?? [],
                    loader: true
                });
            });

        } else {
            this.setState({
                menu: storgaMenu,
                order: storageOrder ?? [],
                loader: true
            })
        }
        
    }

    componentDidUpdate = () => {
        setlocalStorage('order', this.state.order);
        setlocalStorage('menu', this.state.menu);
    }

    setOrder = (id, name, price, counter=1) => _ => {
        const { order } = this.state;
        const o = order.find(item => item.id === id);

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
    
    addLike = (id, add) => _ => {

        const { menu } = this.state;

        if (add) {
            this.setState({
                menu: menu.map(e => {
                    if (e.id === id) {
                        return { 
                            ...e,
                            like: +e.like -1,
                            add: false
                        }
                    }
                    return e;
                })
            })
        } else {
            this.setState({
                menu: menu.map(e => {
                    if (e.id === id) {
                        return { 
                            ...e,
                            like: +e.like +1,
                            add: true
                        }
                    }
                    return e;
                })
            })
        }
    }

    render = () => {

        const { menu, order, loader } = this.state
        const { setOrder, addLike } = this

        return(
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
                                                    setOrder={setOrder}
                                                    addLike={addLike}
                                                />
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        <div className="col-md-4 col-12 order-list">
                            <Order listOrder={order}/>
                        </div>
                    </div>

                    ):
                    (
                        <h2>Loader..</h2>
                    )
                }
            </Body> 
        );
    };
};

export default App;
