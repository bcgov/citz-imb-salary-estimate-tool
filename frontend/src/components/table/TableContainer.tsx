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
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AddButton } from '../buttons/AddButton';

interface TableContainerProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  rows: T[];
  columns: GridColDef[];
  tableName: string;
  addAction?: () => void;
  getRowId?: (row: T) => string;
}

export const TableContainer = <T,>(props: TableContainerProps<T>) => {
  const { rows, columns, tableName, addAction, getRowId } = props;

  return (
    <Box padding={1} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {tableName}
          </Typography>
          {addAction && <AddButton onClick={addAction} />}
        </Toolbar>
      </AppBar>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
};

TableContainer.defaultProps = {
  addAction: null,
  getRowId: null,
};

export default TableContainer;
