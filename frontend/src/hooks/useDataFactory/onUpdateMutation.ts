import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onUpdateMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    patch: (endPoint: string, newItem: TDataType) => Promise<void>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = async (item: TDataType) => {
    await api.patch(endPoint, item);
  };

  const OnMutate = async (newItem: TDataType) => {
    const previousValues = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (oldValues: TDataType[] = []) => [
      ...oldValues.filter(
        (oldValue) =>
          (oldValue as { id: number }).id !== (newItem as { id: number }).id
      ),
      {
        ...newItem,
      },
    ]);
    return previousValues;
  };
  return { mutationFn, OnMutate };
};

export default onUpdateMutation;
