// src/modules/patients/patient.routes.js

import { Router } from "express";
import * as patientController from "./patient.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* STAFF + MEDICAL ROLES */
router.post(
  "/",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  patientController.createPatient
);

router.get(
  "/",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  patientController.getPatients
);

router.get(
  "/:id",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  patientController.getPatient
);

router.put(
  "/:id",
  authorize("ADMIN", "DOCTOR", "NURSE"),
  patientController.updatePatient
);

export default router;
