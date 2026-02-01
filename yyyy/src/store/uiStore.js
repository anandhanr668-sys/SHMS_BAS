import { create } from "zustand";

export const useUIStore = create((set) => ({
  loading: false,
  theme: "light",

  setLoading: (loading) => set({ loading }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

