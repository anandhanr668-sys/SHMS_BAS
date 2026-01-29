// src/modules/wards-beds/ward.service.js

import * as wardModel from "./ward.model.js";

/* ==========================
   Ward Management
========================== */

export const createWard = async (payload) => {
  return wardModel.createWard(payload);
};

export const getWards = async () => {
  return wardModel.getWards();
};

/* ==========================
   Bed Allocation Logic
========================== */

export const assignBedToVisit = async (visitId, wardType) => {
  const bed = await wardModel.getAvailableBed(wardType);

  if (!bed) {
    throw new Error(`No available bed in ${wardType}`);
  }

  return wardModel.occupyBed(bed.id, visitId);
};

export const releaseBedFromVisit = async (visitId) => {
  await wardModel.releaseBed(visitId);
};
