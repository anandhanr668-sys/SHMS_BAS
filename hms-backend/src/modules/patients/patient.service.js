// src/modules/patients/patient.service.js

import * as patientModel from "./patient.model.js";

export const createPatient = async (payload) => {
  return patientModel.createPatient(payload);
};

export const getPatients = async () => {
  return patientModel.getAllPatients();
};

export const getPatient = async (id) => {
  const patient = await patientModel.getPatientById(id);
  if (!patient) {
    throw new Error("Patient not found");
  }
  return patient;
};

export const updatePatient = async (id, payload) => {
  const updated = await patientModel.updatePatient(id, payload);
  if (!updated) {
    throw new Error("Patient not found");
  }
  return updated;
};
