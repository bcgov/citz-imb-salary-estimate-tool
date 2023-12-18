import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onSettled =
  ({
    queryClient,
    queryKey,
  }: {
    queryClient: QueryClient;
    queryKey: QueryKey;
  }) =>
  async () => {
    await queryClient.refetchQueries({ queryKey });
  };

export default onSettled;
