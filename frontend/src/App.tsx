import { useKeycloak } from '@bcgov/kc-react';
import { Box, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Inquiry, Home } from './pages';
import BCTheme from './styles';

const App = () => {
  const queryClient = new QueryClient();
  const { state } = useKeycloak();

  const isAuthenticated = state?.userInfo !== undefined;

  return (
    <ThemeProvider theme={BCTheme}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Paper
            elevation={0}
            sx={{
              height: '100vh',
              display: 'flex',
              'flex-direction': 'column',
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
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
