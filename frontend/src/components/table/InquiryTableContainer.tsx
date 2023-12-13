import { useInquiry } from '../../hooks';
import { ErrorDialog } from '../dialogs/ErrorDialog';
import { Loading } from '../loading/Loading';
import { TableContainer } from './TableContainer';

export const InquiryTableContainer = () => {
  const { data, columns, isLoading, isError, error, AddFormDialog } =
    useInquiry();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorDialog error={error} />;

  return (
    <TableContainer rows={data} columns={columns} tableName="Inquiries">
      {AddFormDialog}
    </TableContainer>
  );
};

export default InquiryTableContainer;
