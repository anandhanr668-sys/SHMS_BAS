// src/modules/wards-beds/ward.model.js

import pool from "../../config/db.js";

/* ========= WARDS ========= */

export const createWard = async ({ name, type }) => {
  const result = await pool.query(
    `INSERT INTO wards (name, type)
     VALUES ($1, $2)
     RETURNING *`,
    [name, type]
  );
  return result.rows[0];
};

export const getWards = async () => {
  const result = await pool.query(
    `SELECT * FROM wards ORDER BY created_at DESC`
  );
  return result.rows;
};

/* ========= BEDS ========= */

export const getAvailableBed = async (wardType) => {
  const result = await pool.query(
    `SELECT b.*
     FROM beds b
     JOIN wards w ON w.id = b.ward_id
     WHERE w.type = $1 AND b.status = 'AVAILABLE'
     LIMIT 1`,
    [wardType]
  );
  return result.rows[0];
};

export const occupyBed = async (bedId, visitId) => {
  const result = await pool.query(
    `UPDATE beds
     SET status = 'OCCUPIED', visit_id = $1
     WHERE id = $2
     RETURNING *`,
    [visitId, bedId]
  );
  return result.rows[0];
};

export const releaseBed = async (visitId) => {
  await pool.query(
    `UPDATE beds
     SET status = 'AVAILABLE', visit_id = NULL
     WHERE visit_id = $1`,
    [visitId]
  );
};
