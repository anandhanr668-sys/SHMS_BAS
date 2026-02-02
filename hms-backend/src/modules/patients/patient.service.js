// src/modules/patients/patient.service.js

const Patient = require('./patient.model');

/**
 * MOCK in-memory store (replace with DB)
 */
const patients = [];

/**
 * Generate UHID
 */
const generateUHID = (tenantId) => {
  return `${tenantId.toUpperCase()}-${Date.now()}`;
};

/**
 * Get all patients for tenant
 */
const getPatients = async (tenantId) => {
  return patients.filter((p) => p.tenantId === tenantId);
};

/**
 * Create patient
 */
const createPatient = async (tenantId, data) => {
  const patient = new Patient({
    id: patients.length + 1,
    tenantId,
    uhid: generateUHID(tenantId),
    ...data,
  });

  patients.push(patient);
  return patient;
};

module.exports = {
  getPatients,
  createPatient,
};
