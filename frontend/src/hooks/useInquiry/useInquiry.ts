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