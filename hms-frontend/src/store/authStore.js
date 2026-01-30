import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  role: null,

  login: (user, role) =>
    set({
      isAuthenticated: true,
      user,
      role
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
      role: null
    })
}));

export default useAuthStore;
