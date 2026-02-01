// src/modules/visits/visit.controller.js

import * as visitService from "./visit.service.js";
import { successResponse } from "../../utils/response.js";

export const createVisit = async (req, res, next) => {
  try {
    const visit = await visitService.createVisit(req.body);
    successResponse(res, visit, "Visit created successfully");
  } catch (err) {
    next(err);
  }
};

export const getVisits = async (req, res, next) => {
  try {
    const visits = await visitService.getVisits();
    successResponse(res, visits, "Visits fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getVisit = async (req, res, next) => {
  try {
    const visit = await visitService.getVisit(req.params.id);
    successResponse(res, visit, "Visit fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const updateVisitStatus = async (req, res, next) => {
  try {
    const visit = await visitService.updateVisitStatus(
      req.params.id,
      req.body.status
    );
    successResponse(res, visit, "Visit status updated");
  } catch (err) {
    next(err);
  }
};
