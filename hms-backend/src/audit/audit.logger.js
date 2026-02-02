// src/audit/audit.logger.js

const AuditLog = require('./audit.model');

/**
 * MOCK audit store (DB later)
 */
const audits = [];

const logAudit = ({
  tenantId,
  userId,
  action,
  entity,
  entityId,
  metadata,
}) => {
  const audit = new AuditLog({
    id: audits.length + 1,
    tenantId,
    userId,
    action,
    entity,
    entityId,
    metadata,
  });

  audits.push(audit);
  return audit;
};

const getAuditsByTenant = (tenantId) => {
  return audits.filter((a) => a.tenantId === tenantId);
};

module.exports = {
  logAudit,
  getAuditsByTenant,
};
