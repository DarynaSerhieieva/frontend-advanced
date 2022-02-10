import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = () =>  {
    return(
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                >
                <div>
                    <TextField
                        required={false}
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        type="password"
                        disabled={false}
                        helperText="Some important text"
                    />
                </div>
            </Box>
        </>
    );
};

export default Form;
