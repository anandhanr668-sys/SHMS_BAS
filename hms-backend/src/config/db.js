// src/config/db.js

const { Pool } = require('pg');
const env = require('./env');
const logger = require('./logger');

const pool = new Pool({
  host: env.database.host,
  port: env.database.port,
  database: env.database.name,
  user: env.database.user,
  password: env.database.password,
  ssl: env.nodeEnv === 'production' ? { rejectUnauthorized: false } : false,
});

pool.on('connect', () => {
  logger.info('📦 Database connected successfully');
});

pool.on('error', (err) => {
  logger.error('❌ Database connection error', err);
  process.exit(1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
