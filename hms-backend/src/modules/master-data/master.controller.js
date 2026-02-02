// src/modules/master-data/master.controller.js

const masterService = require('./master.service');

/**
 * GET /master-data/:type
 */
const getMasterByType = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { type } = req.params;

    const data = await masterService.getByType(
      tenantId,
      type
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /master-data
 */
const createMaster = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const master = await masterService.createMaster(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Master data created successfully',
      data: master,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /master-data/:id/deactivate
 */
const deactivateMaster = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;

    const master = await masterService.deactivateMaster(
      tenantId,
      id
    );

    res.status(200).json({
      success: true,
      message: 'Master data deactivated',
      data: master,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMasterByType,
  createMaster,
  deactivateMaster,
};
