import { create } from "zustand";
import { patientService } from "../services/patientService";

const usePatientStore = create((set) => ({
  patients: [],
  loading: false,
  error: null,

  // ✅ ASYNC ACTION
  fetchPatients: async () => {
    set({ loading: true, error: null });

    try {
      const data = await patientService.getAll();
      set({ patients: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ✅ ADD PATIENT
  addPatient: async (patient) => {
    const created = await patientService.create(patient);
    set((state) => ({
      patients: [...state.patients, created]
    }));
  }
}));

export default usePatientStore;
