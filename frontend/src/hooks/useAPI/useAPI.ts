/**
 * The purpose of this file is to fetch data from the API.  It is used in the useApi hook.
 * It takes care of the headers and the body of the request.
 *
 */
import { useCallback } from 'react';
import { callAPI } from './callAPI';

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
      body: JSON.stringify(body),
      ...remainingOptions,
    };
  }, []);

  const fetchData = useCallback(
    async <TDataType>(endPoint: string) => {
      const response = await callAPI<TDataType>(endPoint, fetchOptions());

      return response;
    },
    [fetchOptions]
  );

  return { fetchData };
};

export default useAPI;
