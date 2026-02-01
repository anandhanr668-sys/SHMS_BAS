// src/modules/visits/visit.service.js

import * as visitModel from "./visit.model.js";
import { runRules } from "../lcnc/rules-engine/rules.service.js";

export const createVisit = async (payload) => {
  const visit = await visitModel.createVisit({
    ...payload,
    status: "ACTIVE",
  });

  // 🔥 Trigger LCNC rules
  await runRules("VISIT_CREATED", visit);

  return visit;
};

export const getVisits = async () => {
  return visitModel.getAllVisits();
};

export const getVisit = async (id) => {
  const visit = await visitModel.getVisitById(id);
  if (!visit) {
    throw new Error("Visit not found");
  }
  return visit;
};

export const updateVisitStatus = async (id, status) => {
  const visit = await visitModel.updateVisitStatus(id, status);
  if (!visit) {
    throw new Error("Visit not found");
  }

  // 🔥 Trigger update rules
  await runRules("VISIT_UPDATED", visit);

  return visit;
};
