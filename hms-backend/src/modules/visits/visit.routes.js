// src/modules/visits/visit.routes.js

import { Router } from "express";
import * as visitController from "./visit.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* Medical workflow roles */
router.post(
  "/",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  visitController.createVisit
);

router.get(
  "/",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  visitController.getVisits
);

router.get(
  "/:id",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  visitController.getVisit
);

router.put(
  "/:id/status",
  authorize("ADMIN", "DOCTOR", "NURSE"),
  visitController.updateVisitStatus
);

export default router;
