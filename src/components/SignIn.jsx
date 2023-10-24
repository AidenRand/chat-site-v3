import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';

function SignIn() {
    return (
        <Box sx={{ bgcolor: 'primary.black' }}>
            <Typography>Sign Up</Typography>
            <TextField
                label='Username'
                sx={{
                    bgcolor: 'primary.grey',
                    borderRadius: '10px',
                    border: 'none',
                    outline: 'none',
                }}
            />
            <Button variant='contained'>Sign Up</Button>
        </Box>
    );
}

export default SignIn;
