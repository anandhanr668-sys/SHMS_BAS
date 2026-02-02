// src/modules/staff/staff.routes.js

const express = require('express');
const router = express.Router();

const staffController = require('./staff.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.get(
  '/',
  authorize('staff.read'),
  staffController.getAllStaff
);

router.post(
  '/',
  authorize('staff.create'),
  staffController.createStaff
);

router.patch(
  '/:id/duty',
  authorize('staff.update'),
  staffController.updateDutyStatus
);

module.exports = router;
