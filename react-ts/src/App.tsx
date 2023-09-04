import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import TimeZoneSelect from './components/TimeZoneSelect'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>React Playground</h1>

        <TimeZoneSelect />
      </QueryClientProvider>
    </>
  )
}

export default App;
