import { Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BCTheme from './styles';

const App = () => {
  const queryClient = new QueryClient();

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

export default App;
