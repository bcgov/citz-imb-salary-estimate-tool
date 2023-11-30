/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsInquiry } from './inquiry.columns';
import { InquiryData } from '../../types';

export const useInquiry = (dataId: string = '') => {
  const endPoint = 'inquiry';
  const inquiryData = useDataFactory<InquiryData>({ endPoint, dataId });

  return {
    ...inquiryData,
    columns: columnsInquiry,
  };
};

export default useInquiry;
