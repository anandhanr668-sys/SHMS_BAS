import { create } from "zustand";
import { PatientRecord } from "../types/patients";

/**
 * Patient Store with TypeScript-like types
 * @type {import('zustand').StoreApi<{
 *   patients: PatientRecord[],
 *   selectedPatient: PatientRecord | null,
 *   addPatient: (patient: PatientRecord) => void,
 *   updatePatient: (id: string, updates: Partial<PatientRecord>) => void,
 *   setSelectedPatient: (patient: PatientRecord | null) => void
 * }>}
 */
export const usePatientStore = create((set) => ({
  patients: [],
  selectedPatient: null,

  addPatient: (patient) =>
    set((state) => ({
      patients: [...state.patients, patient],
    })),

  updatePatient: (id, updates) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
      selectedPatient:
        state.selectedPatient?.id === id
          ? { ...state.selectedPatient, ...updates }
          : state.selectedPatient,
    })),

  setSelectedPatient: (patient) =>
    set({ selectedPatient: patient }),
}));

