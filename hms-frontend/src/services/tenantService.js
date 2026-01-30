import apiClient from "./apiClient";

export const getTenants = async () => {
  const { data } = await apiClient.get("/tenants");
  return data;
};

export const setActiveTenant = (tenantId) => {
  localStorage.setItem("tenantId", tenantId);
};
