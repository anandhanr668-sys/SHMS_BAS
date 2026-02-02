-- migrations/001_create_users.sql

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  tenant_id VARCHAR(50) NOT NULL,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  role VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
