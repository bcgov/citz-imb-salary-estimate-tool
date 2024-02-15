import { useAuthentication, useUser } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface UserTabProps {
  value: number;
}

export const UserTab = (props: UserTabProps) => {
  const { value } = props;
  const { hasRole } = useAuthentication();
  const { Table } = useUser();

  return (
    <CustomTabPanel value={value} index={1}>
      {hasRole(['admin']) && Table}
    </CustomTabPanel>
  );
};
