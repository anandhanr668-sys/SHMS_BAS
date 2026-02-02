// src/core/tenant/tenant.resolver.js

const { getTenantConfig } = require('../../config/tenant.config');
const Tenant = require('./tenant.model');

/**
 * Resolve tenant from request
 * Priority:
 * 1. x-tenant-id header
 * 2. subdomain (tenant.domain.com)
 * 3. default tenant
 */
const resolveTenant = (req) => {
  let tenantId = null;

  // 1️⃣ Header-based resolution
  if (req.headers['x-tenant-id']) {
    tenantId = req.headers['x-tenant-id'];
  }

  // 2️⃣ Subdomain-based resolution
  else if (req.hostname && req.hostname.includes('.')) {
    tenantId = req.hostname.split('.')[0];
  }

  // 3️⃣ Default tenant fallback
  const tenantConfig = getTenantConfig(tenantId);

  return new Tenant(tenantConfig);
};

module.exports = resolveTenant;
