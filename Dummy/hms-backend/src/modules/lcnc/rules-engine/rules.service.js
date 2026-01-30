// src/modules/lcnc/rules-engine/rules.service.js

import * as ruleModel from "./rules.model.js";

/* ===============================
   Simple Rule Evaluator
=============================== */
const evaluateCondition = (condition, payload) => {
  const { field, operator, value } = condition;
  const actual = payload[field];

  switch (operator) {
    case "==":
      return actual == value;
    case "!=":
      return actual != value;
    case ">":
      return actual > value;
    case "<":
      return actual < value;
    case "includes":
      return Array.isArray(actual) && actual.includes(value);
    default:
      return false;
  }
};

const evaluateConditions = (conditions, payload) =>
  conditions.every((c) => evaluateCondition(c, payload));

/* ===============================
   Execute Actions
=============================== */
const executeAction = async (action, payload) => {
  switch (action.type) {
    case "NOTIFY":
      console.log("🔔 Notify:", action.message);
      break;

    case "ASSIGN_BED":
      console.log("🛏️ Assign bed logic here");
      break;

    case "ESCALATE":
      console.log("🚨 Escalation triggered");
      break;

    default:
      console.log("⚠️ Unknown action");
  }
};

/* ===============================
   Rule Engine Runner
=============================== */
export const runRules = async (event, payload) => {
  const rules = await ruleModel.getRulesByEvent(event);

  for (const rule of rules) {
    const matched = evaluateConditions(rule.conditions, payload);

    if (matched) {
      for (const action of rule.actions) {
        await executeAction(action, payload);
      }
    }
  }
};

/* ===============================
   CRUD Services
=============================== */
export const createRule = async (payload) => {
  if (!payload.conditions || !payload.actions) {
    throw new Error("Invalid rule definition");
  }
  return ruleModel.createRule(payload);
};

export const getRules = async () => {
  return ruleModel.getAllRules();
};

export const deleteRule = async (id) => {
  await ruleModel.deleteRule(id);
};
