// src/core/rbac/role.middleware.js

const { hasPermission } = require('./access.guard');

/**
 * RBAC middleware
 * Usage: authorize('patient.read')
 */
const authorize = (permissionKey) => {
  return (req, res, next) => {
    const user = req.user; // injected by auth middleware

    if (!user || !user.role) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    const allowed = hasPermission(user.role, permissionKey);

    if (!allowed) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    next();
  };
};

module.exports = authorize;
