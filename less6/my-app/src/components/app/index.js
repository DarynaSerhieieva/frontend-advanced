import React, { Component } from "react";
import Body from "../body";
import Card from "../card";
import Menu from "../menu";

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
                localStorage.setItem('menu', JSON.stringify(res))
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

    render = () => {

        const { menu, order, loader } = this.state

        return(
            <>
                <Body>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <Menu/>
                            <h2 className="subsection">Акції</h2>
                            <div className="row">
                                {
                                    loader ? 
                                    (
                                        menu.map(({id, productName, ingredients, price, productImageUrl, like, add}) => {
                                            return(
                                                <Card key={id} id={id} productName={productName} ingredients={ingredients} price={price} productImageUrl={productImageUrl} like={like} add={add}/>
                                            )
                                        })
                                    ) :
                                    (
                                        <h2>Loader..</h2>
                                    )

                                }
                            </div>
                        </div>
                        <div className="col-md-4 col-12 order-list">

                        </div>
                    </div>
                </Body> 
            </>
        );
    };
};

export default App;
