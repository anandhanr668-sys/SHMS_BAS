// src/modules/users/user.routes.js

const express = require('express');
const router = express.Router();

const userController = require('./user.controller');
const authenticate = require('../auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');

/**
 * Protected user routes
 */
router.use(authenticate);

router.get(
  '/',
  authorize('user.read'),
  userController.getAllUsers
);

router.post(
  '/',
  authorize('user.create'),
  userController.createUser
);

module.exports = router;
