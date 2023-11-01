import { Box, Typography } from '@mui/material';
import { useHMInquiry } from '../hooks';
import { TableContainer } from '../components';

export const HMInquiry = () => {
  const { data, columns, isLoading, isError } = useHMInquiry();

  if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (isError) {
    return <Typography variant="h4">Error...</Typography>;
  }

  console.log({ data });

  return (
    <Box p={2}>
      <TableContainer rows={data} columns={columns} />
    </Box>
  );
};

export default HMInquiry;
