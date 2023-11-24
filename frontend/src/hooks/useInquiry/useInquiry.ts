/**
 * this hook is used to fetch inquiry data from the database
 * it uses the useDataFactory hook to fetch and manipulate the data to/from the database
 * it also provides the columns for the table
 * it is used by the Inquiry component
 * if you needed to transform the data returned from the database, you would do it here
 *
 * @param T the type of the data to fetch
 * @param id the id of the inquiry record to fetch (optional)
 * @returns the query object from react-query
 * @returns the columns for the table
 *
 * see the useDataFactory hook for more information
 */
import { useMemo } from 'react';
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsInquiry } from './inquiry.columns';
import { InquiryData } from '../../types';

export const useInquiry = (dataId: string = '') => {
  const endPoint = 'inquiry';
  const inquiryData = useDataFactory<InquiryData>({ endPoint, dataId });

  // this functionality is here instead of in the useDataFactory hook because
  // it allows data transformation upon return from the backend
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
    append: (item: InquiryData) => {
      inquiryData.append(item);
    },
  };
};

export default useInquiry;
