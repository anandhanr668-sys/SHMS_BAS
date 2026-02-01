// src/modules/lcnc/rules-engine/rules.model.js

import pool from "../../../config/db.js";

export const createRule = async ({ name, event, conditions, actions }) => {
  const result = await pool.query(
    `INSERT INTO lcnc_rules (name, event, conditions, actions)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, event, conditions, actions]
  );
  return result.rows[0];
};

export const getRulesByEvent = async (event) => {
  const result = await pool.query(
    `SELECT * FROM lcnc_rules WHERE event = $1`,
    [event]
  );
  return result.rows;
};

export const getAllRules = async () => {
  const result = await pool.query(
    `SELECT id, name, event FROM lcnc_rules ORDER BY created_at DESC`
  );
  return result.rows;
};

export const deleteRule = async (id) => {
  await pool.query(`DELETE FROM lcnc_rules WHERE id = $1`, [id]);
};
