import { Box } from '@mui/material';
import { Error, Loading, TableContainer } from '../components';
import { useHMInquiry } from '../hooks';

export const HMInquiry = () => {
  const { data, columns, isLoading, isError, error } = useHMInquiry();

  if (isLoading) return <Loading />;

  if (isError) return <Error error={error as Error} />;

  return (
    <Box p={2}>
      <TableContainer rows={data} columns={columns} />
    </Box>
  );
};

export default HMInquiry;
