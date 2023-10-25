import { Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { BCTheme } from './styles';
import { Home } from './routes';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={BCTheme}>
      <Router>
        <QueryClientProvider client={queryClient}>
          {/* // Todo: paper element needs the margins removed */}
          <Paper
            elevation={0}
            sx={{
              height: '100vh',
              display: 'flex',
              'flex-direction': 'column',
            }}
          >
            <Navbar>
              <Typography variant="h4">Salary Estimation Tool</Typography>
            </Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Paper>
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  );
};
