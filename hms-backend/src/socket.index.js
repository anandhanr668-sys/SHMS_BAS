// src/socket.index.js

const { initSocket } = require('./realtime/socket');
const { emitBedUpdate } = require('./realtime/bed.events');
const { emitNotification } = require('./realtime/notification.events');

/**
 * Initialize sockets with HTTP server
 */
const initializeSockets = (server) => {
  const io = initSocket(server);

  console.log('⚡ Real-time socket system initialized');

  return {
    io,
    emitBedUpdate,
    emitNotification,
  };
};

module.exports = {
  initializeSockets,
};
