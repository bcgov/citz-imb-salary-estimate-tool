/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { InquiryData } from '../../types';
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { useFormFactory } from '../useFormFactory/useForm.Factory';
import { columnsInquiry } from './inquiry.columns';
import { inquiryFormFields } from './inquiry.fields';
import { inquirySections } from './inquiry.sections';

export const useInquiry = (dataId: string = '') => {
  const endPoint = 'inquiry';
  const inquiryData = useDataFactory<InquiryData>({ endPoint, dataId });

  const { AddFormDialog } = useFormFactory({
    title: 'Inquiry',
    onSubmit: (data) => inquiryData.append(data as InquiryData),
    sections: inquirySections,
    fields: inquiryFormFields,
  });

  return {
    ...inquiryData,
    columns: columnsInquiry,
    // formOptions: { fields: inquiryFormFields },
    AddFormDialog,
  };
};

export default useInquiry;
