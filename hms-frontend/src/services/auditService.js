import apiClient from "./apiClient";

export const getAuditLogs = async () => {
  const { data } = await apiClient.get("/audit-logs");
  return data;
};

export const logAction = async (action) => {
  await apiClient.post("/audit-logs", action);
};
