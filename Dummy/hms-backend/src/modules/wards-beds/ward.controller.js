// src/modules/wards-beds/ward.controller.js

import * as wardService from "./ward.service.js";
import { successResponse } from "../../utils/response.js";

/* ========= WARDS ========= */

export const createWard = async (req, res, next) => {
  try {
    const ward = await wardService.createWard(req.body);
    successResponse(res, ward, "Ward created successfully");
  } catch (err) {
    next(err);
  }
};

export const getWards = async (req, res, next) => {
  try {
    const wards = await wardService.getWards();
    successResponse(res, wards, "Wards fetched successfully");
  } catch (err) {
    next(err);
  }
};

/* ========= BEDS ========= */

export const assignBed = async (req, res, next) => {
  try {
    const bed = await wardService.assignBedToVisit(
      req.body.visit_id,
      req.body.ward_type
    );
    successResponse(res, bed, "Bed assigned successfully");
  } catch (err) {
    next(err);
  }
};

export const releaseBed = async (req, res, next) => {
  try {
    await wardService.releaseBedFromVisit(req.body.visit_id);
    successResponse(res, null, "Bed released successfully");
  } catch (err) {
    next(err);
  }
};
