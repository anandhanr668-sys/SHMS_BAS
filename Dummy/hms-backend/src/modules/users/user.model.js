// src/modules/users/user.model.js

import pool from "../../config/db.js";

export const createUser = async (user) => {
  const { name, email, password, role } = user;

  const result = await pool.query(
    `INSERT INTO users (name, email, password, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, role, created_at`,
    [name, email, password, role]
  );

  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result.rows[0];
};

export const findUserById = async (id) => {
  const result = await pool.query(
    `SELECT id, name, email, role, created_at FROM users WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

export const findAllUsers = async () => {
  const result = await pool.query(
    `SELECT id, name, email, role, created_at
     FROM users
     ORDER BY created_at DESC`
  );
  return result.rows;
};

export const updateUser = async (id, data) => {
  const { name, role } = data;

  const result = await pool.query(
    `UPDATE users
     SET name = COALESCE($1, name),
         role = COALESCE($2, role)
     WHERE id = $3
     RETURNING id, name, email, role`,
    [name, role, id]
  );

  return result.rows[0];
};

export const deleteUser = async (id) => {
  await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
};
