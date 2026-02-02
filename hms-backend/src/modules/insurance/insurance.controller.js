// src/modules/insurance/insurance.controller.js

const insuranceService = require('./insurance.service');

/**
 * GET /insurance/patient/:patientId
 */
const getPatientInsurance = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { patientId } = req.params;

    const data = await insuranceService.getInsuranceByPatient(
      tenantId,
      patientId
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /insurance
 */
const createInsurance = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const insurance = await insuranceService.createInsurance(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Insurance added successfully',
      data: insurance,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /insurance/:id/claim
 */
const updateClaimStatus = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;
    const { claimStatus } = req.body;

    const insurance = await insuranceService.updateClaimStatus(
      tenantId,
      id,
      claimStatus
    );

    res.status(200).json({
      success: true,
      message: 'Claim status updated',
      data: insurance,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPatientInsurance,
  createInsurance,
  updateClaimStatus,
};
