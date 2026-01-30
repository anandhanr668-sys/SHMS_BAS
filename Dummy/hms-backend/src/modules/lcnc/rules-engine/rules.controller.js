// src/modules/lcnc/rules-engine/rules.controller.js

import * as ruleService from "./rules.service.js";
import { successResponse } from "../../../utils/response.js";

export const createRule = async (req, res, next) => {
  try {
    const rule = await ruleService.createRule(req.body);
    successResponse(res, rule, "Rule created successfully");
  } catch (err) {
    next(err);
  }
};

export const getRules = async (req, res, next) => {
  try {
    const rules = await ruleService.getRules();
    successResponse(res, rules, "Rules fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const deleteRule = async (req, res, next) => {
  try {
    await ruleService.deleteRule(req.params.id);
    successResponse(res, null, "Rule deleted");
  } catch (err) {
    next(err);
  }
};
