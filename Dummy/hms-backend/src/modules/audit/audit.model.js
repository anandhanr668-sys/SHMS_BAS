// src/modules/audit/audit.model.js

import pool from "../../config/db.js";

export const createAuditLog = async (log) => {
  const {
    user_id,
    action,
    entity,
    entity_id,
    old_value,
    new_value,
  } = log;

  const result = await pool.query(
    `INSERT INTO audit_logs
     (user_id, action, entity, entity_id, old_value, new_value)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *`,
    [user_id, action, entity, entity_id, old_value, new_value]
  );

  return result.rows[0];
};

export const getAuditLogs = async () => {
  const result = await pool.query(
    `SELECT a.*, u.name AS user_name
     FROM audit_logs a
     LEFT JOIN users u ON u.id = a.user_id
     ORDER BY a.created_at DESC`
  );
  return result.rows;
};

export const getAuditLogsByEntity = async (entity, entity_id) => {
  const result = await pool.query(
    `SELECT * FROM audit_logs
     WHERE entity = $1 AND entity_id = $2
     ORDER BY created_at DESC`,
    [entity, entity_id]
  );
  return result.rows;
};
