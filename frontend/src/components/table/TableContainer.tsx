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
