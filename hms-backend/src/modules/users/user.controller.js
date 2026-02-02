// src/modules/users/user.controller.js

const userService = require('./user.service');

/**
 * GET /users
 */
const getAllUsers = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const data = await userService.getUsers(tenantId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /users
 */
const createUser = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const user = await userService.createUser(tenantId, req.body);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
