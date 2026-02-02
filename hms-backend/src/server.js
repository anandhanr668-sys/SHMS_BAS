// src/server.js

const dotenv = require('dotenv');
const app = require('./app');
const { initializeSockets } = require('./socket.index');

// Load environment variables
dotenv.config();

/* -------------------- CONFIG -------------------- */

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/* -------------------- START SERVER -------------------- */

const server = app.listen(PORT, () => {
  console.log(`
🚀 HMS Backend Server Started
📍 Environment : ${NODE_ENV}
🌐 Port        : ${PORT}
⏰ Time        : ${new Date().toLocaleString()}
`);
});

/* -------------------- INITIALIZE SOCKETS -------------------- */
initializeSockets(server);

/* -------------------- GRACEFUL SHUTDOWN -------------------- */

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});
