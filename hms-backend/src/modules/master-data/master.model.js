// src/modules/master-data/master.model.js

class MasterData {
  constructor({
    id,
    tenantId,
    type,              // e.g. DEPARTMENT, BLOOD_GROUP, PAYMENT_MODE
    key,               // internal value
    label,             // display value
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.type = type;
    this.key = key;
    this.label = label;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = MasterData;
