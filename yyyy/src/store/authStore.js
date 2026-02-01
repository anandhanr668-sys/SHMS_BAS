import { create } from "zustand";
import { UserRole } from "../types/users";

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {UserRole} role
 * @property {string} [avatar]
 */

/**
 * Auth Store with TypeScript-like types
 * @type {import('zustand').StoreApi<{
 *   user: User | null,
 *   role: UserRole | null,
 *   isAuthenticated: boolean,
 *   login: (user: User) => void,
 *   logout: () => void
 * }>}
 */
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

