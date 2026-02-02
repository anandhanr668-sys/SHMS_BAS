// src/audit/audit.routes.js

const express = require('express');
const router = express.Router();

const authenticate = require('../modules/auth/auth.middleware');
const authorize = require('../core/rbac/role.middleware');
const { getAuditsByTenant } = require('./audit.logger');

/**
 * GET /audit
 */
router.get(
  '/',
  authenticate,
  authorize('audit.read'),
  (req, res) => {
    const tenantId = req.tenant.tenantId;
    const data = getAuditsByTenant(tenantId);

    res.status(200).json({
      success: true,
      data,
    });
  }
);

module.exports = router;
