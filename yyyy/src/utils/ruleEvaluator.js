export const evaluateRule = (rule, data) => {
  const { field, operator, value } = rule.condition;

  const actual = data[field];

  switch (operator) {
    case ">":
      return actual > value;
    case "<":
      return actual < value;
    case "==":
      return actual == value;
    default:
      return false;
  }
};

