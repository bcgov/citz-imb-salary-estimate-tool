import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Salary Estimate Tool</div>
    </QueryClientProvider>
  );
}

export default App;
