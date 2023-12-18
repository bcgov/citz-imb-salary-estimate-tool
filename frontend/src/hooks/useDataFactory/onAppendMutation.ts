import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onAppendMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    appendItem: (endPoint: string, newItem: TDataType) => Promise<TDataType>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = (item: TDataType) => {
    const newItem = { ...(item as object) };
    if ('id' in newItem) delete newItem.id;

    return api.appendItem(endPoint, newItem as TDataType);
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

export default onAppendMutation;
