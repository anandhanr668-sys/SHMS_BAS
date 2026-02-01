export const formService = {
  getForms: () =>
    Promise.resolve([
      { id: 1, name: "Patient Registration" },
      { id: 2, name: "Vitals Capture" },
    ]),

  saveFormSchema: (schema) =>
    Promise.resolve({
      success: true,
      schema,
    }),
};

