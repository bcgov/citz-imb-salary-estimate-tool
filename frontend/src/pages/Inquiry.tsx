import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ErrorDialog, Loading, TableContainer } from '../components';
import { useAuthentication, useInquiry } from '../hooks';
import { InquiryData } from '../types';

export const Inquiry = () => {
  const { isAuthenticated } = useAuthentication();
  const { data, columns, isLoading, isError, error, append } = useInquiry();

  const addItem = async () => {
    const newItem: InquiryData = {
      status_id: 0,
      inquiry_submission_date: new Date(),
      candidate_first_name: 'first',
      candidate_last_name: 'last',
      experience_level_id: 0,
      new_position_number: 12345,
      new_position_title: 'title',
      new_mccf_classification_id: 56789,
      appointment_type_id: 1,
      process_type_id: 4,
    };
    append(newItem);
  };

  if (!isAuthenticated) return <Navigate replace to="/" />;

  if (isLoading) return <Loading />;

  if (isError) return <ErrorDialog error={error} />;

  return (
    <Box p={2}>
      <TableContainer
        rows={data}
        columns={columns}
        tableName="Hiring Manager Salary Inquiries"
        addAction={addItem}
      />
    </Box>
  );
};

export default Inquiry;
