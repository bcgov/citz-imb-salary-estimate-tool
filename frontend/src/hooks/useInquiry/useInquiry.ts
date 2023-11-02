import { useMemo } from 'react';
import useDBDataFactory from '../useDataFactory/useData.Factory';
import { columnsInquiry } from './columns';
import { InquiryData } from '../../types';

export const useInquiry = (id: string = '') => {
  const inquiryData = useDBDataFactory<InquiryData>('inquiry', id);

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
    columns: columnsInquiry,
  };
};

export default useInquiry;
