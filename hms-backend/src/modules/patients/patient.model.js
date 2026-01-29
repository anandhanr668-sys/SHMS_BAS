// src/modules/patients/patient.model.js

import pool from "../../config/db.js";

export const createPatient = async (data) => {
  const {
    name,
    gender,
    age,
    phone,
    address,
    blood_group,
    emergency_contact,
  } = data;

  const result = await pool.query(
    `INSERT INTO patients
     (name, gender, age, phone, address, blood_group, emergency_contact)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
    [name, gender, age, phone, address, blood_group, emergency_contact]
  );

  return result.rows[0];
};

export const getAllPatients = async () => {
  const result = await pool.query(
    `SELECT * FROM patients ORDER BY created_at DESC`
  );
  return result.rows;
};

export const getPatientById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM patients WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

export const updatePatient = async (id, data) => {
  const {
    name,
    gender,
    age,
    phone,
    address,
    blood_group,
    emergency_contact,
  } = data;

  const result = await pool.query(
    `UPDATE patients SET
      name = COALESCE($1, name),
      gender = COALESCE($2, gender),
      age = COALESCE($3, age),
      phone = COALESCE($4, phone),
      address = COALESCE($5, address),
      blood_group = COALESCE($6, blood_group),
      emergency_contact = COALESCE($7, emergency_contact)
     WHERE id = $8
     RETURNING *`,
    [name, gender, age, phone, address, blood_group, emergency_contact, id]
  );

  return result.rows[0];
};
