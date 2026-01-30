import { create } from "zustand";

const usePatientStore = create((set) => ({
  patients: [],

  setPatients: (patients) => set({ patients }),

  addPatient: (patient) =>
    set((state) => ({
      patients: [...state.patients, patient]
    }))
}));

export default usePatientStore;
