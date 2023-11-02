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
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import React from 'react';

interface TableContainerProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  rows: T[];
  columns: GridColDef[];
  tableName: string;
}

export const TableContainer = <T,>(props: TableContainerProps<T>) => {
  const { rows = [], columns = [], tableName } = props;
  return (
    <Box padding={1}>
      <Typography variant="h3" padding={2}>
        {tableName}
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TableContainer;
