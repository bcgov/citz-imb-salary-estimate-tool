import { Box } from '@mui/material';
import { useInquiry } from '../../hooks';
import { NewInquiryDialog } from '../dialogs/NewInquiry.Dialog';
import { ErrorDialog } from '../dialogs/ErrorDialog';
import { Loading } from '../loading/Loading';
import { TableContainer } from './TableContainer';

export const InquiryTableContainer = () => {
  const { data, columns, isLoading, isError, error } = useInquiry();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorDialog error={error} />;

  return (
    <Box p={2}>
      <TableContainer rows={data} columns={columns} tableName="Inquiries">
        <NewInquiryDialog />
      </TableContainer>
    </Box>
  );
};

export default InquiryTableContainer;
