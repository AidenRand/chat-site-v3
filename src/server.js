import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 4001;

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:4000',
    }
})


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('disconnect', (reason) => {
        console.log('a user disconnected', reason);
    })

    socket.on('chat-message', (message) => {
        socket.emit('chat-message', message);
    })
})

app.get('/', (req, res) => {
    res.send('Server is running');
})

server.listen(port, () => {
    console.log(`Server is running on post ${port}`);
})