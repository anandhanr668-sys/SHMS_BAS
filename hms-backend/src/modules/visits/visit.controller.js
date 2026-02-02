// src/modules/visits/visit.controller.js

const visitService = require('./visit.service');

/**
 * GET /visits
 */
const getAllVisits = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const data = await visitService.getVisits(tenantId);

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /visits/patient/:patientId
 */
const getPatientVisits = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { patientId } = req.params;

    const data = await visitService.getVisitsByPatient(
      tenantId,
      patientId
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /visits
 */
const createVisit = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const visit = await visitService.createVisit(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Visit created successfully',
      data: visit,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /visits/:id
 */
const updateVisit = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;

    const visit = await visitService.updateVisit(
      tenantId,
      id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: 'Visit updated successfully',
      data: visit,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllVisits,
  getPatientVisits,
  createVisit,
  updateVisit,
};
