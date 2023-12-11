import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Navigate } from 'react-router-dom';
import {
  CustomTabPanel,
  InquiryTableContainer,
  UserTableContainer,
} from '../components';
import { useAuthentication } from '../hooks';

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

  if (!isAuthenticated) return <Navigate replace to="/login" />;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Table Tabs">
          <Tab label="Inquiries" {...a11yProps(0)} />
          <Tab label="Users" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <InquiryTableContainer />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {hasRole('admin') ? <UserTableContainer /> : <Box />}
      </CustomTabPanel>
    </Box>
  );
};

export default Home;
