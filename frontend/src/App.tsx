import { Box, Paper } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Footer, Navbar } from './components';
import { useAuthentication } from './hooks';
import PageRouter from './routes/PageRouter';

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
          <PageRouter />
        </Box>
        <Footer />
      </Paper>
      <ReactQueryDevtools initialIsOpen={false} />
    </KeycloakProvider>
  );
};

export default App;
