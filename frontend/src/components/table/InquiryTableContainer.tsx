import { useInquiry } from '../../hooks';
import { ErrorDialog } from '../dialogs/ErrorDialog/ErrorDialog';
import { NewInquiryDialog } from '../dialogs/NewInquiryDialog/NewInquiryDialog';
import { Loading } from '../loading/Loading/Loading';
import { TableContainer } from './TableContainer';

export const InquiryTableContainer = () => {
  const { data, columns, isLoading, isError, error } = useInquiry();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorDialog error={error} />;

  return (
    <TableContainer rows={data} columns={columns} tableName="Inquiries">
      <NewInquiryDialog />
    </TableContainer>
  );
};

export default InquiryTableContainer;
