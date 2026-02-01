// src/modules/audit/audit.routes.js

import { Router } from "express";
import * as auditController from "./audit.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* Only ADMIN can see full audit */
router.get(
  "/",
  authorize("ADMIN"),
  auditController.getAuditLogs
);

/* Entity-level audit */
router.get(
  "/:entity/:entityId",
  authorize("ADMIN"),
  auditController.getAuditByEntity
);

export default router;
