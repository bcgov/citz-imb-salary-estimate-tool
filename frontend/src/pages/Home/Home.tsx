import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from '@/hooks';

import {
  InquiryTab,
  UserTab,
  SalaryDataTab,
  MinistryTab,
  ExperienceTab,
} from '../tabs';

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
          {hasRole(['admin']) && <Tab label="Users" {...a11yProps(1)} />}
          {hasRole(['admin']) && <Tab label="Salary Data" {...a11yProps(2)} />}
          {hasRole(['admin']) && <Tab label="Ministry" {...a11yProps(3)} />}
          {hasRole(['admin']) && <Tab label="Experience" {...a11yProps(4)} />}
        </Tabs>
      </Box>
      <InquiryTab value={value} />
      <UserTab value={value} />
      <SalaryDataTab value={value} />
      <MinistryTab value={value} />
      <ExperienceTab value={value} />
    </Box>
  );
};

export default Home;
