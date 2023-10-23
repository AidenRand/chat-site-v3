import mui from 'material-ui';
import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';

function SignIn() {
    return (
        <Box>
            <Typography>Sign Up</Typography>
            <TextField label='Username' />
            <Button>Sign Up</Button>
        </Box>
    );
}

export default SignIn;
