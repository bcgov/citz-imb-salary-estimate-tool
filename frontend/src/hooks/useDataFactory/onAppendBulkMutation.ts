import { QueryClient, QueryKey } from '@tanstack/react-query';

export const onAppendBulkMutation = ({
  endPoint,
  api,
}: {
  endPoint: string;
  api: {
    post: (endPoint: string, file: unknown) => Promise<void>;
  };
  queryClient: QueryClient;
  queryKey: QueryKey;
}) => {
  const mutationFn = (file: unknown) => api.post(endPoint, file);

  const onMutate = async () => {};

  return { mutationFn, onMutate };
};

export default onAppendBulkMutation;
