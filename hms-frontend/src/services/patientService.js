import apiClient from "./apiClient";

export const registerPatient = async (patientData) => {
  const { data } = await apiClient.post("/patients", patientData);
  return data;
};

export const getPatients = async () => {
  const { data } = await apiClient.get("/patients");
  return data;
};

export const getPatientById = async (id) => {
  const { data } = await apiClient.get(`/patients/${id}`);
  return data;
};
