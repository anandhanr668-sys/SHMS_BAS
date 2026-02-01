// src/modules/staff/staff.model.js

import pool from "../../config/db.js";

export const createStaff = async (data) => {
  const {
    user_id,
    staff_type,
    department,
    specialization,
    shift,
  } = data;

  const result = await pool.query(
    `INSERT INTO staff
     (user_id, staff_type, department, specialization, shift)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`,
    [user_id, staff_type, department, specialization, shift]
  );

  return result.rows[0];
};

export const getAllStaff = async () => {
  const result = await pool.query(
    `SELECT s.*, u.name, u.email, u.role
     FROM staff s
     JOIN users u ON u.id = s.user_id
     ORDER BY u.name`
  );
  return result.rows;
};

export const getStaffById = async (id) => {
  const result = await pool.query(
    `SELECT s.*, u.name, u.email, u.role
     FROM staff s
     JOIN users u ON u.id = s.user_id
     WHERE s.id = $1`,
    [id]
  );
  return result.rows[0];
};

export const updateStaff = async (id, data) => {
  const { department, specialization, shift } = data;

  const result = await pool.query(
    `UPDATE staff SET
      department = COALESCE($1, department),
      specialization = COALESCE($2, specialization),
      shift = COALESCE($3, shift)
     WHERE id = $4
     RETURNING *`,
    [department, specialization, shift, id]
  );

  return result.rows[0];
};
