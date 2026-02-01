export const executeRule = (rule, data) => {
  const { field, operator, value } = rule.condition;

  let conditionMet = false;

  switch (operator) {
    case ">":
      conditionMet = data[field] > value;
      break;
    case "<":
      conditionMet = data[field] < value;
      break;
    case "==":
      conditionMet = data[field] == value;
      break;
    default:
      break;
  }

  if (conditionMet) {
    if (rule.action.type === "showAlert") {
      return rule.action.message;
    }
    if (rule.action.type === "flagRecord") {
      return "🚩 Record flagged";
    }
  }

  return "No action executed";
};

