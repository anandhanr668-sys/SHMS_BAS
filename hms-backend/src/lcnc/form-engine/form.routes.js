// src/lcnc/form-engine/form.routes.js

const express = require('express');
const router = express.Router();

const formController = require('./form.controller');
const authenticate = require('../../modules/auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

router.use(authenticate);

router.post(
  '/',
  authorize('lcnc.form.create'),
  formController.createForm
);

router.get(
  '/:entity',
  authorize('lcnc.form.read'),
  formController.getFormsByEntity
);

router.post(
  '/:id/submit',
  authorize('lcnc.form.submit'),
  formController.submitForm
);

module.exports = router;
