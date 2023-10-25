import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';

function SignIn() {
    return (
        <Box sx={{ bgcolor: 'primary.black' }}>
            <Typography>Sign Up</Typography>
            <TextField
                label='Username'
                sx={{
                    '& > :not(style)': {
                        width: '1290px',
                    },

                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'primary.blue',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'primary.blue',
                        },
                        '&.Mui-hover fieldset': {
                            borderColor: 'primary.blue',
                        },
                    },
                }}
            />
            <Button variant='contained'>Sign Up</Button>
        </Box>
    );
}

export default SignIn;
