// src/lcnc/form-engine/form.model.js

class Form {
  constructor({
    id,
    tenantId,
    name,
    entity,           // patient | visit | billing | custom
    fields = [],      // dynamic fields
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.entity = entity;
    this.fields = fields;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Form;
