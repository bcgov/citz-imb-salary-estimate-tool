/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { InquiryData } from '@/types';
import { useDataFactory } from '@/hooks/useDataFactory/useData.Factory';
import { columnsInquiry } from './inquiry.columns';
import { inquiryFormFields } from './inquiry.fields';
import { inquirySections } from './inquiry.sections';

export const useInquiry = (guid?: string) => {
  let endPoint = 'inquiry';
  if (guid) endPoint = `${endPoint}/guid?guid=${guid}`;
  const title = 'Inquiry';

  const { state: authState, hasRole } = useKeycloak();
  const user = authState.userInfo;
  if (hasRole('hm') && inquiryFormFields[1].defaultValue === null) {
    inquiryFormFields[1].defaultValue = user?.idir_user_guid;
  }

  if (hasRole('shr') && inquiryFormFields[2].defaultValue === null) {
    inquiryFormFields[2].defaultValue = user?.idir_user_guid;
  }

  if (hasRole('adm') && inquiryFormFields[3].defaultValue === null) {
    inquiryFormFields[3].defaultValue = user?.idir_user_guid;
  }

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
