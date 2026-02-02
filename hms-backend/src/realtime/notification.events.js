// src/realtime/notification.events.js

const { getIO } = require('./socket');

/**
 * Emit notification
 */
const emitNotification = (tenantId, notification) => {
  const io = getIO();
  io.to(tenantId).emit('notification:new', {
    ...notification,
    timestamp: new Date(),
  });
};

module.exports = {
  emitNotification,
};
