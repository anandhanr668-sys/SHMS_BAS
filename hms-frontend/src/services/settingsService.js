import apiClient from "./apiClient";

export const settingsService = {
  async getSettings() {
    const { data } = await apiClient.get("/settings");
    return data;
  },

  async updateSettings(payload) {
    const { data } = await apiClient.put("/settings", payload);
    return data;
  }
};
