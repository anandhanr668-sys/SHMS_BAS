// src/app.js

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

/* -------------------- MIDDLEWARES -------------------- */

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('dev'));

/* -------------------- HEALTH CHECK -------------------- */

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'HMS Backend is running',
    timestamp: new Date().toISOString(),
  });
});

/* -------------------- API ROUTES -------------------- */
const routes = require('./routes');
app.use('/api', routes);

/* -------------------- 404 HANDLER -------------------- */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  });
});

/* -------------------- GLOBAL ERROR HANDLER -------------------- */

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
