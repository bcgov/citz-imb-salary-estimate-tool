import { useAuthentication, useMinistry } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface MinistryTabProps {
  value: number;
}

// eslint-disable-next-line import/prefer-default-export
export const MinistryTab = (props: MinistryTabProps) => {
  const { value } = props;
  const { hasRole } = useAuthentication();
  const { MinistryTable } = useMinistry();

  return (
    <CustomTabPanel value={value} index={3}>
      {hasRole(['admin']) && MinistryTable}
    </CustomTabPanel>
  );
};
