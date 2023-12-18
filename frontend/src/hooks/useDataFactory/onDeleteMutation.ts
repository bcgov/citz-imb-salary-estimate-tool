import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onDeleteMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    deleteItem: (endPoint: string, id: string) => Promise<unknown>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = (id: number) => api.deleteItem(endPoint, id.toString());

  const onMutate = async (id: number) => {
    const previousValues = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (oldValues: TDataType[] = []) => [
      ...oldValues.filter((oldValue) => (oldValue as { id: number }).id !== id),
    ]);
    return previousValues;
  };

  return { mutationFn, onMutate };
};

export default onDeleteMutation;
