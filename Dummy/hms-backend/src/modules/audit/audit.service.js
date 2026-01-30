// src/modules/audit/audit.service.js

import * as auditModel from "./audit.model.js";

export const logAudit = async ({
  user_id,
  action,
  entity,
  entity_id,
  old_value = null,
  new_value = null,
}) => {
  return auditModel.createAuditLog({
    user_id,
    action,
    entity,
    entity_id,
    old_value,
    new_value,
  });
};

export const getAuditLogs = async () => {
  return auditModel.getAuditLogs();
};

export const getAuditByEntity = async (entity, entityId) => {
  return auditModel.getAuditLogsByEntity(entity, entityId);
};
