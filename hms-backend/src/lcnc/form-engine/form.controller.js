// src/lcnc/form-engine/form.controller.js

const formService = require('./form.service');

/**
 * POST /lcnc/forms
 */
const createForm = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const form = await formService.createForm(tenantId, req.body);

    res.status(201).json({
      success: true,
      message: 'Form created successfully',
      data: form,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /lcnc/forms/:entity
 */
const getFormsByEntity = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { entity } = req.params;

    const data = await formService.getFormsByEntity(tenantId, entity);
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /lcnc/forms/:id/submit
 */
const submitForm = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;

    const submission = await formService.submitForm(
      tenantId,
      id,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      data: submission,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createForm,
  getFormsByEntity,
  submitForm,
};
