import { Server } from 'socket.io';
import { logicProcessing } from './service.js';

export function websocketConnection(httpServer) {
  const io = new Server(httpServer, {
    serveClient: false,
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Move all event listeners inside the connection callback
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });

    socket.on('error', (error) => {
      console.error('Error with client:', error);
    });

    socket.on('message', (message) => {
      console.log(`Message received: ${message}`);
      const response = logicProcessing(message);
      console.log(`Sending response: ${response}`);
      io.emit('message', response);  // Broadcast to all clients
      // Or use socket.emit('message', response) to send only to the sender
    });
  });
}