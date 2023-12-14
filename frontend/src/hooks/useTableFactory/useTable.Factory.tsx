import { GridColDef } from '@mui/x-data-grid';
import { TableContainer } from '../../components';

export interface ITableFactoryProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  rows: T[];
  columns: GridColDef[];
  ViewFormDialog?: (data: unknown) => void;
  EditFormDialog?: (data: unknown) => void;
  DeleteRow?: (data: unknown) => void;
  AddFormDialog?: JSX.Element;
}

export const useTableFactory = <T,>(props: ITableFactoryProps<T>) => {
  const {
    rows,
    columns,
    EditFormDialog,
    ViewFormDialog,
    DeleteRow,
    AddFormDialog,
  } = props;

  return (
    <TableContainer
      edit={EditFormDialog as (data: T) => JSX.Element}
      view={ViewFormDialog as (data: T) => JSX.Element}
      deleteRow={DeleteRow as (data: T) => JSX.Element}
      rows={rows}
      columns={columns}
      tableName="Inquiries"
    >
      {AddFormDialog}
    </TableContainer>
  );
};

useTableFactory.defaultProps = {
  ViewFormDialog: null,
  EditFormDialog: null,
  DeleteRow: null,
  AddFormDialog: null,
};

export default useTableFactory;
