import { useState } from 'react';
import { Box, Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { httpBatchLink } from '@trpc/client';
import { Footer, Navbar } from '@/components';
import { useAuthentication } from '@/hooks';
import PageRouter from './routes/PageRouter';
import { trpc } from './utils/trpc';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    });
  });

  const { KeycloakProvider } = useAuthentication();

  const response = trpc.ministry.list.useQuery();

  console.log(response);

  return (
    <KeycloakProvider>
      <trpc.Provider queryClient={queryClient} client={trpcClient}>
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
      </trpc.Provider>
    </KeycloakProvider>
  );
};

export default App;
