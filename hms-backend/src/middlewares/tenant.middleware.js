// src/middlewares/tenant.middleware.js

const resolveTenant = require('../core/tenant/tenant.resolver');

const tenantMiddleware = (req, res, next) => {
  try {
    const tenant = resolveTenant(req);

    if (!tenant || !tenant.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or inactive tenant',
      });
    }

    req.tenant = tenant;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tenantMiddleware;
