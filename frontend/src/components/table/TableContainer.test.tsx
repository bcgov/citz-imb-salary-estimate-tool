import { render, screen } from '@testing-library/react';
import { TableContainer } from './TableContainer';

describe('TableContainer', () => {
  it('renders the table name and the DataGrid', () => {
    const rows = [{ id: 1, name: 'Test' }];
    const columns = [{ field: 'name', headerName: 'Name' }];

    render(
      <TableContainer rows={rows} columns={columns} tableName="Test Table" />
    );

    expect(screen.getByText('Test Table')).toBeInTheDocument();
    expect(screen.getByRole('grid')).toBeInTheDocument();
    expect(screen.queryAllByTestId('AddCircleOutlineIcon')).toHaveLength(0);
  });

  it('renders the correct number of rows', () => {
    const rows = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
    ];
    const columns = [{ field: 'name', headerName: 'Name' }];

    render(
      <TableContainer rows={rows} columns={columns} tableName="Test Table" />
    );

    expect(screen.getAllByRole('row')).toHaveLength(rows.length + 1); // +1 for the header row
  });

  it('renders the correct number of columns', () => {
    const rows = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
    ];
    const columns = [{ field: 'name', headerName: 'Name' }];

    render(
      <TableContainer rows={rows} columns={columns} tableName="Test Table" />
    );

    expect(screen.getAllByRole('columnheader')).toHaveLength(columns.length);
  });

  it('renders the add button if an addAction is provided', () => {
    const rows = [{ id: 1, name: 'Test' }];
    const columns = [{ field: 'name', headerName: 'Name' }];
    const addAction = jest.fn();

    render(
      <TableContainer
        rows={rows}
        columns={columns}
        tableName="Test Table"
        addAction={addAction}
      />
    );

    expect(screen.getByTestId('AddCircleOutlineIcon')).toBeInTheDocument();
  });
});
