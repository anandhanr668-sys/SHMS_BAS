// src/lcnc/rules-engine/rule.executor.js

/**
 * Evaluate simple condition rules
 * Supported operators: ==, !=, >, <, >=, <=
 */
const evaluateCondition = (condition, data) => {
  const { field, operator, value } = condition;
  const actualValue = data[field];

  switch (operator) {
    case '==': return actualValue == value;
    case '!=': return actualValue != value;
    case '>': return actualValue > value;
    case '<': return actualValue < value;
    case '>=': return actualValue >= value;
    case '<=': return actualValue <= value;
    default: return false;
  }
};

/**
 * Execute actions (mock implementation)
 */
const executeActions = (actions, context) => {
  actions.forEach((action) => {
    switch (action.type) {
      case 'SET_FIELD':
        context[action.field] = action.value;
        break;

      case 'ALERT':
        console.log('🔔 ALERT:', action.message);
        break;

      case 'BLOCK':
        throw new Error(action.message || 'Operation blocked by rule');

      default:
        console.log('Unknown action:', action);
    }
  });

  return context;
};

/**
 * Execute rule
 */
const executeRule = (rule, payload) => {
  if (!rule.isActive) return payload;

  const matched = evaluateCondition(rule.condition, payload);

  if (matched) {
    return executeActions(rule.actions, payload);
  }

  return payload;
};

module.exports = {
  executeRule,
};
