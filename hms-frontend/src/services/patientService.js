import apiClient from "./apiClient";

export const patientService = {
  async getAll() {
    const { data } = await apiClient.get("/patients");
    return data;
  },

  async getById(id) {
    const { data } = await apiClient.get(`/patients/${id}`);
    return data;
  },

  async create(payload) {
    const { data } = await apiClient.post("/patients", payload);
    return data;
  },

  async update(id, payload) {
    const { data } = await apiClient.put(`/patients/${id}`, payload);
    return data;
  },

  async remove(id) {
    await apiClient.delete(`/patients/${id}`);
  }
};
