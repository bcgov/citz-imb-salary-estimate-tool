import { useAuthentication, useUser } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface UserTabProps {
  value: number;
}

// eslint-disable-next-line import/prefer-default-export
export const UserTab = (props: UserTabProps) => {
  const { value } = props;
  const { hasRole } = useAuthentication();
  const { UserTable } = useUser();

  return (
    <CustomTabPanel value={value} index={1}>
      {hasRole(['admin']) && UserTable}
    </CustomTabPanel>
  );
};
