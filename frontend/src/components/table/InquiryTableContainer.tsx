import { useInquiry } from '../../hooks';
import { ErrorDialog } from '../dialogs/ErrorDialog';
import { Loading } from '../loading/Loading';
import { TableContainer } from './TableContainer';

export const InquiryTableContainer = () => {
  const {
    data,
    columns,
    isLoading,
    isError,
    error,
    AddFormDialog,
    ViewFormDialog,
    EditFormDialog,
  } = useInquiry();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorDialog error={error} />;

  return (
    <TableContainer
      edit={EditFormDialog}
      view={ViewFormDialog}
      rows={data}
      columns={columns}
      tableName="Inquiries"
    >
      {AddFormDialog}
    </TableContainer>
  );
};

export default InquiryTableContainer;
