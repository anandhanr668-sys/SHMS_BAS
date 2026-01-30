import apiClient from "./apiClient";

export const saveRule = async (rule) => {
  const { data } = await apiClient.post("/rules", rule);
  return data;
};

export const getRules = async () => {
  const { data } = await apiClient.get("/rules");
  return data;
};
