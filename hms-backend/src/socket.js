// src/socket.js

import { Server } from "socket.io";
import logger from "./config/logger.js";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    logger.info(`🔌 Socket connected: ${socket.id}`);

    socket.on("disconnect", () => {
      logger.info(`❌ Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

/* Emit helpers (used anywhere) */
export const emitEvent = (event, payload) => {
  if (io) {
    io.emit(event, payload);
  }
};
