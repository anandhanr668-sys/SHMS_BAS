// src/analytics/analytics.routes.js

const express = require('express');
const router = express.Router();

const analyticsController = require('./analytics.controller');
const authenticate = require('../modules/auth/auth.middleware');
const authorize = require('../core/rbac/role.middleware');

router.get(
  '/dashboard',
  authenticate,
  authorize('analytics.read'),
  analyticsController.getDashboardMetrics
);

module.exports = router;
