// src/modules/master-data/master.model.js

import pool from "../../config/db.js";

export const createMasterData = async (data) => {
  const { category, key, value } = data;

  const result = await pool.query(
    `INSERT INTO master_data (category, key, value)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [category, key, value]
  );

  return result.rows[0];
};

export const getMasterDataByCategory = async (category) => {
  const result = await pool.query(
    `SELECT id, key, value
     FROM master_data
     WHERE category = $1
     ORDER BY key`,
    [category]
  );
  return result.rows;
};

export const getAllMasterData = async () => {
  const result = await pool.query(
    `SELECT * FROM master_data ORDER BY category, key`
  );
  return result.rows;
};

export const deleteMasterData = async (id) => {
  await pool.query(`DELETE FROM master_data WHERE id = $1`, [id]);
};
