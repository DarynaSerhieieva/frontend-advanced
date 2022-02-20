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
                        return { ...element, list: res.data } 
                    }
                    return element;
                })}); 
            })
        
        theme.forEach(e => {
            if (e.id === "country" && e.value.length > 2) {
                console.log('good', e.value)
            }
        })
        

    }

    handlerChange = (id) => e => {
        const { value } = e.target;
        const { theme } = this.state;
        

        this.setState({theme: theme.map(element => {
            if (element.id === id && element.reg !== undefined ) {
                return { ...element, value: value, error: element.reg.test(value)? false: true } 
            }
            if (element.id === id && element.reg === undefined ) {
                //на данном этапе хочу  получать данные с value для Autocomplete
                // но в компонентие FormItem, нормально не записываються данные в value
                //  по этому сдесь код уже не работает
                // далие я хочу написать логику, что если есть выбранная сторонна, то получить этой странны города
                // с сервисса  https://documenter.getpostman.com/view/1134062/T1LJjU52 
                // для себя я дальше понимаю, что писать, но не знаю как бороться с Autocomplete
                // а так же есть проблема из-за перересовки, я ее решила навешав два обработчика на один инпут
                // я понимаю, что это возникло из-за моей логики и общего стейта
                // может я просто перемудрила и только усложнила код, но мне почему-то понравилась реализация через map()
                return { ...element, value: value } 
                // console.log('no reg')
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
