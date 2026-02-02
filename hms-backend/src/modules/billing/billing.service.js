// src/modules/billing/billing.service.js

const Billing = require('./billing.model');

/**
 * MOCK in-memory store
 */
const bills = [];

/**
 * Calculate totals
 */
const calculateTotals = (items, insuranceCovered = 0) => {
  const grossAmount = items.reduce(
    (sum, item) => sum + item.total,
    0
  );
  const netPayable = Math.max(grossAmount - insuranceCovered, 0);

  return { grossAmount, netPayable };
};

/**
 * Get bills by patient
 */
const getBillsByPatient = async (tenantId, patientId) => {
  return bills.filter(
    (b) => b.tenantId === tenantId && b.patientId === patientId
  );
};

/**
 * Create bill
 */
const createBill = async (tenantId, data) => {
  const { items, insuranceCovered = 0 } = data;

  const { grossAmount, netPayable } = calculateTotals(
    items,
    insuranceCovered
  );

  const bill = new Billing({
    id: bills.length + 1,
    tenantId,
    ...data,
    grossAmount,
    netPayable,
  });

  bills.push(bill);
  return bill;
};

/**
 * Mark payment
 */
const makePayment = async (tenantId, billId, paymentMode) => {
  const bill = bills.find(
    (b) => b.id === Number(billId) && b.tenantId === tenantId
  );

  if (!bill) throw new Error('Bill not found');

  bill.paymentStatus = 'PAID';
  bill.paymentMode = paymentMode;

  return bill;
};

module.exports = {
  getBillsByPatient,
  createBill,
  makePayment,
};
