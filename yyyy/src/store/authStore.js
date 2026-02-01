import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  role: null,
  isAuthenticated: false,

  login: (user) =>
    set({
      user,
      role: user.role,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      role: null,
      isAuthenticated: false,
    }),
}));

