// src/modules/analytics/analytics.controller.js

import * as analyticsService from "./analytics.service.js";
import { successResponse } from "../../utils/response.js";

export const getDashboardMetrics = async (req, res, next) => {
  try {
    const data = await analyticsService.getDashboardMetrics();
    successResponse(res, data, "Dashboard metrics fetched");
  } catch (err) {
    next(err);
  }
};

export const getVisitStats = async (req, res, next) => {
  try {
    const data = await analyticsService.getVisitStats();
    successResponse(res, data, "Visit stats fetched");
  } catch (err) {
    next(err);
  }
};

export const getTriageStats = async (req, res, next) => {
  try {
    const data = await analyticsService.getTriageStats();
    successResponse(res, data, "Triage stats fetched");
  } catch (err) {
    next(err);
  }
};
