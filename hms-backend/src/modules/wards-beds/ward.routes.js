// src/modules/wards-beds/ward.routes.js

const express = require('express');
const router = express.Router();

const wardController = require('./ward.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.get(
  '/',
  authorize('ward.read'),
  wardController.getAllWards
);

router.post(
  '/',
  authorize('ward.create'),
  wardController.createWard
);

router.post(
  '/:wardId/beds/:bedId/allocate',
  authorize('bed.allocate'),
  wardController.allocateBed
);

router.post(
  '/:wardId/beds/:bedId/release',
  authorize('bed.release'),
  wardController.releaseBed
);

module.exports = router;
