// src/axios.js
import axios from "axios";

// Create an axios instance with a default configuration
const api = axios.create({
  baseURL: "https://your-api-endpoint.com", // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers if needed
  },
});

// Optionally, add request/response interceptors if needed
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent (e.g., add authorization tokens)
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;
