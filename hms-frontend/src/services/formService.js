import apiClient from "./apiClient";

export const saveFormSchema = async (schema) => {
  const { data } = await apiClient.post("/forms", schema);
  return data;
};

export const getForms = async () => {
  const { data } = await apiClient.get("/forms");
  return data;
};

export const getFormById = async (id) => {
  const { data } = await apiClient.get(`/forms/${id}`);
  return data;
};
