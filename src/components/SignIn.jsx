import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({ theme }) => ({
    border: 0,
    backgroundColor: theme.palette.primary.blue,

    '&:hover': {
        backgroundColor: theme.palette.primary.darkBlue,
    },

    borderRadius: 3,

    color: 'white',
    height: 48,
    width: '120px',
}));

const textfieldStyles = {
    '&::focus': {
        color: 'primary.blue',
    },

    fieldset: {
        borderColor: 'primary.blue',
    },

    '& label.Mui-focused': {
        color: 'primary.white',
    },

    '& label': {
        color: 'primary.white',
    },

    '& > :not(style)': {
        width: '400px',
    },

    '& .MuiInput-underline:after': {
        borderBottomColor: 'primary.blue',
    },
    '& .MuiOutlinedInput-root': {
        color: 'primary.white',

        '&.Mui-focused fieldset': {
            borderColor: 'primary.blue',
        },

        '&:hover fieldset': {
            borderColor: 'primary.blue',
        },
    },
};

function SignIn() {
    return (
        <Box
            component='form'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                bgcolor: 'primary.black',
                marginTop: '15%',
            }}
        >
            <Typography sx={{ fontSize: '2rem', fontWeight: '900' }}>
                Sign Up
            </Typography>
            <TextField
                inputProps={{ inputProps: { min: 0, max: 10 } }}
                label='First Name'
                sx={textfieldStyles}
            />
            <TextField label='Last Name' sx={textfieldStyles} />
            <MyButton type='submit' variant='contained'>
                Sign Up
            </MyButton>
        </Box>
    );
}

export default SignIn;
