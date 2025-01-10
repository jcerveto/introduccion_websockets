import { Server } from 'socket.io';
import { processConnection } from './service.js';

const connectionQueue = [];
let isProcessing = false;

export function websocketConnection(httpServer) {
  
  const io = new Server(httpServer, {
    serveClient: false,
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
    connectionQueue.push(socket);
    
    if (!isProcessing) {
      processNextInQueue();
    }
  });

  io.on('disconnect', (socket) => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  async function processNextInQueue() {
    if (connectionQueue.length === 0) {
      isProcessing = false;
      return;
    }

    isProcessing = true;
    const socket = connectionQueue.shift(); // FIFO implementation
    
    try {
      await processConnection(socket);
    } catch (error) {
      window.alert("Error processing connection");
      console.error(`Error processing connection ${socket.id}:`, error);
    } finally {
      // Ensure connection is closed after processing or error
      if (socket.connected) {
        socket.disconnect(true);
      }
      // Process next client in queue
      processNextInQueue();
    }
  }
}