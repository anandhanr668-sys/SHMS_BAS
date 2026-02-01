export const patientService = {
  getPatients: () =>
    Promise.resolve([
      { id: 1, name: "Anita Sharma", age: 45 },
      { id: 2, name: "Rohit Mehra", age: 32 },
    ]),

  registerPatient: (patient) =>
    Promise.resolve({
      success: true,
      patientId: Date.now(),
      patient,
    }),
};

