import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

let authToken: string | null = null;

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // Log error for development
    if (__DEV__) {
      console.error('API Error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message
      });
    }

    if (error.response?.status === 401) {
      authToken = null;
      const authError = new Error('API authentication required. Please check your API key.');
      authError.name = 'AuthError';
      return Promise.reject(authError);
    }

    return Promise.reject(error);
  }
);
