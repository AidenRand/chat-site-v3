import React from 'react';
import ChatInput from './ChatInput';

function Chat({ socket }) {
    return (
        <>
            <ChatInput socket={socket} />
        </>
    );
}

export default Chat;
