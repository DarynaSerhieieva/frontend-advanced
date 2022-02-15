import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FormItem = ({data, handlerChange}) => {
    const { helperText, autocom, error, id} = data;

    const [value, setValue] = useState('');

    const hendlerInput = () => e => {
        setValue(e.target.value);
    }

    const countries = data?.list?.map(({ country }) => country) || [];

    return(
        <>
            {
                autocom?
                <Autocomplete
                    disablePortal
                    options={countries}
                    renderInput={(params) => <TextField {...params} {...data}/>}
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
