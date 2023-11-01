import { useCallback } from 'react';
import fetchAPI from './fetchAPI';

export const useAPI = () => {
  const fetchOptions = useCallback((options: RequestInit = {}) => {
    const {
      method = 'GET',
      headers: optionHeaders,
      body,
      ...remainingOptions
    } = options;

    const defaultHeaders = {
      Accept: 'application/json',
      'Access-Control-Request-Method': method,
      'Content-Type': 'application/json',
    };

    const headers = {
      ...defaultHeaders,
      ...optionHeaders,
    };

    return {
      method,
      headers,
      body: typeof body !== 'string' ? JSON.stringify(body) : body,
      ...remainingOptions,
    };
  }, []);

  const fetchData = useCallback(
    async (endPoint: string) => {
      const response = await fetchAPI(endPoint, fetchOptions());

      return response;
    },
    [fetchOptions]
  );

  return { fetchData };
};

export default useAPI;
