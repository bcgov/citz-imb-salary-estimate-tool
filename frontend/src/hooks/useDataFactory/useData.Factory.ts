/**
 * purpose of this hook is to provide a generic way to fetch data from the backend
 * it is usable for all endpoints that return an array of objects
 * it is also usable for endpoints that return a single object
 * it is used by other hooks to fetch data from the backend
 *
 * it uses react-query to cache the data
 * see https://tanstack.com/query/latest/ for more information
 * an excellent tutorial can be found here: https://youtu.be/r8Dg0KVnfMA?si=IjVtsUASxuekOQ9S
 *
 * @param T the type of the data to fetch
 * @param endPoint the endpoint to fetch data from
 * @param dataId the id of the record to fetch (optional)
 * @returns the query object from react-query
 *
 * future improvements:
 * - add a way to create a new record
 * - add a way to update a record
 * - add a way to delete a record
 */
import { QueryKey, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useAPI } from '../useAPI/useAPI';

export const useDataFactory = <T>({
  endPoint,
  dataId = '',
  apiHook = useAPI,
}: {
  endPoint: string;
  dataId?: string;
  apiHook?: () => ReturnType<typeof useAPI>;
}) => {
  const queryKey: QueryKey = useMemo(
    () => [endPoint, dataId],
    [dataId, endPoint]
  );

  const { fetchData } = apiHook();

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      let response;
      if (dataId) {
        response = await fetchData(`${endPoint}/${dataId}`);
      } else {
        response = await fetchData(endPoint);
      }
      return response as T[];
    },
  });

  return { ...query };
};

export default useDataFactory;
