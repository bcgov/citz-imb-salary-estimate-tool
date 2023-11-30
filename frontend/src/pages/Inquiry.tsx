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
      status_id: 1,
      inquiry_submission_date: new Date(),
      inquiry_completion_date: new Date('2023-11-01T20:02:34.516Z'),
      candidate_first_name: 'Mick',
      candidate_last_name: 'Swagger',
      current_position_number: 293847,
      current_position_title: 'Full Stack Developer',
      current_ministry_id: 'CITZ',
      current_annual_salary: 80000,
      current_mccf_classification_id: 3,
      experience_level_id: 2,
      new_position_number: 473829,
      new_position_title: 'Scrum Master',
      new_mccf_classification_id: 4,
      appointment_type_id: 1,
      process_type_id: 2,
      salary_estimate: 100000,
      hm_comment: 'Here is the info for the successful candidate',
      shr_comment: 'Here is the salary estimate',
      adm_comment: 'Everything has been approved',
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
