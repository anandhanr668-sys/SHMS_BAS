// src/server.js

import http from "http";
import app from "./app.js";
import { initSocket } from "./socket.js";
import { env } from "./config/env.js";
import logger from "./config/logger.js";

/* ======================
   Create HTTP Server
====================== */
const server = http.createServer(app);

/* ======================
   Initialize WebSockets
====================== */
initSocket(server);

/* ======================
   Start Server
====================== */
const PORT = env.PORT || 5000;

server.listen(PORT, () => {
  logger.info(`🚀 HMS Backend running on port ${PORT}`);
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});

/* ======================
   Graceful Shutdown
====================== */
process.on("SIGTERM", () => {
  logger.warn("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    logger.info("Server closed");
    process.exit(0);
  });
});
