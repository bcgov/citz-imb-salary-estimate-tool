/**
 * The purpose of this file is to fetch data from the API.  It is used in the useApi hook.
 * It takes care of the headers and the body of the request.
 *
 */
import { useCallback } from 'react';
import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { callAPI } from './callAPI';

export const useAPI = () => {
  const { getAuthorizationHeaderValue } = useKeycloak();
  const callAPIOptions = useCallback(
    (options: RequestInit = {}) => {
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
        Authorization: getAuthorizationHeaderValue(),
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
    },
    [getAuthorizationHeaderValue]
  );

  const fetchData = useCallback(
    async <TDataType>(endPoint: string) => {
      const response = await callAPI<TDataType>(endPoint, callAPIOptions());

      return response;
    },
    [callAPIOptions]
  );

  const appendItem = useCallback(
    async <TDataType>(endPoint: string, item: TDataType) => {
      const response = await callAPI<TDataType>(
        endPoint,
        callAPIOptions({ method: 'POST', body: item as BodyInit })
      );

      return response as TDataType;
    },
    [callAPIOptions]
  );

  const updateItem = useCallback(
    async <TDataType>(endPoint: string, item: TDataType) => {
      const { id, ...rest } = item as { id: number };

      const response = await callAPI<TDataType>(
        `${endPoint}/${id}`,
        callAPIOptions({ method: 'PATCH', body: rest as unknown as BodyInit })
      );

      return response as TDataType;
    },
    [callAPIOptions]
  );

  const deleteItem = useCallback(
    async (endPoint: string, id: string) => {
      const response = await callAPI(
        `${endPoint}/${id}`,
        callAPIOptions({ method: 'DELETE' })
      );

      return response;
    },
    [callAPIOptions]
  );

  return { appendItem, fetchData, updateItem, deleteItem };
};

export default useAPI;
