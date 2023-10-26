import SignIn from './components/SignIn';
import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';

function App() {
    axios.get('http://localhost:4001').then((res) => {
        console.log(res);
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/Chat' element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
