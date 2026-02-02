// src/modules/staff/staff.controller.js

const staffService = require('./staff.service');

/**
 * GET /staff
 */
const getAllStaff = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const data = await staffService.getStaff(tenantId);

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /staff
 */
const createStaff = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const staff = await staffService.createStaff(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Staff created successfully',
      data: staff,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /staff/:id/duty
 */
const updateDutyStatus = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;
    const { onDuty } = req.body;

    const staff = await staffService.updateDutyStatus(
      tenantId,
      id,
      onDuty
    );

    res.status(200).json({
      success: true,
      message: 'Duty status updated',
      data: staff,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStaff,
  createStaff,
  updateDutyStatus,
};
