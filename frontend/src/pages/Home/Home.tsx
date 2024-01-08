import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { CustomTabPanel } from '@/components';
import { useAuthentication, useInquiry, useUser, useSalaryData } from '@/hooks';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Home = () => {
  const [value, setValue] = useState(0);
  const { isAuthenticated, hasRole } = useAuthentication();
  const { UserTable } = useUser();
  const { SalaryDataTable } = useSalaryData();
  const { state: authState } = useKeycloak();
  let InquiryParams;
  const user = authState.userInfo;
  // TODO: Add ! to hasRole
  if (!hasRole('admin')) InquiryParams = user?.idir_user_guid;
  const { InquiryTable } = useInquiry(InquiryParams);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!isAuthenticated) return <Navigate replace to="/login" />;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Table Tabs">
          <Tab label="Inquiries" {...a11yProps(0)} />
          {hasRole('admin') && <Tab label="Users" {...a11yProps(1)} />}
          {hasRole('admin') && <Tab label="Salary Data" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {InquiryTable}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {hasRole('admin') && UserTable}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {hasRole('admin') && SalaryDataTable}
      </CustomTabPanel>
    </Box>
  );
};

export default Home;
