export const executeRule = (rule, data) => {
  const conditionPassed = rule.conditions.every((c) => {
    const left = data[c.field];
    const right = c.value;

    switch (c.operator) {
      case "==":
        return left == right;
      case ">":
        return left > right;
      case "<":
        return left < right;
      default:
        return false;
    }
  });

  if (!conditionPassed) {
    return { success: false, actions: [] };
  }

  return {
    success: true,
    actions: rule.actions
  };
};
