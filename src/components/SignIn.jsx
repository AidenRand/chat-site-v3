import { Box, Typography, TextField } from '@mui/material';
import MyButton from './MyButton';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import textfieldStyles from './TextFieldStyling';

function SignIn() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        console.log(userName);
        navigate('/Chat');
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <MyButton type='submit' variant='contained'>
                Sign Up
            </MyButton>
        </Box>
    );
}

export default SignIn;
