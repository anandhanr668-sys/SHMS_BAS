// src/modules/master-data/master.routes.js

const express = require('express');
const router = express.Router();

const masterController = require('./master.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.get(
  '/:type',
  authorize('master.read'),
  masterController.getMasterByType
);

router.post(
  '/',
  authorize('master.create'),
  masterController.createMaster
);

router.patch(
  '/:id/deactivate',
  authorize('master.update'),
  masterController.deactivateMaster
);

module.exports = router;
