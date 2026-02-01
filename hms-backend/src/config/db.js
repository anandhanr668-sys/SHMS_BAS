// src/config/db.js

import pkg from "pg";
import { env } from "./env.js";
import logger from "./logger.js";

const { Pool } = pkg;

const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  ssl: env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    client.release();
    logger.info("✅ PostgreSQL connected successfully");
  } catch (error) {
    logger.error("❌ Database connection failed", error);
    process.exit(1);
  }
};

export default pool;
