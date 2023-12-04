import { Box, Paper } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Inquiry, InquiryNew } from './pages';
import { useAuthentication } from './hooks';

const App = () => {
  const { KeycloakProvider } = useAuthentication();

  return (
    <KeycloakProvider>
      <Paper
        elevation={0}
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Navbar title="Salary Estimation Tool" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Inquiry" element={<Inquiry />} />
            <Route path="/Inquiry/New" element={<InquiryNew />} />
          </Routes>
        </Box>
        <Footer />
      </Paper>
      <ReactQueryDevtools initialIsOpen={false} />
    </KeycloakProvider>
  );
};

export default App;
