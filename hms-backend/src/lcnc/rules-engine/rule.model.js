// src/lcnc/rules-engine/rule.model.js

class Rule {
  constructor({
    id,
    tenantId,
    name,
    entity,           // visit | billing | form | insurance
    condition,        // JSON condition
    actions = [],     // list of actions
    isActive = true,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
    this.entity = entity;
    this.condition = condition;
    this.actions = actions;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}

module.exports = Rule;
