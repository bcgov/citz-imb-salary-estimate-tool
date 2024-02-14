/**
 * this component is a wrapper for the DataGrid component from @mui/x-data-grid
 * it provides a title for the table and a default pageSize of 10
 * it also disables row selection
 * and provides a default paginationModel
 * see https://mui.com/components/data-grid/ for more information
 *
 * @param {TableContainerProps} props
 * @returns {JSX.Element}
 *
 * any styling of the table should be done in this component
 * any styling of the columns should be done in the columns file
 * any styling of the cells should be done in the cell components
 */
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { TableContainerProps } from './TableContainer.d';

export const TableContainer = <TDataType,>(props: TableContainerProps<TDataType>) => {
  const { rows, columns, title, getRowId, forms, isLoading } = props;
  const actionColumns: typeof columns = [];
  const actionBar: JSX.Element[] = [];

  if (forms.view.show)
    actionColumns.push({
      field: 'viewColumn',
      headerName: '',
      width: 60,
      renderCell: (params) => forms.view.FormDialog(params.row),
    });

  if (forms.edit.show)
    actionColumns.push({
      field: 'editColumn',
      headerName: '',
      width: 60,
      renderCell: (params) => forms.edit.FormDialog(params.row),
    });

  if (forms.remove.show)
    actionColumns.push({
      field: 'removeColumn',
      headerName: '',
      width: 60,
      renderCell: (params) => forms.remove.FormDialog(params.row),
    });

  if (forms.create.show) actionBar.push(forms.create.FormDialog());
  if (forms.addBulk.show) actionBar.push(forms.addBulk.FormDialog());

  const extendedColumns = actionColumns.concat(columns);

  return (
    <Box padding={1} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Stack direction="row" spacing={1}>
            {actionBar.map((action) => (
              <div key={action.props.mode || 'addbulk'}>{action}</div>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack sx={{ height: 400, width: '100%' }}>
        <Stack flex={1}>
          <DataGrid
            rows={rows}
            columns={extendedColumns}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            pageSizeOptions={[10, 20, 50, 100]}
            disableRowSelectionOnClick
            getRowId={getRowId}
            loading={isLoading}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

TableContainer.defaultProps = {
  getRowId: null,
  view: null,
  edit: null,
  deleteRow: null,
  isLoading: false,
};

export default TableContainer;
