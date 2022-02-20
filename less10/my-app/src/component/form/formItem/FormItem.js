import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FormItem = ({data, handlerChange}) => {
    const { helperText, autocom, error, id} = data;

    const [value, setValue] = useState('');

    const hendlerInput = () => e => {
        setValue(e.target.value);
        console.log(e.target.value)
        //на компоненте Autocomplete когда печатаешь все хорошо, данные приходят.
        // а как только выбираешь вариант кликом, меяеться value на 0 
        // не могу понять как правильно передаь значение в value при клике, что бы получить страну
        // для дальнейшей работы с городом использу, возможности ресурса COUNTRIES & CITIES API
        console.log(value)
    }

    const countries = data?.list?.map(({ country }) => country) || [];

    return(
        <>
            {
                autocom?
                <Autocomplete
                    disablePortal
                    options={countries}
                    onChange={hendlerInput()}
                    onBlur={handlerChange(id)}
                    renderInput={(params) => <TextField 
                    
                      value={value || data.value} {...params} {...data}/>}
                />:
                <TextField
                    {...data}
                    helperText={error? helperText : ''}
                    value={value || data.value}
                    onChange={hendlerInput()}
                    onBlur={handlerChange(id)}

                />
            }
            
        </>
        
    )
}

export default FormItem;
