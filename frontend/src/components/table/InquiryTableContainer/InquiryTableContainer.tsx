import { useInquiry } from '../../../hooks';
import { ErrorDialog } from '../../dialogs/ErrorDialog/ErrorDialog';
import { Loading } from '../../loading/Loading/Loading';
import { TableContainer } from '../TableContainer/TableContainer';

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
    DeleteRow,
  } = useInquiry();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorDialog error={error} />;

  return (
    <TableContainer
      edit={EditFormDialog}
      view={ViewFormDialog}
      deleteRow={DeleteRow}
      rows={data}
      columns={columns}
      tableName="Inquiries"
    >
      {AddFormDialog}
    </TableContainer>
  );
};

export default InquiryTableContainer;
