import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api", // backend base URL
  headers: {
    "Content-Type": "application/json"
  }
});

// Attach token automatically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handler
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err.response?.data || err.message);
    throw err;
  }
);

export default apiClient;
