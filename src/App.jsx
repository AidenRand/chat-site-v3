import SignIn from './components/SignIn';
import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4001');

function App() {
    axios.get('http://localhost:4001').then((res) => {
        console.log(res);
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/Chat' element={<Chat socket={socket} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
