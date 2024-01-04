import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onDeleteMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    delete: (endPoint: string, id: string) => Promise<void>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = async (id: number) => {
    await api.delete(endPoint, id.toString());
  };

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
