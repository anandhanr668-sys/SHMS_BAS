import apiClient from "./apiClient";

export const getDashboardStats = async () => {
  const { data } = await apiClient.get("/analytics/dashboard");
  return data;
};

export const getBedOccupancy = async () => {
  const { data } = await apiClient.get("/analytics/beds");
  return data;
};
