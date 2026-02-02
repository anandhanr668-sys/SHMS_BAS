// src/modules/pharmacy/pharmacy.routes.js

const express = require('express');
const router = express.Router();

const pharmacyController = require('./pharmacy.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.get(
  '/medicines',
  authorize('pharmacy.read'),
  pharmacyController.getMedicines
);

router.post(
  '/medicines',
  authorize('pharmacy.create'),
  pharmacyController.addMedicine
);

router.post(
  '/dispense',
  authorize('pharmacy.dispense'),
  pharmacyController.dispenseMedicine
);

module.exports = router;
