import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onError =
  ({
    queryClient,
    queryKey,
  }: {
    queryClient: QueryClient;
    queryKey: QueryKey;
  }) =>
  (error, newItem, context) =>
    queryClient.setQueryData(queryKey, context);

export default onError;
