export const ruleService = {
  getRules: () =>
    Promise.resolve([
      { id: 1, name: "Senior Alert Rule" },
      { id: 2, name: "Critical Vitals Rule" },
    ]),

  saveRule: (rule) =>
    Promise.resolve({
      success: true,
      rule,
    }),
};

