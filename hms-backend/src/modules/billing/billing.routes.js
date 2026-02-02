// src/modules/billing/billing.routes.js

const express = require('express');
const router = express.Router();

const billingController = require('./billing.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.get(
  '/patient/:patientId',
  authorize('billing.read'),
  billingController.getPatientBills
);

router.post(
  '/',
  authorize('billing.create'),
  billingController.createBill
);

router.post(
  '/:id/pay',
  authorize('billing.pay'),
  billingController.makePayment
);

module.exports = router;
