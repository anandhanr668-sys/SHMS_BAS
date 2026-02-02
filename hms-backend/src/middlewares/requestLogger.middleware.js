// src/middlewares/requestLogger.middleware.js

const { v4: uuidv4 } = require('uuid');

const requestLogger = (req, res, next) => {
  req.requestId = uuidv4();
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    console.log(
      `[${req.requestId}] ${req.method} ${req.originalUrl} ` +
      `${res.statusCode} - ${duration}ms`
    );
  });

  next();
};

module.exports = requestLogger;
