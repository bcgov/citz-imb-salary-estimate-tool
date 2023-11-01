import { useMemo } from 'react';
import useDBDataFactory from '../useDataFactory/useData.Factory';

export const useHMInquiry = (id: string = '') => {
  const inquiryData = useDBDataFactory('inquiry', id);

  const data = useMemo(() => {
    if (
      inquiryData.isLoading ||
      inquiryData.isError ||
      inquiryData.data === undefined
    )
      return [];

    return inquiryData.data;
  }, [inquiryData.data, inquiryData.isError, inquiryData.isLoading]);

  return {
    ...inquiryData,
    data,
  };
};

export default useHMInquiry;
