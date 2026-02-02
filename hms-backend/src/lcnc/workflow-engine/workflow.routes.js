// src/lcnc/workflow-engine/workflow.routes.js

const express = require('express');
const router = express.Router();

const authenticate = require('../../modules/auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');
const Workflow = require('./workflow.model');
const { executeTransition } = require('./workflow.executor');

/**
 * MOCK store
 */
const workflows = [];

/**
 * Create workflow
 */
router.post(
  '/',
  authenticate,
  authorize('lcnc.workflow.create'),
  (req, res) => {
    const workflow = new Workflow({
      id: workflows.length + 1,
      tenantId: req.tenant.tenantId,
      ...req.body,
    });

    workflows.push(workflow);

    res.status(201).json({
      success: true,
      message: 'Workflow created successfully',
      data: workflow,
    });
  }
);

/**
 * List workflows by entity
 */
router.get(
  '/:entity',
  authenticate,
  authorize('lcnc.workflow.read'),
  (req, res) => {
    const tenantId = req.tenant.tenantId;
    const { entity } = req.params;

    const data = workflows.filter(
      (w) =>
        w.tenantId === tenantId &&
        w.entity === entity &&
        w.isActive
    );

    res.status(200).json({ success: true, data });
  }
);

/**
 * Execute workflow transition
 */
router.post(
  '/:id/execute',
  authenticate,
  authorize('lcnc.workflow.execute'),
  (req, res) => {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;
    const { currentState, action, context } = req.body;

    const workflow = workflows.find(
      (w) => w.id === Number(id) && w.tenantId === tenantId
    );

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: 'Workflow not found',
      });
    }

    const nextState = executeTransition({
      workflow,
      currentState,
      action,
      context,
    });

    res.status(200).json({
      success: true,
      data: {
        previousState: currentState,
        nextState,
        context,
      },
    });
  }
);

module.exports = router;
