import React, { useContext } from "react";
import uniqid from 'uniqid';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ContextInput } from "../../helpers";
import FormItem from "./formItem/FormItem";

const Form = React.memo(({handlerChange, handleSubmit}) =>  {

    const {theme} = useContext(ContextInput);

    return(
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                onSubmit={handleSubmit}
            >
                {
                    theme.map(element => {
                        return <FormItem key={uniqid()} data={element} handlerChange={handlerChange}/>
                    })
                }
                <Button  color="secondary" variant="outlined" type="submit">Save</Button>
            </Box>
        </>
    );
});

export default Form;
