import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function ChatOutput({ messages }) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                }}
            >
                {messages.map((message) => (
                    <Box
                        key={message.id}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <Typography>{message.userName}</Typography>
                        <Typography>{message.message}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default ChatOutput;
