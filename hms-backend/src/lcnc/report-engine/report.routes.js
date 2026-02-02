// src/lcnc/report-engine/report.routes.js

const express = require('express');
const router = express.Router();

const authenticate = require('../../modules/auth/auth.middleware');
const authorize = require('../../core/rbac/role.middleware');
const Report = require('./report.model');
const { generateReport } = require('./report.generator');

/**
 * MOCK stores (replace with DB)
 */
const reports = [];
const mockDataSources = {
  patient: [],
  visit: [],
  billing: [],
};

/**
 * Create report definition
 */
router.post(
  '/',
  authenticate,
  authorize('lcnc.report.create'),
  (req, res) => {
    const report = new Report({
      id: reports.length + 1,
      tenantId: req.tenant.tenantId,
      ...req.body,
    });

    reports.push(report);

    res.status(201).json({
      success: true,
      message: 'Report created successfully',
      data: report,
    });
  }
);

/**
 * List reports by entity
 */
router.get(
  '/:entity',
  authenticate,
  authorize('lcnc.report.read'),
  (req, res) => {
    const tenantId = req.tenant.tenantId;
    const { entity } = req.params;

    const data = reports.filter(
      (r) =>
        r.tenantId === tenantId &&
        r.entity === entity &&
        r.isActive
    );

    res.status(200).json({ success: true, data });
  }
);

/**
 * Generate report
 */
router.post(
  '/:id/generate',
  authenticate,
  authorize('lcnc.report.generate'),
  (req, res) => {
    const tenantId = req.tenant.tenantId;
    const { id } = req.params;

    const report = reports.find(
      (r) => r.id === Number(id) && r.tenantId === tenantId
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found',
      });
    }

    const sourceData = mockDataSources[report.entity] || [];

    const result = generateReport(sourceData, report);

    res.status(200).json({
      success: true,
      data: result,
    });
  }
);

module.exports = router;
