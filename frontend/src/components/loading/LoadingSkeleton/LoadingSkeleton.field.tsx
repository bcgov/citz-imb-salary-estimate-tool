import { Skeleton } from '@mui/material';

export const LoadingSkeletonField = () => {
  return (
    <Skeleton variant="rectangular" width="100%" height={50} animation="wave" />
  );
};

export default LoadingSkeletonField;
