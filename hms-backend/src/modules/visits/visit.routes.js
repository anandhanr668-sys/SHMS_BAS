// src/modules/visits/visit.routes.js

const express = require('express');
const router = express.Router();

const visitController = require('./visit.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

/**
 * Protected visit routes
 */
router.use(authenticate);

router.get(
  '/',
  authorize('visit.read'),
  visitController.getAllVisits
);

router.get(
  '/patient/:patientId',
  authorize('visit.read'),
  visitController.getPatientVisits
);

router.post(
  '/',
  authorize('visit.create'),
  visitController.createVisit
);

router.put(
  '/:id',
  authorize('visit.update'),
  visitController.updateVisit
);

module.exports = router;
