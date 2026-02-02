// src/modules/billing/billing.controller.js

const billingService = require('./billing.service');

/**
 * GET /billing/patient/:patientId
 */
const getPatientBills = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { patientId } = req.params;

    const data = await billingService.getBillsByPatient(
      tenantId,
      patientId
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /billing
 */
const createBill = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const bill = await billingService.createBill(
      tenantId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Bill generated successfully',
      data: bill,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /billing/:id/pay
 */
const makePayment = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;
    const { paymentMode } = req.body;

    const bill = await billingService.makePayment(
      tenantId,
      id,
      paymentMode
    );

    res.status(200).json({
      success: true,
      message: 'Payment successful',
      data: bill,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPatientBills,
  createBill,
  makePayment,
};
