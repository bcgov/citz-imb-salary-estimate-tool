import { Box, Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Footer, Navbar } from '@/components';
import { useAuthentication } from '@/hooks';
import PageRouter from './routes/PageRouter';

const queryClient = new QueryClient();

const App = () => {
  const { KeycloakProvider } = useAuthentication();

  return (
    <KeycloakProvider>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
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
              <PageRouter />
            </Box>
            <Footer />
          </Paper>
          <ReactQueryDevtools initialIsOpen={false} />
        </LocalizationProvider>
      </QueryClientProvider>
    </KeycloakProvider>
  );
};

export default App;
