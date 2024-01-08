/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { InquiryData } from '@/types';
import { useDataFactory } from '@/hooks/useDataFactory/useData.Factory';
import { columnsInquiry } from './inquiry.columns';
import { inquiryFormFields } from './inquiry.fields';
import { inquirySections } from './inquiry.sections';

export const useInquiry = (guid?: string) => {
  let endPoint = 'inquiry';
  if (guid) endPoint = `${endPoint}/guid?guid=${guid}`;
  const title = 'Inquiry';
  const inquiryData = useDataFactory<InquiryData>({
    endPoint,
    title,
    tableColumns: columnsInquiry,
    formSections: inquirySections,
    formFields: inquiryFormFields,
  });

  return {
    InquiryTable: inquiryData.DataTable,
  };
};

export default useInquiry;
