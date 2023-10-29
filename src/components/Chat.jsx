import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

function Chat({ socket }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on(
            'chat-message',
            (message) => setMessages([...messages, message]),
            [socket, messages]
        );
    });
    return (
        <>
            <ChatInput socket={socket} />
            <ChatOutput messages={messages} />
        </>
    );
}

export default Chat;
