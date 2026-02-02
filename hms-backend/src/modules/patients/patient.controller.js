// src/modules/patients/patient.controller.js

const patientService = require('./patient.service');

/**
 * GET /patients
 */
const getAllPatients = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const data = await patientService.getPatients(tenantId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /patients
 */
const createPatient = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const patient = await patientService.createPatient(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Patient registered successfully',
      data: patient,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPatients,
  createPatient,
};
