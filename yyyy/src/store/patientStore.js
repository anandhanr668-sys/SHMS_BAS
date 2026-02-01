import { create } from "zustand";

export const usePatientStore = create((set) => ({
  patients: [],

  addPatient: (patient) =>
    set((state) => ({
      patients: [...state.patients, patient],
    })),
}));

