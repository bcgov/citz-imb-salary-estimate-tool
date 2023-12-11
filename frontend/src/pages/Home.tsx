import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ErrorDialog, Loading, TableContainer } from '../components';
import { useAuthentication, useInquiry, useUser } from '../hooks';
import { InquiryData } from '../types';

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.defaultProps = {
  children: '',
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Home = () => {
  const [value, setValue] = useState(0);
  const { isAuthenticated, hasRole } = useAuthentication();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {
    data: inquiryData,
    columns: inquiryColumns,
    isLoading: inquiriesLoading,
    isError: inquiriesError,
    error: inquiryError,
    append,
  } = useInquiry();

  const {
    data: userData,
    columns: userColumns,
    isLoading: usersAreLoading,
    isError: usersError,
    error: userError,
  } = useUser();

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

  if (!isAuthenticated) return <Navigate replace to="/login" />;

  if (usersAreLoading || inquiriesLoading) return <Loading />;

  if (usersError) return <ErrorDialog error={userError} />;

  if (inquiriesError) return <ErrorDialog error={inquiryError} />;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Table Tabs">
          <Tab label="Inquiries" {...a11yProps(0)} />
          <Tab label="Users" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableContainer
          rows={inquiryData}
          columns={inquiryColumns}
          tableName="Inquiries"
          addAction={addItem}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {hasRole('admin') ? (
          <TableContainer
            rows={userData}
            columns={userColumns}
            tableName="Users"
            getRowId={(row) => row.guid}
          />
        ) : (
          <div />
        )}
      </CustomTabPanel>
    </Box>
  );
};

export default Home;
