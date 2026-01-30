// src/modules/master-data/master.controller.js

import * as masterService from "./master.service.js";
import { successResponse } from "../../utils/response.js";

export const createMasterData = async (req, res, next) => {
  try {
    const data = await masterService.createMasterData(req.body);
    successResponse(res, data, "Master data created");
  } catch (err) {
    next(err);
  }
};

export const getMasterData = async (req, res, next) => {
  try {
    const data = await masterService.getMasterData(req.query.category);
    successResponse(res, data, "Master data fetched");
  } catch (err) {
    next(err);
  }
};

export const deleteMasterData = async (req, res, next) => {
  try {
    await masterService.deleteMasterData(req.params.id);
    successResponse(res, null, "Master data deleted");
  } catch (err) {
    next(err);
  }
};
