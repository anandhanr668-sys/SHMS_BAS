// src/modules/insurance/insurance.routes.js

const express = require('express');
const router = express.Router();

const insuranceController = require('./insurance.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.get(
  '/patient/:patientId',
  authorize('insurance.read'),
  insuranceController.getPatientInsurance
);

router.post(
  '/',
  authorize('insurance.create'),
  insuranceController.createInsurance
);

router.patch(
  '/:id/claim',
  authorize('insurance.update'),
  insuranceController.updateClaimStatus
);

module.exports = router;
