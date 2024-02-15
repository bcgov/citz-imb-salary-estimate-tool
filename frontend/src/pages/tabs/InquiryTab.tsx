import { KeycloakIdirUser, KeycloakUser, useKeycloak } from '@bcgov/citz-imb-kc-react';
import { InquiryProps, useInquiry } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface InquiryTabProps {
  value: number;
}

export const InquiryTab = (props: InquiryTabProps) => {
  const { value } = props;

  const { state: authState } = useKeycloak();
  const user = authState.userInfo as KeycloakUser & KeycloakIdirUser;

  const currentUserRoles: InquiryProps = {
    userGuid: user?.idir_user_guid,
    roles: user?.client_roles || [],
  };

  const { Table } = useInquiry(currentUserRoles);

  return (
    <CustomTabPanel value={value} index={0}>
      {Table}
    </CustomTabPanel>
  );
};
