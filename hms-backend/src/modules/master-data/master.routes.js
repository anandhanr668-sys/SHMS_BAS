// src/modules/master-data/master.routes.js

import { Router } from "express";
import * as masterController from "./master.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* Only ADMIN controls configuration */
router.post(
  "/",
  authorize("ADMIN"),
  masterController.createMasterData
);

router.get(
  "/",
  authorize("ADMIN", "DOCTOR", "NURSE", "STAFF"),
  masterController.getMasterData
);

router.delete(
  "/:id",
  authorize("ADMIN"),
  masterController.deleteMasterData
);

export default router;
