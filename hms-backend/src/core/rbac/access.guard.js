// src/core/rbac/access.guard.js

/**
 * Check if role has required permission
 */
const hasPermission = (role, requiredPermission) => {
  if (!role || !role.permissions) return false;

  return role.permissions.includes(requiredPermission);
};

module.exports = {
  hasPermission,
};
