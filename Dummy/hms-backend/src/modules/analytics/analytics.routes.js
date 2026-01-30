// src/modules/analytics/analytics.routes.js

import { Router } from "express";
import * as analyticsController from "./analytics.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* Dashboard access */
router.get(
  "/dashboard",
  authorize("ADMIN", "DOCTOR"),
  analyticsController.getDashboardMetrics
);

router.get(
  "/visits",
  authorize("ADMIN", "DOCTOR"),
  analyticsController.getVisitStats
);

router.get(
  "/triage",
  authorize("ADMIN", "DOCTOR"),
  analyticsController.getTriageStats
);

export default router;
