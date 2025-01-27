const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
//   });

// 
io.on('connection', (socket) => {
    socket.on('hello', (arg) => {
      console.log(arg); // 'world'
    });
  });
server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});