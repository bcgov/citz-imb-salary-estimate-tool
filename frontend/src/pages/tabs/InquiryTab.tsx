import { KeycloakIdirUser, useKeycloak } from '@bcgov/citz-imb-kc-react';
import { useAuthentication, useInquiry } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface InquiryTabProps {
  value: number;
}

export const InquiryTab = (props: InquiryTabProps) => {
  const { value } = props;
  let InquiryParams;
  const { hasRole } = useAuthentication();
  const { state: authState } = useKeycloak();
  const user = authState.userInfo;
  if (!hasRole(['admin']))
    InquiryParams = (user as KeycloakIdirUser)?.idir_user_guid;
  const { InquiryTable } = useInquiry(InquiryParams);
  return (
    <CustomTabPanel value={value} index={0}>
      {InquiryTable}
    </CustomTabPanel>
  );
};
