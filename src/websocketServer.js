// websocketServer.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  ws.send('Connection established');
});

console.log('WebSocket server is running on ws://localhost:3000');