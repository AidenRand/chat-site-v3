import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#292929',
            grey: '#363636',
            blue: '#1e79e8',
            darkBlue: '#1669c9',
            white: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
