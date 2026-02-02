// src/modules/pharmacy/pharmacy.service.js

const { Medicine, Dispense } = require('./pharmacy.model');

/**
 * MOCK in-memory store
 */
const medicines = [];
const dispenses = [];

/**
 * Get all medicines
 */
const getMedicines = async (tenantId) => {
  return medicines.filter((m) => m.tenantId === tenantId);
};

/**
 * Add medicine
 */
const addMedicine = async (tenantId, data) => {
  const medicine = new Medicine({
    id: medicines.length + 1,
    tenantId,
    ...data,
  });

  medicines.push(medicine);
  return medicine;
};

/**
 * Dispense medicine
 */
const dispenseMedicine = async (tenantId, data) => {
  let totalAmount = 0;

  data.medicines.forEach((item) => {
    const medicine = medicines.find(
      (m) => m.id === item.medicineId && m.tenantId === tenantId
    );

    if (!medicine || medicine.stockQuantity < item.quantity) {
      throw new Error('Insufficient stock');
    }

    medicine.stockQuantity -= item.quantity;
    item.amount = medicine.price * item.quantity;
    totalAmount += item.amount;
  });

  const dispense = new Dispense({
    id: dispenses.length + 1,
    tenantId,
    ...data,
    totalAmount,
  });

  dispenses.push(dispense);
  return dispense;
};

module.exports = {
  getMedicines,
  addMedicine,
  dispenseMedicine,
};
