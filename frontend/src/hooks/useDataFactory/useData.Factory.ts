import { QueryKey, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useAPI } from '../useAPI/useAPI';

export const useDataFactory = <T>(endPoint: string, dataId: string) => {
  const queryKey: QueryKey = useMemo(
    () => [endPoint, dataId],
    [dataId, endPoint]
  );

  const { fetchData } = useAPI();

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      let response;
      if (dataId) {
        response = await fetchData(`${endPoint}/${dataId}`);
      } else {
        response = await fetchData(endPoint);
      }
      return response as T[];
    },
  });

  return { ...query };
};

export default useDataFactory;
