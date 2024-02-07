import { GridColDef } from '@mui/x-data-grid';
import { UseFormFactoryReturn } from '@/hooks/factories';

export interface TableContainerProps<TDataType> extends React.HTMLAttributes<HTMLDivElement> {
  rows: TDataType[];
  forms: UseFormFactoryReturn;
  columns: GridColDef[];
  title: string;
  getRowId?: (row: TDataType) => string;
  view?: (data: TDataType) => JSX.Element;
  edit?: (data: TDataType) => JSX.Element;
  remove?: (data: TDataType) => JSX.Element;
}
