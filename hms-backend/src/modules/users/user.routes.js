// src/modules/users/user.routes.js

import { Router } from "express";
import * as userController from "./user.controller.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";

const router = Router();

router.use(authenticate);

/* ADMIN only */
router.post("/", authorize("ADMIN"), userController.createUser);
router.get("/", authorize("ADMIN"), userController.getUsers);
router.get("/:id", authorize("ADMIN"), userController.getUser);
router.put("/:id", authorize("ADMIN"), userController.updateUser);
router.delete("/:id", authorize("ADMIN"), userController.deleteUser);

export default router;
