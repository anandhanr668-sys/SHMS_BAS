import { create } from "zustand";

export const useRuleStore = create((set) => ({
  rules: [],

  addRule: (rule) =>
    set((state) => ({
      rules: [...state.rules, rule],
    })),
}));

