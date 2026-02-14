import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000", 
  timeout: 10000,
});

/* Request interceptor → attach token */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* Response interceptor → handle errors globally */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized – token expired");
      // optional: logout user / redirect
    }
    return Promise.reject(error);
  }
);

export default api;
