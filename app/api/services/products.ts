import { apiClient } from '../client';
import type { Product, ProductsResponse } from '../../types/api';

export const getProducts = async (): Promise<{ data: Product[] }> => {
  console.log('🔄 API Request Details:', {
    method: 'GET',
    url: '/reseller/octo/v1/products',
    headers: {
      'X-Api-Version': '1.0',
    },
    queryParams: {
      content: true
    },
    body: 'No body (GET request)'
  });

  const response = await apiClient.get<ProductsResponse>('/reseller/octo/v1/products', {
    headers: {
      'X-Api-Version': '1.0',
    },
    params: {
      content: true
    }
  });

  console.log('📥 API Response Full:', {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    data: response.data
  });

  console.log('📊 Response Data Analysis:', {
    dataType: typeof response.data,
    isArray: Array.isArray(response.data),
    hasDataProperty: response.data && typeof response.data === 'object' && 'data' in response.data,
    dataLength: Array.isArray(response.data) ? response.data.length : 'not array',
    dataKeys: response.data && typeof response.data === 'object' ? Object.keys(response.data) : 'not object',
    firstItem: Array.isArray(response.data) && response.data.length > 0 ? response.data[0] : 'no items'
  });

  let products: Product[];

  if (Array.isArray(response.data)) {
    console.log('Using direct array format');
    products = response.data;
  } else if (response.data && typeof response.data === 'object' && 'data' in response.data) {
    console.log(' Using wrapped format with data property');
    products = (response.data as { data: Product[] }).data;
  } else {
    console.log(' Unknown format, using empty array');
    products = [];
  }

  console.log('Final Products:', {
    count: products.length,
    firstProduct: products[0] || 'no products',
    productIds: products.slice(0, 3).map(p => p.id)
  });

  return { data: products };
};

export const getProduct = async (id: string | number): Promise<Product> => {
  const response = await apiClient.get(`/reseller/octo/last/products/${id}`, {
    headers: {
      'X-Api-Version': '1.0',
    },
    params: {
      content: true
    }
  });
  return response.data;
};
