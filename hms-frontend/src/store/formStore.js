import { create } from "zustand";

const useFormStore = create((set) => ({
  forms: [],

  setForms: (forms) => set({ forms }),

  addForm: (form) =>
    set((state) => ({
      forms: [...state.forms, form]
    }))
}));

export default useFormStore;
