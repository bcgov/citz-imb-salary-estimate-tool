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
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useMemo } from 'react';
import { useAPI } from '../useAPI/useAPI';
import { onAppendMutation } from './onAppendMutation';
import { onDeleteMutation } from './onDeleteMutation';
import { onError } from './onError';
import { onSettled } from './onSettled';
import { onUpdateMutation } from './onUpdateMutation';

export const useDataFactory = <TDataType>({
  endPoint,
  title,
}: {
  endPoint: string;
  title: string;
}) => {
  const queryKey: QueryKey = useMemo(() => [endPoint], [endPoint]);

  const api = useAPI();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await api.fetchData<TDataType[]>(endPoint);

      return response;
    },
  });

  const items = useMemo(() => {
    if (query.isLoading || query.isError || !query.data) return [];

    return query.data;
  }, [query.data, query.isError, query.isLoading]);

  const onMutationProps = {
    endPoint,
    api,
    queryClient,
    queryKey,
  };

  const commonUseMutationProps = {
    onError: onError({ queryClient, queryKey }),
    onSettled: onSettled({ queryClient, queryKey }),
  };

  const { mutate: appendItem } = useMutation({
    ...onAppendMutation<TDataType>(onMutationProps),
    ...commonUseMutationProps,
  });

  const { mutate: updateItem } = useMutation({
    ...onUpdateMutation<TDataType>(onMutationProps),
    ...commonUseMutationProps,
  });

  const { mutate: deleteItem } = useMutation({
    ...onDeleteMutation<TDataType>(onMutationProps),
    ...commonUseMutationProps,
  });

  return { ...query, items, appendItem, updateItem, deleteItem };
};

export default useDataFactory;
