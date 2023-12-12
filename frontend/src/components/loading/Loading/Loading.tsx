import { Box, LinearProgress } from '@mui/material';

export const Loading = () => {
  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <LinearProgress />
    </Box>
  );
};

export default Loading;
