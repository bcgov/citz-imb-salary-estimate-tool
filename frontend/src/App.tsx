import { Box, Paper, Typography } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Inquiry } from './pages';
import { useAuthentication } from './hooks';

const App = () => {
  const { isAuthenticated, KeycloakProvider } = useAuthentication();

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
          <Navbar>
            <Typography variant="h4">Salary Estimation Tool</Typography>
          </Navbar>
          <Routes>
            <Route
              path="/"
              element={<Home isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/Inquiry"
              element={<Inquiry isAuthenticated={isAuthenticated} />}
            />
          </Routes>
        </Box>
        <Footer />
      </Paper>
      <ReactQueryDevtools initialIsOpen={false} />
    </KeycloakProvider>
  );
};

export default App;
