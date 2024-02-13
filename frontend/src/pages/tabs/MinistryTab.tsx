import { useAuthentication, useMinistry } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface MinistryTabProps {
  value: number;
}

export const MinistryTab = (props: MinistryTabProps) => {
  const { value } = props;
  const { hasRole } = useAuthentication();
  const { Table } = useMinistry();

  return (
    <CustomTabPanel value={value} index={3}>
      {hasRole(['admin']) && Table}
    </CustomTabPanel>
  );
};
