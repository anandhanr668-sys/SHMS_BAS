// src/modules/staff/staff.service.js

import * as staffModel from "./staff.model.js";

export const createStaff = async (payload) => {
  return staffModel.createStaff(payload);
};

export const getStaffList = async () => {
  return staffModel.getAllStaff();
};

export const getStaff = async (id) => {
  const staff = await staffModel.getStaffById(id);
  if (!staff) {
    throw new Error("Staff not found");
  }
  return staff;
};

export const updateStaff = async (id, payload) => {
  const updated = await staffModel.updateStaff(id, payload);
  if (!updated) {
    throw new Error("Staff not found");
  }
  return updated;
};
