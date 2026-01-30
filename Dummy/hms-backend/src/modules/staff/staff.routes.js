// src/modules/staff/staff.routes.js

import { Router } from "express";
import * as staffController from "./staff.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* ADMIN manages staff */
router.post(
  "/",
  authorize("ADMIN"),
  staffController.createStaff
);

router.get(
  "/",
  authorize("ADMIN", "DOCTOR", "NURSE"),
  staffController.getStaffList
);

router.get(
  "/:id",
  authorize("ADMIN", "DOCTOR", "NURSE"),
  staffController.getStaff
);

router.put(
  "/:id",
  authorize("ADMIN"),
  staffController.updateStaff
);

export default router;
