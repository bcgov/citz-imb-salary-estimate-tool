/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory, useFormFactory, useTableFactory } from '@/hooks/factories';
import { InquiryData } from './Inquiry.d';
import { inquiryDataConfig } from './inquiry.data.config';
import { inquiryFormConfig } from './inquiry.form.config';
import { inquiryTableConfig } from './inquiry.table.config';

export type InquiryProps = {
  userGuid: string;
  roles: string[];
};

export const useInquiry = (props: InquiryProps) => {
  const { userGuid, roles } = props;

  const data = useDataFactory<InquiryData>(inquiryDataConfig);

  const formConfig = {
    ...inquiryFormConfig,
  };

  if (roles.includes('adm') && formConfig.create.defaultValues)
    formConfig.create.defaultValues.adm_user_id = userGuid;
  if (roles.includes('hm') && formConfig.create.defaultValues)
    formConfig.create.defaultValues.hm_user_id = userGuid;
  if (roles.includes('shr') && formConfig.create.defaultValues)
    formConfig.create.defaultValues.shr_user_id = userGuid;

  formConfig.edit.onSubmit = data.updateItem;
  formConfig.create.onSubmit = data.appendItem;
  formConfig.remove.onSubmit = data.deleteItem;

  const forms = useFormFactory<InquiryData>(formConfig);

  const tableConfig = {
    rows: data.items,
    isLoading: data.isLoading,
    forms,
    ...inquiryTableConfig,
  };

  const Table = useTableFactory<InquiryData>(tableConfig);

  return { Table };
};

export default useInquiry;
