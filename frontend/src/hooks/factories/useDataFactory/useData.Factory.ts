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
 */
import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { QueryKey, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createApi } from '@/api';
import {
  onAppendBulkMutation,
  onAppendMutation,
  onDeleteMutation,
  onError,
  onSettled,
  onUpdateMutation,
} from './mutations';
import type { UseDataFactoryProps, UseDataFactoryResults } from './UseData.Factory.d';

export const useDataFactory = <TDataType>(
  props: UseDataFactoryProps<TDataType>,
): UseDataFactoryResults<TDataType> => {
  const { endPoint, dataTransformer = (items) => items } = props;

  const queryKey: QueryKey = useMemo(() => [endPoint], [endPoint]);

  const { getAuthorizationHeaderValue } = useKeycloak();

  const api = createApi({
    headers: { Authorization: getAuthorizationHeaderValue() },
  });
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await api.get<TDataType>(endPoint);

      return response.data;
    },
  });

  const items = useMemo(() => {
    if (query.isLoading || query.isError || !query.data) return [];

    return dataTransformer(query.data) as TDataType[];
  }, [dataTransformer, query.data, query.isError, query.isLoading]);

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

  const { mutate: appendBulkItems } = useMutation({
    ...onAppendBulkMutation(onMutationProps),
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

  return {
    items,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error,
    deleteItem,
    updateItem,
    appendBulkItems,
    appendItem,
  };
};

useDataFactory.defaultProps = {
  dataTransformer: (items) => items,
};

export default useDataFactory;
