// src/modules/wards-beds/ward.service.js

const Ward = require('./ward.model');

/**
 * MOCK in-memory store
 */
const wards = [];

/**
 * Get all wards for tenant
 */
const getWards = async (tenantId) => {
  return wards.filter((w) => w.tenantId === tenantId);
};

/**
 * Create ward with beds
 */
const createWard = async (tenantId, data) => {
  const beds = (data.beds || []).map((b, index) => ({
    bedId: index + 1,
    bedNumber: b.bedNumber,
    status: 'AVAILABLE',
    patientId: null,
  }));

  const ward = new Ward({
    id: wards.length + 1,
    tenantId,
    name: data.name,
    type: data.type,
    beds,
  });

  wards.push(ward);
  return ward;
};

/**
 * Allocate bed to patient
 */
const allocateBed = async (tenantId, wardId, bedId, patientId) => {
  const ward = wards.find(
    (w) => w.id === Number(wardId) && w.tenantId === tenantId
  );

  if (!ward) throw new Error('Ward not found');

  const bed = ward.beds.find((b) => b.bedId === Number(bedId));
  if (!bed || bed.status !== 'AVAILABLE') {
    throw new Error('Bed not available');
  }

  bed.status = 'OCCUPIED';
  bed.patientId = patientId;

  return bed;
};

/**
 * Release bed
 */
const releaseBed = async (tenantId, wardId, bedId) => {
  const ward = wards.find(
    (w) => w.id === Number(wardId) && w.tenantId === tenantId
  );

  if (!ward) throw new Error('Ward not found');

  const bed = ward.beds.find((b) => b.bedId === Number(bedId));
  if (!bed) throw new Error('Bed not found');

  bed.status = 'AVAILABLE';
  bed.patientId = null;

  return bed;
};

module.exports = {
  getWards,
  createWard,
  allocateBed,
  releaseBed,
};
