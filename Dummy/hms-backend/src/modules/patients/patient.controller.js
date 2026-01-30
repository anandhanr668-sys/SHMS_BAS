// src/modules/patients/patient.controller.js

import * as patientService from "./patient.service.js";
import { successResponse } from "../../utils/response.js";

export const createPatient = async (req, res, next) => {
  try {
    const patient = await patientService.createPatient(req.body);
    successResponse(res, patient, "Patient created successfully");
  } catch (err) {
    next(err);
  }
};

export const getPatients = async (req, res, next) => {
  try {
    const patients = await patientService.getPatients();
    successResponse(res, patients, "Patients fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getPatient = async (req, res, next) => {
  try {
    const patient = await patientService.getPatient(req.params.id);
    successResponse(res, patient, "Patient fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const updatePatient = async (req, res, next) => {
  try {
    const patient = await patientService.updatePatient(
      req.params.id,
      req.body
    );
    successResponse(res, patient, "Patient updated successfully");
  } catch (err) {
    next(err);
  }
};
