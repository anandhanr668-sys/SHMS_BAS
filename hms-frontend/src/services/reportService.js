import apiClient from "./apiClient";

export const saveReport = async (report) => {
  const { data } = await apiClient.post("/reports", report);
  return data;
};

export const getReports = async () => {
  const { data } = await apiClient.get("/reports");
  return data;
};

export const runReport = async (id) => {
  const { data } = await apiClient.get(`/reports/${id}/run`);
  return data;
};
