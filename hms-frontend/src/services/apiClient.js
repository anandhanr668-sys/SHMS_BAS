import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api", // ✅ USE YOUR REAL BACKEND PORT
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

/**
 * REQUEST INTERCEPTOR
 * Attach token automatically
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * RESPONSE INTERCEPTOR
 * Global error normalization
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = "Something went wrong";

    if (error.response) {
      message =
        error.response.data?.message ||
        `Server error (${error.response.status})`;
    } else if (error.request) {
      message = "Network error. Server not reachable.";
    } else {
      message = error.message;
    }

    return Promise.reject(new Error(message));
  }
);

export default apiClient;
