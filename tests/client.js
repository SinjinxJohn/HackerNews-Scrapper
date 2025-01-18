const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
    console.log('WebSocket connection established!');
  });

  socket.on('message', (message) => {
    // Check if the message is a Buffer
    if (Buffer.isBuffer(message)) {
        console.log('Received buffer:', message.toString());  // Convert the buffer to string
    } else {
        console.log('Received:', message);  // If it's already a string, log directly
    }
});


socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });