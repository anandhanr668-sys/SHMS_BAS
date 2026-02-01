// Simulated API client (axios-like)
export const apiClient = {
  get: (url) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockGet(url) });
      }, 500);
    }),

  post: (url, payload) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { success: true, payload } });
      }, 500);
    }),
};

// Mock router
const mockGet = (url) => {
  if (url.includes("/analytics")) {
    return { beds: 76, patients: 214, revenue: "₹18.4L" };
  }
  return { message: `Fetched from ${url}` };
};

