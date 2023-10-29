import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import textfieldStyles from './TextFieldStyling';
import MyButton from './MyButton';

function ChatInput({ socket }) {
    const [message, setMessage] = useState('');

    const HandleSend = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem('userName')) {
            socket.emit('chat-message', {
                message: message,
                userName: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                SocketID: socket.id,
            });
            console.log(socket.id);
            setMessage('');
        }
    };

    return (
        <>
            <Box component='form' onSubmit={HandleSend}>
                <TextField
                    label='Message'
                    sx={textfieldStyles}
                    variant='outlined'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <MyButton variant='contained'>Send</MyButton>
            </Box>
        </>
    );
}

export default ChatInput;
