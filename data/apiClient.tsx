import { tokenStorage } from "@/utils/tokenStorage";
import axios, { AxiosInstance } from "axios";

export const baseURL = process.env.EXPO_PUBLIC_BASE_URL;

// Create an Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include Authorization header
apiClient.interceptors.request.use(
  async (config) => {
    // Skip token check for login and register endpoints
    const isAuthEndpoint = config.url?.includes('/auth/login') || config.url?.includes('/auth/register');
    if (isAuthEndpoint) {
      return config;
    }

    const tokens = await tokenStorage.get();
    const accessToken = tokens?.accessToken;

    if (accessToken && config.headers) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Function to refresh tokens
export const refreshToken = async () => {
  const tokens = await tokenStorage.get();
  const refreshToken = tokens?.refreshToken;

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  try {
    const result = await axios.post(
      `${baseURL}/auth/refresh-tokens`,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    const { tokens: newTokens } = result.data;
    await tokenStorage.set(newTokens);
    return newTokens?.accessToken;
  } catch (error) {
    await tokenStorage.clear();
    throw error;
  }
};

// Add response interceptor to handle 401 and refresh tokens
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Skip refresh token logic for auth endpoints
    const isAuthEndpoint = originalRequest.url?.includes('/auth/login') || 
                          originalRequest.url?.includes('/auth/register');
    
    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        await tokenStorage.clear();
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;