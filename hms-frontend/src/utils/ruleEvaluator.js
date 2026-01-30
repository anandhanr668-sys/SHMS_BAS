export const evaluateRule = (conditions, data) => {
  return conditions.every((c) => {
    const left = data[c.field];
    const right = c.value;

    switch (c.operator) {
      case "==": return left == right;
      case "!=": return left != right;
      case ">": return left > right;
      case "<": return left < right;
      case ">=": return left >= right;
      case "<=": return left <= right;
      default: return false;
    }
  });
};
