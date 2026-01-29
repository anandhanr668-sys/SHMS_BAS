// src/modules/staff/staff.controller.js

import * as staffService from "./staff.service.js";
import { successResponse } from "../../utils/response.js";

export const createStaff = async (req, res, next) => {
  try {
    const staff = await staffService.createStaff(req.body);
    successResponse(res, staff, "Staff created successfully");
  } catch (err) {
    next(err);
  }
};

export const getStaffList = async (req, res, next) => {
  try {
    const staff = await staffService.getStaffList();
    successResponse(res, staff, "Staff list fetched");
  } catch (err) {
    next(err);
  }
};

export const getStaff = async (req, res, next) => {
  try {
    const staff = await staffService.getStaff(req.params.id);
    successResponse(res, staff, "Staff fetched");
  } catch (err) {
    next(err);
  }
};

export const updateStaff = async (req, res, next) => {
  try {
    const staff = await staffService.updateStaff(
      req.params.id,
      req.body
    );
    successResponse(res, staff, "Staff updated");
  } catch (err) {
    next(err);
  }
};
