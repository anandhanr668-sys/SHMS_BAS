// src/modules/staff/staff.service.js

const Staff = require('./staff.model');

/**
 * MOCK in-memory store
 */
const staffList = [];

/**
 * Get all staff for tenant
 */
const getStaff = async (tenantId) => {
  return staffList.filter(
    (s) => s.tenantId === tenantId && s.isActive
  );
};

/**
 * Create staff
 */
const createStaff = async (tenantId, data) => {
  const staff = new Staff({
    id: staffList.length + 1,
    tenantId,
    ...data,
  });

  staffList.push(staff);
  return staff;
};

/**
 * Toggle duty status
 */
const updateDutyStatus = async (tenantId, staffId, onDuty) => {
  const staff = staffList.find(
    (s) => s.id === Number(staffId) && s.tenantId === tenantId
  );

  if (!staff) throw new Error('Staff not found');

  staff.onDuty = onDuty;
  return staff;
};

module.exports = {
  getStaff,
  createStaff,
  updateDutyStatus,
};
