// src/realtime/bed.events.js

const { getIO } = require('./socket');

/**
 * Emit bed status update
 */
const emitBedUpdate = (tenantId, payload) => {
  const io = getIO();
  io.to(tenantId).emit('bed:update', payload);
};

module.exports = {
  emitBedUpdate,
};
