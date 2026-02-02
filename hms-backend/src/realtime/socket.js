// src/realtime/socket.js

let io = null;

const initSocket = (server) => {
  const { Server } = require('socket.io');

  io = new Server(server, {
    cors: { origin: '*' },
  });

  io.on('connection', (socket) => {
    console.log('🟢 Client connected:', socket.id);

    socket.on('join-tenant', (tenantId) => {
      socket.join(tenantId);
    });

    socket.on('disconnect', () => {
      console.log('🔴 Client disconnected:', socket.id);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) throw new Error('Socket not initialized');
  return io;
};

module.exports = {
  initSocket,
  getIO,
};
