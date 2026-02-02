// src/audit/audit.model.js

class AuditLog {
  constructor({
    id,
    tenantId,
    userId,
    action,          // CREATE, UPDATE, DELETE, LOGIN
    entity,          // patient, billing, visit
    entityId,
    metadata = {},
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.userId = userId;
    this.action = action;
    this.entity = entity;
    this.entityId = entityId;
    this.metadata = metadata;
    this.createdAt = createdAt;
  }
}

module.exports = AuditLog;
