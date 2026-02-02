// src/modules/wards-beds/ward.controller.js

const wardService = require('./ward.service');

/**
 * GET /wards
 */
const getAllWards = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const data = await wardService.getWards(tenantId);

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /wards
 */
const createWard = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const ward = await wardService.createWard(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Ward created successfully',
      data: ward,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /wards/:wardId/beds/:bedId/allocate
 */
const allocateBed = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { wardId, bedId } = req.params;
    const { patientId } = req.body;

    const bed = await wardService.allocateBed(
      tenantId,
      wardId,
      bedId,
      patientId
    );

    res.status(200).json({
      success: true,
      message: 'Bed allocated successfully',
      data: bed,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /wards/:wardId/beds/:bedId/release
 */
const releaseBed = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { wardId, bedId } = req.params;

    const bed = await wardService.releaseBed(
      tenantId,
      wardId,
      bedId
    );

    res.status(200).json({
      success: true,
      message: 'Bed released successfully',
      data: bed,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllWards,
  createWard,
  allocateBed,
  releaseBed,
};
