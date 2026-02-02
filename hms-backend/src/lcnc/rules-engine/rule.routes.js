// src/lcnc/rules-engine/rule.routes.js

const express = require('express');
const router = express.Router();

const authenticate = require('../../modules/auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');
const Rule = require('./rule.model');
const { simulateRule } = require('./rule.simulator');

/**
 * MOCK rule store
 */
const rules = [];

/**
 * Create rule
 */
router.post(
  '/',
  authenticate,
  authorize('lcnc.rule.create'),
  (req, res) => {
    const rule = new Rule({
      id: rules.length + 1,
      tenantId: req.tenant.tenantId,
      ...req.body,
    });

    rules.push(rule);

    res.status(201).json({
      success: true,
      message: 'Rule created successfully',
      data: rule,
    });
  }
);

/**
 * List rules by entity
 */
router.get(
  '/:entity',
  authenticate,
  authorize('lcnc.rule.read'),
  (req, res) => {
    const tenantId = req.tenant.tenantId;
    const { entity } = req.params;

    const data = rules.filter(
      (r) =>
        r.tenantId === tenantId &&
        r.entity === entity &&
        r.isActive
    );

    res.status(200).json({ success: true, data });
  }
);

/**
 * Simulate rule
 */
router.post(
  '/simulate',
  authenticate,
  authorize('lcnc.rule.simulate'),
  (req, res) => {
    const { rule, sampleData } = req.body;

    const result = simulateRule(rule, sampleData);

    res.status(200).json({
      success: true,
      data: result,
    });
  }
);

module.exports = router;
