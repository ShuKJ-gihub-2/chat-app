const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', socket => {
  socket.on('chat message', data => {
    io.emit('chat message', data);
  });
});

server.listen(3000, () => {
  console.log('サーバー起動中 http://localhost:3000');
});
