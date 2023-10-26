import { Box, Typography, TextField } from '@mui/material';
import MyButton from './MyButton';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        console.log(userName);
        navigate('/chat');
    };

    return (
        <Box
            component='form'
            onSubmit={HandleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                bgcolor: 'primary.main',
                boxShadow: '0px 5px 10px 0px #191919',
                marginTop: '15%',
                height: '500px',
                width: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '20px',
            }}
        >
            <Typography sx={{ fontSize: '2rem', fontWeight: '900' }}>
                Sign Up
            </Typography>
            <TextField
                label='User Name'
                sx={textfieldStyles}
                onChange={(e) => setUserName(e.target.value)}
            />
            <MyButton type='submit' variant='contained'>
                Sign Up
            </MyButton>
        </Box>
    );
}

export default SignIn;
