// src/modules/lcnc/rules-engine/rules.routes.js

import { Router } from "express";
import * as rulesController from "./rules.controller.js";
import { authenticate, authorize } from "../../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* ADMIN only (business logic control) */
router.post("/", authorize("ADMIN"), rulesController.createRule);
router.get("/", authorize("ADMIN"), rulesController.getRules);
router.delete("/:id", authorize("ADMIN"), rulesController.deleteRule);

export default router;
