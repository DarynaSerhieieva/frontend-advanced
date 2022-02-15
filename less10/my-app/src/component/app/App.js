import { responsiveProperty } from "@mui/material/styles/cssUtils";
import React, { Component } from "react";

import { ContextInput, fetchGet } from "../../helpers";
import Form from "../form/Form";

import './App.css';

class App extends Component {
    state = {
        theme: [
            {
                required: true,
                id: "name",
                label: "Your name",
                type: "text",
                disabled: false,
                helperText: "Incorrect entry",
                reg: /^(([a-zA-Z' -]{3,20})|([а-яА-ЯЁёІіЇїҐґЄє' -]{3,20}))$/u,
                variant: "standard",
                placeholder:"Valera",
                autocom: "",
                error: false,
                value: ''
            },
            {
                required: true,
                id: "telephone",
                label: "Contact number",
                type: "tel",
                disabled: false,
                helperText: "Incorrect entry",
                reg: /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/,
                variant: "standard",
                placeholder:"+380972880439",
                autocom: "",
                error: false,
                value: ''
            },
            {
                required: true,
                id: "email",
                label: "Contact email",
                type: "email",
                disabled: false,
                helperText: "Incorrect entry",
                reg: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g,
                variant: "standard",
                placeholder:"valera@gmail.com",
                autocom: "",
                error: false,
                value: ''
            },
            {
                required: false,
                id: "country",
                label: "Country",
                type: "text",
                disabled: false,
                variant: "standard",
                placeholder:"Poland",
                autocom: "true",
                error: false,
                value: ''
            },
            {
                required: false,
                id: "city",
                label: "City",
                type: "text",
                disabled: false,
                variant: "standard",
                placeholder:"Wroclaw",
                autocom: "true",
                error: false,
                value: ''
            }
        ]
    }
    
    componentDidMount = () => {
        const { theme } = this.state;
        fetchGet('https://countriesnow.space/api/v0.1/countries')
            .then(res => {
                this.setState({theme: theme.map(element => {
                    if (element.id === 'country') {
                        // let a = []
                        // res.data.map(e => {
                        //     return e.name
                        // })

                        return { ...element, list: res.data } 
                    }
                    return element;
                })}); 
            })
        

    }

    handlerChange = (id) => e => {
        const { value } = e.target;
        const { theme } = this.state;
        
        this.setState({theme: theme.map(element => {
            if (element.id === id) {
                return { ...element, value: value, error: element.reg.test(value)? false: true } 
            }
            return element;
        })});
    }

    render = () => {
        const { theme } = this.state;
        const { handlerChange } = this;

        return(
            <>
                <ContextInput.Provider value={{ theme }}>
                    <div className="wrapper">
                        <Form handlerChange={handlerChange}/>
                    </div>
                </ContextInput.Provider>
                
            </>
        );
    };
};

export default App;
