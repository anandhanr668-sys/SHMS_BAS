// src/middlewares/error.middleware.js

const errorMiddleware = (err, req, res, next) => {
  console.error('❌ ERROR:', {
    requestId: req.requestId,
    message: err.message,
    stack: err.stack,
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    requestId: req.requestId,
  });
};

module.exports = errorMiddleware;
