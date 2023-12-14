/**
 * this component is a wrapper for the DataGrid component from @mui/x-data-grid
 * it provides a title for the table and a default pageSize of 10
 * it also disables row selection
 * and provides a default paginationModel
 * see https://mui.com/components/data-grid/ for more information
 *
 * @param {ITableContainerProps} props
 * @returns {JSX.Element}
 *
 * any styling of the table should be done in this component
 * any styling of the columns should be done in the columns file
 * any styling of the cells should be done in the cell components
 */
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface ITableContainerProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  rows: T[];
  columns: GridColDef[];
  tableName: string;
  getRowId?: (row: T) => string;
  view?: (data: T) => JSX.Element;
  edit?: (data: T) => JSX.Element;
  deleteRow?: (data: T) => JSX.Element;
}

export const TableContainer = <T,>(props: ITableContainerProps<T>) => {
  const {
    children,
    rows,
    columns,
    tableName,
    getRowId,
    view,
    edit,
    deleteRow,
  } = props;

  const actionColumns: typeof columns = [];

  if (view)
    actionColumns.push({
      field: 'viewAction',
      headerName: '',
      width: 60,
      renderCell: (params) => view(params.row),
    });

  if (edit)
    actionColumns.push({
      field: 'editAction',
      headerName: '',
      width: 60,
      renderCell: (params) => edit(params.row),
    });

  if (deleteRow)
    actionColumns.push({
      field: 'deleteAction',
      headerName: '',
      width: 60,
      renderCell: (params) => deleteRow(params.row),
    });

  const extendedColumns = actionColumns.concat(columns);

  return (
    <Box padding={1} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {tableName}
          </Typography>
          <Stack direction="row" spacing={1}>
            {children}
          </Stack>
        </Toolbar>
      </AppBar>

      <DataGrid
        rows={rows}
        columns={extendedColumns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
};

TableContainer.defaultProps = {
  getRowId: null,
  view: null,
  edit: null,
  deleteRow: null,
};

export default TableContainer;
