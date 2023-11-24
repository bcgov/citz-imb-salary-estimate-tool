import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ErrorDialog, Loading, TableContainer } from '../components';
import { useAuthentication, useInquiry } from '../hooks';

export const Inquiry = () => {
  const { isAuthenticated } = useAuthentication();
  const { data, columns, isLoading, isError, error } = useInquiry();

  if (!isAuthenticated) return <Navigate replace to="/" />;

  if (isLoading) return <Loading />;

  if (isError) return <ErrorDialog error={error} />;

  return (
    <Box p={2}>
      <TableContainer
        rows={data}
        columns={columns}
        tableName="Hiring Manager Salary Inquiries"
      />
    </Box>
  );
};

export default Inquiry;
