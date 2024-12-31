import { io } from 'socket.io-client';

function createTestClient(index) {
  const socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log(`Client ${index} connected with ID: ${socket.id}`);
    
    // Send a test message after a short delay
    setTimeout(() => {
      const testMessage = `test message from client ${index}`;
      console.log(`Sending: ${testMessage}`);
      socket.emit('message', testMessage);
    }, 2000);
  });

  socket.on('message', (response) => {
    console.log(`Client ${index} received response: ${response}`);
  });

  socket.on('disconnect', () => {
    console.log(`Client ${index} disconnected`);
  });
}

// Create multiple test clients
for (let i = 0; i < 5; i++) {
  setTimeout(() => createTestClient(i), i * 1000);
}