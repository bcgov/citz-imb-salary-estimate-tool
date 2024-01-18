import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onAppendMutation = <TDataType>({
  endPoint,
  api,
  queryClient,
  queryKey,
}: {
  endPoint: string;
  api: {
    post: (endPoint: string, newItem: TDataType) => Promise<void>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = async (item: TDataType) => {
    const newItem = { ...(item as object) };
    let postEndpoint = endPoint;
    if ('id' in newItem) delete newItem.id;
    if (endPoint.includes('/')) {
      const splitEndpoint = endPoint.split('/');
      postEndpoint = splitEndpoint[0];
    }
    await api.post(postEndpoint, newItem as TDataType);
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
    return previousValues as TDataType[];
  };

  return { mutationFn, onMutate };
};

export default onAppendMutation;
