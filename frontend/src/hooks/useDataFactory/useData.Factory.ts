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
import {
  QueryKey,
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';
import { useMemo } from 'react';
import { useAPI } from '../useAPI/useAPI';

export const useDataFactory = <TDataType>({
  endPoint: tableName,
  dataId,
}: {
  endPoint: string;
  dataId?: string;
}) => {
  const queryKey: QueryKey = useMemo(
    () => [tableName, dataId],
    [dataId, tableName]
  );

  const endPoint = useMemo(() => {
    if (dataId) return `${tableName}/${dataId}`;

    return tableName;
  }, [dataId, tableName]);

  const api = useAPI();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await api.fetchData<TDataType[]>(endPoint);

      return response;
    },
  });

  const data = useMemo(() => {
    if (query.isLoading || query.isError || !query.data) return [];

    return query.data;
  }, [query.data, query.isError, query.isLoading]);

  const mutationFn = (item: TDataType) =>
    api.appendItem<TDataType>(endPoint, item);

  const onMutate = async (newItem: TDataType) => {
    const previousValues = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (oldValues: TDataType[] = []) => [
      ...oldValues,
      {
        id: 'new',
        ...newItem,
      },
    ]);
    return previousValues;
  };

  const onError = (error, newItem, context) =>
    queryClient.setQueryData(queryKey, context);

  const onSettled = async () => {
    await queryClient.refetchQueries({ queryKey });
  };

  const { mutate: append } = useMutation({
    mutationFn,
    onMutate,
    onError,
    onSettled,
  });

  return { ...query, data, append };
};

export default useDataFactory;
