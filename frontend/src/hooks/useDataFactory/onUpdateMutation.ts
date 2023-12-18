import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onUpdateMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    updateItem: (endPoint: string, newItem: TDataType) => Promise<TDataType>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = (item: TDataType) => api.updateItem(endPoint, item);

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
