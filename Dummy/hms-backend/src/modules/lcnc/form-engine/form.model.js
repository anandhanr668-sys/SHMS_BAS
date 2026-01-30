// src/modules/lcnc/form-engine/form.model.js

import pool from "../../../config/db.js";

export const createForm = async ({ name, schema, createdBy }) => {
  const result = await pool.query(
    `INSERT INTO lcnc_forms (name, schema, created_by)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, schema, createdBy]
  );
  return result.rows[0];
};

export const getAllForms = async () => {
  const result = await pool.query(
    `SELECT id, name, created_at FROM lcnc_forms ORDER BY created_at DESC`
  );
  return result.rows;
};

export const getFormById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM lcnc_forms WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

export const deleteForm = async (id) => {
  await pool.query(`DELETE FROM lcnc_forms WHERE id = $1`, [id]);
};
