import { Box } from '@mui/material';
import { Error, Loading, TableContainer } from '../components';
import { useInquiry } from '../hooks';

export const Inquiry = () => {
  const { data, columns, isLoading, isError, error } = useInquiry();

  if (isLoading) return <Loading />;

  if (isError) return <Error error={error as Error} />;

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
