import { GridColDef } from '@mui/x-data-grid';
import type { TableContainerProps } from '@/components';

export interface UseTableFactoryProps<TDataType> extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  rows?: TDataType[];
  forms?: UseFormFactoryReturn;
  columns?: GridColDef[];
  tableProps?: TableContainerProps<TDataType>;
  AddBulkFormDialog?: JSX.Element;
  AddFormDialog?: JSX.Element;
}
