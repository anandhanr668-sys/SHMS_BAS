import { apiClient } from "./apiClient";

export const authService = {
  login: (credentials) =>
    apiClient.post("/auth/login", credentials),

  logout: () =>
    apiClient.post("/auth/logout"),

  getCurrentUser: () =>
    Promise.resolve({
      id: 1,
      name: "Admin User",
      role: "ADMIN",
    }),
};

