// src/modules/visits/visit.service.js

const Visit = require('./visit.model');

/**
 * MOCK in-memory store (replace with DB)
 */
const visits = [];

/**
 * Get all visits for a tenant
 */
const getVisits = async (tenantId) => {
  return visits.filter((v) => v.tenantId === tenantId);
};

/**
 * Get visits by patient
 */
const getVisitsByPatient = async (tenantId, patientId) => {
  return visits.filter(
    (v) => v.tenantId === tenantId && v.patientId === patientId
  );
};

/**
 * Create new visit
 */
const createVisit = async (tenantId, data) => {
  const visit = new Visit({
    id: visits.length + 1,
    tenantId,
    ...data,
  });

  visits.push(visit);
  return visit;
};

/**
 * Update visit status / clinical data
 */
const updateVisit = async (tenantId, visitId, updates) => {
  const visit = visits.find(
    (v) => v.id === Number(visitId) && v.tenantId === tenantId
  );

  if (!visit) {
    throw new Error('Visit not found');
  }

  Object.assign(visit, updates);
  return visit;
};

module.exports = {
  getVisits,
  getVisitsByPatient,
  createVisit,
  updateVisit,
};
