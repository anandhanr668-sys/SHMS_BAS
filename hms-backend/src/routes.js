// src/routes.js

import { Router } from "express";

/* ===== MODULE ROUTES ===== */
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/users/user.routes.js";
import patientRoutes from "./modules/patients/patient.routes.js";
import visitRoutes from "./modules/visits/visit.routes.js";
import wardRoutes from "./modules/wards-beds/ward.routes.js";
import staffRoutes from "./modules/staff/staff.routes.js";
import masterRoutes from "./modules/master-data/master.routes.js";
import auditRoutes from "./modules/audit/audit.routes.js";
import analyticsRoutes from "./modules/analytics/analytics.routes.js";

/* LCNC */
import formRoutes from "./modules/lcnc/form-engine/form.routes.js";
import ruleRoutes from "./modules/lcnc/rules-engine/rules.routes.js";

const router = Router();

/* ===== REGISTER ROUTES ===== */
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/patients", patientRoutes);
router.use("/visits", visitRoutes);
router.use("/wards", wardRoutes);
router.use("/staff", staffRoutes);
router.use("/master-data", masterRoutes);
router.use("/audit", auditRoutes);
router.use("/analytics", analyticsRoutes);

/* LCNC */
router.use("/lcnc/forms", formRoutes);
router.use("/lcnc/rules", ruleRoutes);

export default router;
