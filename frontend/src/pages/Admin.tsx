import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ErrorDialog, Loading, TableContainer } from '../components';
import { useAuthentication, useUser, useInquiry } from '../hooks';

export const Admin = () => {
  const { isAuthenticated } = useAuthentication();
  const {
    data: userData,
    columns: userColumns,
    isLoading: usersAreLoading,
    isError: usersError,
    error: userError,
  } = useUser();

  const {
    data: inquiryData,
    columns: inquiryColumns,
    isLoading: inquiriesLoading,
    isError: inquiriesError,
    error: inquiryError,
  } = useInquiry();

  if (!isAuthenticated) return <Navigate replace to="/" />;

  if (usersAreLoading || inquiriesLoading) return <Loading />;

  if (usersError) return <ErrorDialog error={userError} />;

  if (inquiriesError) return <ErrorDialog error={inquiryError} />;

  return (
    <Box p={2}>
      <TableContainer
        rows={userData}
        columns={userColumns}
        tableName="Users"
        getRowId={(row) => row.guid}
      />
      <TableContainer
        rows={inquiryData}
        columns={inquiryColumns}
        tableName="All Inquiries"
      />
    </Box>
  );
};

export default Admin;
