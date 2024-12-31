export function processConnection(socket) {
  return new Promise((resolve, reject) => {
    console.log(`Processing client ${socket.id}`);
    
    // Set timeout to close connection after 30 seconds
    const timeout = setTimeout(() => {
      console.log(`Timeout reached for client ${socket.id}`);
      resolve();
    }, 30000);

    // Handle incoming messages
    socket.on('message', (msg) => {
      console.log(`Received message from ${socket.id}: ${msg}`);
      socket.emit('message', msg.toUpperCase());
    });

    // Clean up on disconnect
    socket.on('disconnect', () => {
      console.log(`Client ${socket.id} disconnected`);
      clearTimeout(timeout);
      resolve();
    });

    // Handle any errors
    socket.on('error', (error) => {
      console.error(`Error with client ${socket.id}:`, error);
      clearTimeout(timeout);
      reject(error);
    });
  });
}
