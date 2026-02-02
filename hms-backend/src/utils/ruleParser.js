// src/utils/ruleParser.js

const evaluate = (fieldValue, operator, expectedValue) => {
  switch (operator) {
    case '==': return fieldValue == expectedValue;
    case '!=': return fieldValue != expectedValue;
    case '>': return fieldValue > expectedValue;
    case '<': return fieldValue < expectedValue;
    case '>=': return fieldValue >= expectedValue;
    case '<=': return fieldValue <= expectedValue;
    default: return false;
  }
};

const parseRule = (rule, context) => {
  const { field, operator, value } = rule;
  return evaluate(context[field], operator, value);
};

module.exports = {
  parseRule,
};
