import { apiClient } from '../client';

export interface TokenRequest {
  apiKey: string;
}

export interface TokenResponse {
  token: string;
  tokenType: string;
  expiresIn: number;
  role: string;
  entityId: string;
  entityName: string;
}

export const getAuthToken = async (apiKey: string): Promise<TokenResponse> => {
  const response = await apiClient.post<TokenResponse>('/Auth/token', {
    apiKey
  }, {
    headers: {
      'X-Api-Version': '1.0',
    },
  });

  return response.data;
};
