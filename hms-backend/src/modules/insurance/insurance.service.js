// src/modules/insurance/insurance.service.js

const Insurance = require('./insurance.model');

/**
 * MOCK in-memory store
 */
const insurances = [];

/**
 * Get insurance by patient
 */
const getInsuranceByPatient = async (tenantId, patientId) => {
  return insurances.filter(
    (i) => i.tenantId === tenantId && i.patientId === patientId
  );
};

/**
 * Create insurance record
 */
const createInsurance = async (tenantId, data) => {
  const insurance = new Insurance({
    id: insurances.length + 1,
    tenantId,
    ...data,
  });

  insurances.push(insurance);
  return insurance;
};

/**
 * Update claim status
 */
const updateClaimStatus = async (tenantId, insuranceId, claimStatus) => {
  const insurance = insurances.find(
    (i) => i.id === Number(insuranceId) && i.tenantId === tenantId
  );

  if (!insurance) throw new Error('Insurance record not found');

  insurance.claimStatus = claimStatus;
  return insurance;
};

module.exports = {
  getInsuranceByPatient,
  createInsurance,
  updateClaimStatus,
};
