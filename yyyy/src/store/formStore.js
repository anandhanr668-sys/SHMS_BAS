import { create } from "zustand";

export const useFormStore = create((set) => ({
  forms: [],

  addForm: (form) =>
    set((state) => ({
      forms: [...state.forms, form],
    })),
}));

