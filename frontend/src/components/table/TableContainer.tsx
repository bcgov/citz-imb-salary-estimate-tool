import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import React from 'react';

interface TableContainerProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  rows: T[];
  columns: GridColDef[];
}

export const TableContainer = <T,>(props: TableContainerProps<T>) => {
  const { rows = [], columns = [] } = props;
  return (
    <>
      <h1>TableContainer</h1>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default TableContainer;
