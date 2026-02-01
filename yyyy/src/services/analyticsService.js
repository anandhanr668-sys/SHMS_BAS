import { apiClient } from "./apiClient";

export const analyticsService = {
  getHospitalStats: () =>
    apiClient.get("/analytics/hospital"),
};

