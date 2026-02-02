// src/analytics/analytics.controller.js

const analyticsService = require('./analytics.service');

/**
 * GET /analytics/dashboard
 */
const getDashboardMetrics = async (req, res, next) => {
  try {
    const tenantId = req.tenant.tenantId;

    const metrics = await analyticsService.getDashboardMetrics(
      tenantId
    );

    res.status(200).json({
      success: true,
      data: metrics,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardMetrics,
};
