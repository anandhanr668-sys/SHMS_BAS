// src/modules/visits/visit.model.js

import pool from "../../config/db.js";

export const createVisit = async (data) => {
  const {
    patient_id,
    visit_type,
    triage_level,
    reason,
    status,
  } = data;

  const result = await pool.query(
    `INSERT INTO visits
     (patient_id, visit_type, triage_level, reason, status)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [patient_id, visit_type, triage_level, reason, status]
  );

  return result.rows[0];
};

export const getAllVisits = async () => {
  const result = await pool.query(
    `SELECT v.*, p.name AS patient_name
     FROM visits v
     JOIN patients p ON p.id = v.patient_id
     ORDER BY v.created_at DESC`
  );
  return result.rows;
};

export const getVisitById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM visits WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

export const updateVisitStatus = async (id, status) => {
  const result = await pool.query(
    `UPDATE visits
     SET status = $1
     WHERE id = $2
     RETURNING *`,
    [status, id]
  );
  return result.rows[0];
};
