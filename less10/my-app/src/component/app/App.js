import React from "react";

import { ContextInput, theme } from "../../helpers";
import Form from "../form/Form";

import './App.css';

const App = () => {
    return(
        <>
            <ContextInput.Provider value={{ theme }}>
                <div className="wrapper">
                    <Form/>
                </div>
            </ContextInput.Provider>
            
        </>
    );
};

export default App;
