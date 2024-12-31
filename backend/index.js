import express from 'express';
import cors from 'cors';
import { websocketConnection } from './controller.js';

const app = express();


const httpServer = app.listen(3000, () => {
    console.log(`WebSocket server listening on port ${httpServer.address().port}`);
});

websocketConnection(httpServer);