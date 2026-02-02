// src/lcnc/rules-engine/rule.simulator.js

const { executeRule } = require('./rule.executor');

/**
 * Simulate rule execution
 */
const simulateRule = (rule, sampleData) => {
  try {
    const clonedData = JSON.parse(JSON.stringify(sampleData));
    const result = executeRule(rule, clonedData);

    return {
      matched: true,
      result,
    };
  } catch (error) {
    return {
      matched: false,
      error: error.message,
    };
  }
};

module.exports = {
  simulateRule,
};
