import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onAppendBulkMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    appendBulkItems: (
      endPoint: string,
      newItems: TDataType[]
    ) => Promise<TDataType[]>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = (items: TDataType[]) => {
    const newItems = items.map((item) => {
      const newItem = { ...(item as object) };
      if ('id' in newItem) delete newItem.id;
      return {
        ...newItem,
      };
    });

    return api.appendBulkItems(endPoint, newItems as TDataType[]);
  };

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

  return { mutationFn, onMutate };
};

export default onAppendBulkMutation;
