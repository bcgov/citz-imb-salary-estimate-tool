import { useAuthentication, useExperience } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface ExperienceTabProps {
  value: number;
}

export const ExperienceTab = (props: ExperienceTabProps) => {
  const { value } = props;
  const { hasRole } = useAuthentication();
  const { Table } = useExperience();

  return (
    <CustomTabPanel value={value} index={4}>
      {hasRole(['admin']) && Table}
    </CustomTabPanel>
  );
};
