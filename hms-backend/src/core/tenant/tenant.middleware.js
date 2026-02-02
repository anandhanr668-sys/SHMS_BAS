// src/core/tenant/tenant.middleware.js

const resolveTenant = require('./tenant.resolver');

/**
 * Tenant middleware
 * Injects tenant context into req object
 */
const tenantMiddleware = (req, res, next) => {
  try {
    const tenant = resolveTenant(req);

    if (!tenant || !tenant.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Tenant not active or not found',
      });
    }

    // Attach tenant to request
    req.tenant = tenant;

    // Optional: expose tenant ID for logging
    req.headers['x-tenant-id'] = tenant.tenantId;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tenantMiddleware;
