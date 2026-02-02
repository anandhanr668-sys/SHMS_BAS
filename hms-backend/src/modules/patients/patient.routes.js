// src/modules/patients/patient.routes.js

const express = require('express');
const router = express.Router();

const patientController = require('./patient.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

/**
 * Protected patient routes
 */
router.use(authenticate);

router.get(
  '/',
  authorize('patient.read'),
  patientController.getAllPatients
);

router.post(
  '/',
  authorize('patient.create'),
  patientController.createPatient
);

module.exports = router;
