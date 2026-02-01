// src/modules/audit/audit.controller.js

import * as auditService from "./audit.service.js";
import { successResponse } from "../../utils/response.js";

export const getAuditLogs = async (req, res, next) => {
  try {
    const logs = await auditService.getAuditLogs();
    successResponse(res, logs, "Audit logs fetched");
  } catch (err) {
    next(err);
  }
};

export const getAuditByEntity = async (req, res, next) => {
  try {
    const logs = await auditService.getAuditByEntity(
      req.params.entity,
      req.params.entityId
    );
    successResponse(res, logs, "Entity audit logs fetched");
  } catch (err) {
    next(err);
  }
};
