// src/core/tenant/tenant.model.js

class Tenant {
  constructor({
    tenantId,
    name,
    domain,
    timezone = 'Asia/Kolkata',
    modules = {},
    isActive = true,
  }) {
    this.tenantId = tenantId;
    this.name = name;
    this.domain = domain;
    this.timezone = timezone;
    this.modules = modules;
    this.isActive = isActive;
  }
}

module.exports = Tenant;
