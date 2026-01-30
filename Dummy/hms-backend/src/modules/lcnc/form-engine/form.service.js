// src/modules/lcnc/form-engine/form.service.js

import * as formModel from "./form.model.js";

export const createForm = async (payload, userId) => {
  if (!payload.schema || typeof payload.schema !== "object") {
    throw new Error("Invalid form schema");
  }

  return formModel.createForm({
    name: payload.name,
    schema: payload.schema,
    createdBy: userId,
  });
};

export const getForms = async () => {
  return formModel.getAllForms();
};

export const getForm = async (id) => {
  const form = await formModel.getFormById(id);
  if (!form) {
    throw new Error("Form not found");
  }
  return form;
};

export const deleteForm = async (id) => {
  await formModel.deleteForm(id);
};
