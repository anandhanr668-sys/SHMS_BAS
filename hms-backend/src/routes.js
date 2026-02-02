// src/routes.js

const express = require('express');
const router = express.Router();

/* -------------------- CORE MODULE ROUTES -------------------- */
const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/users/user.routes');
const patientRoutes = require('./modules/patients/patient.routes');
const visitRoutes = require('./modules/visits/visit.routes');
const staffRoutes = require('./modules/staff/staff.routes');
const wardRoutes = require('./modules/wards-beds/ward.routes');
const insuranceRoutes = require('./modules/insurance/insurance.routes');
const billingRoutes = require('./modules/billing/billing.routes');
const pharmacyRoutes = require('./modules/pharmacy/pharmacy.routes');
const masterRoutes = require('./modules/master-data/master.routes');

/* -------------------- LCNC ENGINE ROUTES -------------------- */
const formRoutes = require('./lcnc/form-engine/form.routes');
const ruleRoutes = require('./lcnc/rules-engine/rule.routes');
const reportRoutes = require('./lcnc/report-engine/report.routes');
const workflowRoutes = require('./lcnc/workflow-engine/workflow.routes');

/* -------------------- SYSTEM ROUTES -------------------- */
const auditRoutes = require('./audit/audit.routes');
const analyticsRoutes = require('./analytics/analytics.routes');

/* -------------------- AUTH -------------------- */
router.use('/auth', authRoutes);

/* -------------------- BUSINESS DOMAINS -------------------- */
router.use('/users', userRoutes);
router.use('/patients', patientRoutes);
router.use('/visits', visitRoutes);
router.use('/staff', staffRoutes);
router.use('/wards', wardRoutes);
router.use('/insurance', insuranceRoutes);
router.use('/billing', billingRoutes);
router.use('/pharmacy', pharmacyRoutes);
router.use('/master-data', masterRoutes);

/* -------------------- LCNC PLATFORM -------------------- */
router.use('/lcnc/forms', formRoutes);
router.use('/lcnc/rules', ruleRoutes);
router.use('/lcnc/reports', reportRoutes);
router.use('/lcnc/workflows', workflowRoutes);

/* -------------------- SYSTEM & ANALYTICS -------------------- */
router.use('/audit', auditRoutes);
router.use('/analytics', analyticsRoutes);

/* -------------------- HEALTH CHECK -------------------- */
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HMS + LCNC Backend is healthy',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
