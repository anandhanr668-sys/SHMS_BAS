// src/modules/auth/auth.controller.js

import * as authService from "./auth.service.js";
import { successResponse } from "../../utils/response.js";

export const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    successResponse(res, user, "User registered successfully");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    successResponse(res, data, "Login successful");
  } catch (err) {
    next(err);
  }
};

export const me = async (req, res, next) => {
  try {
    successResponse(res, req.user, "User profile fetched");
  } catch (err) {
    next(err);
  }
};
