// src/modules/wards-beds/ward.routes.js

import { Router } from "express";
import * as wardController from "./ward.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* Ward management */
router.post(
  "/wards",
  authorize("ADMIN"),
  wardController.createWard
);

router.get(
  "/wards",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  wardController.getWards
);

/* Bed allocation */
router.post(
  "/beds/assign",
  authorize("ADMIN", "DOCTOR", "NURSE"),
  wardController.assignBed
);

router.post(
  "/beds/release",
  authorize("ADMIN", "DOCTOR", "NURSE"),
  wardController.releaseBed
);

export default router;
