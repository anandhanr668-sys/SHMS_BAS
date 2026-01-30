import { create } from "zustand";

const useRuleStore = create((set) => ({
  rules: [],

  setRules: (rules) => set({ rules }),

  addRule: (rule) =>
    set((state) => ({
      rules: [...state.rules, rule]
    }))
}));

export default useRuleStore;
