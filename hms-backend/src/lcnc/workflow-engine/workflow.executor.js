// src/lcnc/workflow-engine/workflow.executor.js

/**
 * Execute workflow transition
 */
const executeTransition = ({
  workflow,
  currentState,
  action,
  context,
}) => {
  const transition = workflow.transitions.find(
    (t) =>
      t.from === currentState &&
      t.action === action
  );

  if (!transition) {
    throw new Error(
      `Invalid transition from ${currentState} using ${action}`
    );
  }

  // Optional condition check
  if (transition.condition) {
    const { field, operator, value } = transition.condition;
    const actual = context[field];

    let allowed = false;
    switch (operator) {
      case '==': allowed = actual == value; break;
      case '!=': allowed = actual != value; break;
      case '>': allowed = actual > value; break;
      case '<': allowed = actual < value; break;
      case '>=': allowed = actual >= value; break;
      case '<=': allowed = actual <= value; break;
      default: allowed = false;
    }

    if (!allowed) {
      throw new Error('Workflow condition not satisfied');
    }
  }

  // Execute transition actions
  if (transition.actions) {
    transition.actions.forEach((act) => {
      if (act.type === 'SET_FIELD') {
        context[act.field] = act.value;
      }
      if (act.type === 'LOG') {
        console.log('🧩 WORKFLOW LOG:', act.message);
      }
    });
  }

  return transition.to;
};

module.exports = {
  executeTransition,
};
