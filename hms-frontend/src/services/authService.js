import apiClient from "./apiClient";

export const login = async (credentials) => {
  const { data } = await apiClient.post("/auth/login", credentials);
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
  return data;
};

export const logout = () => {
  localStorage.clear();
};

export const getCurrentUser = async () => {
  const { data } = await apiClient.get("/auth/me");
  return data;
};
