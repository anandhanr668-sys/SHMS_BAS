// src/modules/lcnc/form-engine/form.controller.js

import * as formService from "./form.service.js";
import { successResponse } from "../../../utils/response.js";

export const createForm = async (req, res, next) => {
  try {
    const form = await formService.createForm(req.body, req.user.id);
    successResponse(res, form, "Form created successfully");
  } catch (err) {
    next(err);
  }
};

export const getForms = async (req, res, next) => {
  try {
    const forms = await formService.getForms();
    successResponse(res, forms, "Forms fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getForm = async (req, res, next) => {
  try {
    const form = await formService.getForm(req.params.id);
    successResponse(res, form, "Form fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const deleteForm = async (req, res, next) => {
  try {
    await formService.deleteForm(req.params.id);
    successResponse(res, null, "Form deleted successfully");
  } catch (err) {
    next(err);
  }
};
