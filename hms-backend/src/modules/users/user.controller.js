// src/modules/users/user.controller.js

import * as userService from "./user.service.js";
import { successResponse } from "../../utils/response.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, user, "User created successfully");
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, users, "Users fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    successResponse(res, user, "User fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    successResponse(res, user, "User updated successfully");
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    successResponse(res, null, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};
