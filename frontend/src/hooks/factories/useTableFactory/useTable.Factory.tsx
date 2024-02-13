import { TableContainer } from '@/components';
import type { UseTableFactoryProps } from './UseTable.Factory.d';

export const useTableFactory = <TDataType,>(props: UseTableFactoryProps<TDataType>) => {
  const { columns, rows, forms, title, isLoading } = props;

  return (
    <TableContainer
      title={title || ''}
      columns={columns || []}
      rows={rows || []}
      forms={forms}
      isLoading={isLoading}
    />
  );
};

export default useTableFactory;
