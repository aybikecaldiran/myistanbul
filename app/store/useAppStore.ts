import { create } from 'zustand';
import { getProducts } from '../api';
import { setAuthToken } from '../api/client';
import type { Product } from '../types';

interface TokenResponse {
  token: string;
  tokenType: string;
  expiresIn: number;
  role: string;
  entityId: string;
  entityName: string;
}

const getAuthToken = async (apiKey: string): Promise<TokenResponse> => {
  const { apiClient } = await import('../api/client');
  const response = await apiClient.post<TokenResponse>('/Auth/token', {
    apiKey
  }, {
    headers: {
      'X-Api-Version': '1.0',
    },
  });

  return response.data;
};

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  fetchProducts: () => Promise<void>;
  authenticate: () => Promise<boolean>;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  isAuthenticated: false,

  authenticate: async () => {
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    if (!apiKey) {
      const errorMsg = 'API key not configured';
      set({ error: errorMsg, isAuthenticated: false });
      return false;
    }

    try {
      const tokenResponse = await getAuthToken(apiKey);

      if (tokenResponse?.token) {
        setAuthToken(tokenResponse.token);
        set({ isAuthenticated: true, error: null });
        return true;
      } else {
        throw new Error('No token received from API');
      }
    } catch (error: any) {
      const errorMsg = 'Authentication failed';
      set({
        error: errorMsg,
        isAuthenticated: false
      });
      return false;
    }
  },

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const { isAuthenticated } = get();
      if (!isAuthenticated) {
        const authSuccess = await get().authenticate();
        if (!authSuccess) {
          set({ loading: false });
          return;
        }
      }

      const response = await getProducts();

      if (response && response.data && Array.isArray(response.data)) {
        set({ products: response.data, loading: false });
      } else {
        set({
          products: [],
          loading: false,
          error: 'Invalid response format'
        });
      }
    } catch (error: any) {
      let errorMessage = 'Failed to fetch products';

      if (error.name === 'AuthError') {
        errorMessage = 'Authentication required';
        set({ isAuthenticated: false });
      } else if (error?.response?.status === 401) {
        errorMessage = 'Authentication failed';
        set({ isAuthenticated: false });
      } else if (error?.response?.status === 403) {
        errorMessage = 'Access denied';
      } else if (error?.response?.status >= 500) {
        errorMessage = 'Server error';
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      set({
        products: [],
        error: errorMessage,
        loading: false
      });
    }
  },
}));
