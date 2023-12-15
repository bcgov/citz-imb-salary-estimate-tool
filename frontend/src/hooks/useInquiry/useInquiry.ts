/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { InquiryData } from '../../types';
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { useFormFactory } from '../useFormFactory/useForm.Factory';
import { useTableFactory } from '../useTableFactory/useTable.Factory';
import { columnsInquiry } from './inquiry.columns';
import { inquiryFormFields } from './inquiry.fields';
import { inquirySections } from './inquiry.sections';

export const useInquiry = () => {
  const endPoint = 'inquiry';
  const title = 'Inquiry';
  const inquiryData = useDataFactory<InquiryData>({ endPoint, title });

  const inquiryForms = useFormFactory({
    title: 'Inquiry',
    onAppend: (data) => inquiryData.appendItem(data as InquiryData),
    onUpdate: (data) =>
      inquiryData.updateItem({
        ...(data as InquiryData),
        status_id: (data as InquiryData).status_id + 1,
      }),
    onDelete: (id) => inquiryData.deleteItem(id as number),
    sections: inquirySections,
    fields: inquiryFormFields,
  });

  const InquiryTable = useTableFactory<InquiryData>({
    title: 'Inquiries',
    rows: inquiryData.items,
    columns: columnsInquiry,
    AddFormDialog: inquiryForms.AddFormDialog,
    ViewFormDialog: inquiryForms.ViewFormDialog,
    EditFormDialog: inquiryForms.EditFormDialog,
    DeleteRow: inquiryForms.DeleteRow,
  });

  return {
    InquiryTable,
  };
};

export default useInquiry;
