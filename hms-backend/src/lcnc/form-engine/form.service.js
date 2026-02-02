// src/lcnc/form-engine/form.service.js

const Form = require('./form.model');
const { validateFormData } = require('./form.validator');

/**
 * MOCK in-memory stores
 */
const forms = [];
const submissions = [];

/**
 * Create form definition
 */
const createForm = async (tenantId, data) => {
  const form = new Form({
    id: forms.length + 1,
    tenantId,
    ...data,
  });

  forms.push(form);
  return form;
};

/**
 * Get forms by entity
 */
const getFormsByEntity = async (tenantId, entity) => {
  return forms.filter(
    (f) => f.tenantId === tenantId && f.entity === entity && f.isActive
  );
};

/**
 * Submit form data
 */
const submitForm = async (tenantId, formId, payload) => {
  const form = forms.find(
    (f) => f.id === Number(formId) && f.tenantId === tenantId
  );

  if (!form) throw new Error('Form not found');

  const errors = validateFormData(form.fields, payload);
  if (errors.length) {
    throw new Error(errors.join(', '));
  }

  const submission = {
    id: submissions.length + 1,
    tenantId,
    formId,
    data: payload,
    submittedAt: new Date(),
  };

  submissions.push(submission);
  return submission;
};

module.exports = {
  createForm,
  getFormsByEntity,
  submitForm,
};
