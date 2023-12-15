import { GridColDef } from '@mui/x-data-grid';
import { TableContainer } from '../../components';

export interface ITableFactoryProps<TDataType>
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  rows: TDataType[];
  columns: GridColDef[];
  ViewFormDialog?: (data: unknown) => void;
  EditFormDialog?: (data: unknown) => void;
  DeleteRow?: (data: unknown) => void;
  AddFormDialog?: JSX.Element;
}

export const useTableFactory = <TDataType,>(
  props: ITableFactoryProps<TDataType>
) => {
  const {
    title,
    rows,
    columns,
    EditFormDialog,
    ViewFormDialog,
    DeleteRow,
    AddFormDialog,
  } = props;

  return (
    <TableContainer
      edit={EditFormDialog as (data: TDataType) => JSX.Element}
      view={ViewFormDialog as (data: TDataType) => JSX.Element}
      deleteRow={DeleteRow as (data: TDataType) => JSX.Element}
      rows={rows}
      columns={columns}
      tableName={title}
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
