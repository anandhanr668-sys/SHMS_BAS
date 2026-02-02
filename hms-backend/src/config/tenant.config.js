// src/config/tenant.config.js

/**
 * Tenant-based hospital configuration
 * Each hospital can have custom workflows, modules, and branding
 */

const tenants = {
  default: {
    tenantId: 'default',
    name: 'Default Hospital',
    timezone: 'Asia/Kolkata',
    modules: {
      opd: true,
      ipd: true,
      pharmacy: true,
      lab: true,
      billing: true,
    },
  },

  cityCare: {
    tenantId: 'cityCare',
    name: 'City Care Hospital',
    timezone: 'Asia/Kolkata',
    modules: {
      opd: true,
      ipd: true,
      pharmacy: false,
      lab: true,
      billing: true,
    },
  },
};

/**
 * Resolve tenant from request
 */
const getTenantConfig = (tenantId = 'default') => {
  return tenants[tenantId] || tenants.default;
};

module.exports = {
  tenants,
  getTenantConfig,
};
