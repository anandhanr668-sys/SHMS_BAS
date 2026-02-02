// src/modules/master-data/master.service.js

const MasterData = require('./master.model');

/**
 * MOCK in-memory store
 */
const masters = [];

/**
 * Get master data by type
 */
const getByType = async (tenantId, type) => {
  return masters.filter(
    (m) =>
      m.tenantId === tenantId &&
      m.type === type &&
      m.isActive
  );
};

/**
 * Create master entry
 */
const createMaster = async (tenantId, data) => {
  const master = new MasterData({
    id: masters.length + 1,
    tenantId,
    ...data,
  });

  masters.push(master);
  return master;
};

/**
 * Deactivate master entry
 */
const deactivateMaster = async (tenantId, id) => {
  const master = masters.find(
    (m) => m.id === Number(id) && m.tenantId === tenantId
  );

  if (!master) throw new Error('Master data not found');

  master.isActive = false;
  return master;
};

module.exports = {
  getByType,
  createMaster,
  deactivateMaster,
};
