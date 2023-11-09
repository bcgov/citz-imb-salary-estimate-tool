import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ErrorDialog, Loading, TableContainer } from '../components';
import { useInquiry } from '../hooks';

interface InquiryProps {
  isAuthenticated?: boolean;
}

export const Inquiry = (props: InquiryProps) => {
  const { isAuthenticated } = props;
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

Inquiry.defaultProps = {
  isAuthenticated: false,
};

export default Inquiry;
