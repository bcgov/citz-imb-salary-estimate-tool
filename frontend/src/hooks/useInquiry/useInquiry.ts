/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsInquiry } from './inquiry.columns';
import { fieldsInquiry } from './inquiry.fields';
import { InquiryData } from '../../types';

export const useInquiry = (dataId: string = '') => {
  const endPoint = 'inquiry';
  const inquiryData = useDataFactory<InquiryData>({ endPoint, dataId });

  const defaultValues = {};

  fieldsInquiry.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  return {
    ...inquiryData,
    columns: columnsInquiry,
    formOptions: { defaultValues, fields: fieldsInquiry },
  };
};

export default useInquiry;
