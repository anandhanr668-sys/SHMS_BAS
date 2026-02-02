// src/modules/pharmacy/pharmacy.controller.js

const pharmacyService = require('./pharmacy.service');

/**
 * GET /pharmacy/medicines
 */
const getMedicines = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const data = await pharmacyService.getMedicines(tenantId);

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /pharmacy/medicines
 */
const addMedicine = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const medicine = await pharmacyService.addMedicine(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Medicine added successfully',
      data: medicine,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /pharmacy/dispense
 */
const dispenseMedicine = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const dispense = await pharmacyService.dispenseMedicine(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Medicines dispensed successfully',
      data: dispense,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMedicines,
  addMedicine,
  dispenseMedicine,
};
