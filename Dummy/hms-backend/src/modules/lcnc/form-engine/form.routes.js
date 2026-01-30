// src/modules/lcnc/form-engine/form.routes.js

import { Router } from "express";
import * as formController from "./form.controller.js";
import { authenticate, authorize } from "../../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* ADMIN / STAFF can manage forms */
router.post("/", authorize("ADMIN", "STAFF"), formController.createForm);
router.get("/", authorize("ADMIN", "STAFF"), formController.getForms);
router.get("/:id", authorize("ADMIN", "STAFF"), formController.getForm);
router.delete("/:id", authorize("ADMIN"), formController.deleteForm);

export default router;
