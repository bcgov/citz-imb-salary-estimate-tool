import { useCallback } from 'react';
// import { useAuth } from '../useAuth/useAuth';
import fetchAPI from './fetchAPI';

const useAPI = () => {
  // const { isAuthorized, accessToken } = useAuth();

  const fetchOptions = useCallback(
    (options: RequestInit = {}) => {
      const {
        method = 'GET',
        headers: optionHeaders,
        body,
        ...remainingOptions
      } = options;

      const defaultHeaders = {
        Accept: '*/*',
        'Access-Control-Request-Method': method,
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${accessToken}`,
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
    },
    []
    // [accessToken],
  );

  const fetchData = useCallback(
    async (endPoint: string) => {
      const response = await fetchAPI(endPoint, fetchOptions());

      return response;
    },
    [fetchOptions]
  );

  const createData = useCallback(
    async (endPoint: string, body: BodyInit) => {
      const response = await fetchAPI(
        endPoint,
        fetchOptions({
          method: 'POST',
          body,
        })
      );

      return response;
    },
    [fetchOptions]
  );

  const updateData = useCallback(
    async (endPoint: string, body: BodyInit) => {
      const response = await fetchAPI(
        endPoint,
        fetchOptions({
          method: 'PUT',
          body,
        })
      );

      return response;
    },
    [fetchOptions]
  );

  const deleteData = useCallback(
    async (endPoint: string) => {
      const response = await fetchAPI(
        endPoint,
        fetchOptions({ method: 'DELETE' })
      );

      return response;
    },
    [fetchOptions]
  );

  // return { createData, fetchData, updateData, deleteData, isAuthorized };
  return { createData, fetchData, updateData, deleteData };
};

export default useAPI;
