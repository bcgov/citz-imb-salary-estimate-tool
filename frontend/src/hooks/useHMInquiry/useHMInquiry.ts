import { useMemo } from 'react';
import useDBDataFactory from '../useDataFactory/useData.Factory';
import { columnsHMInquiry } from './columns';
import { HMInquiryData } from '../../types';

export const useHMInquiry = (id: string = '') => {
  const inquiryData = useDBDataFactory<HMInquiryData>('inquiry', id);

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
    columns: columnsHMInquiry,
  };
};

export default useHMInquiry;
