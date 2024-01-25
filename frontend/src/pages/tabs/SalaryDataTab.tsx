import { useAuthentication, useSalaryData } from '@/hooks';
import { CustomTabPanel } from '@/components';

interface SalaryDataTabProps {
  value: number;
}

export const SalaryDataTab = (props: SalaryDataTabProps) => {
  const { value } = props;
  const { hasRole } = useAuthentication();
  const { SalaryDataTable } = useSalaryData();

  return (
    <CustomTabPanel value={value} index={2}>
      {hasRole(['admin']) && SalaryDataTable}
    </CustomTabPanel>
  );
};
